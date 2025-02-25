import { fs, normalizePath } from '@zenfs/core';
import { IFileSystem } from './types';

export class ZenFSCore implements IFileSystem {
    private fs: typeof fs;
    private packageCache: Map<string, any>;

    constructor() {
        this.fs = fs;
        this.packageCache = new Map();
    }
    readBuffer(path: string): Buffer | undefined {
        return this.fs.readFileSync(path);
    }
    writeBuffer(path: string, buffer: Buffer): void {
        return this.fs.writeFileSync(path, buffer);
    }
    normalizePath(path: string): string {
        return normalizePath(path);
    }

    writeFile(path: string, content: string): void {
        this.fs.writeFileSync(path, content,{encoding:'utf-8'});
    }

    readFile(path: string): string | undefined {
        return this.fs.readFileSync(path, 'utf-8');
    }

    deleteFile(path: string, recursive = false): void {
        this.fs.rmSync(path, {
            recursive
        });
    }

    listFiles(basePath:string="/"): string[] {
        const files = [];
        const items = fs.readdirSync(basePath, { withFileTypes: true });
        if (basePath.endsWith('/')) basePath = basePath.slice(0, -1);
        for (const item of items) {
            if (item.isDirectory()) {
                files.push(...this.listFiles(`${basePath}/${item.name}`));
            } else {
                files.push(`${basePath}/${item.name}`);
            }
        }

        return files;
    }

    resolvePath(path: string, basePath: string = ''): string {
        const normalizedPath = normalizePath(path);
        const normalizedBasePath = normalizePath(basePath);
        if (normalizedPath.startsWith('/')) {
            return normalizedPath;
        }
        return normalizedBasePath + '/' + normalizedPath;
    }

    fileExists(path: string): boolean {
        return this.fs.existsSync(path);
    }

    resolveModulePath(specifier: string, basePath: string = ''): string {
        const normalizedBasePath = normalizePath(basePath);
        const coreModules = ['fs', 'path', 'os', 'buffer', 'events', 'http', 'https', 'process', 'child_process'];

        // Handle core modules
        if (coreModules.includes(specifier)) {
            return `/polyfills/${specifier}.js`;
        }

        let resolvedPath: string;

        if (specifier.startsWith('./') || specifier.startsWith('../')) {
            const baseDir = normalizedBasePath.endsWith('/') ?
                normalizedBasePath :
                normalizedBasePath + '/';

            // Split paths into segments and handle .. navigation
            const baseSegments = baseDir.split('/').filter(Boolean);
            const specSegments = specifier.split('/').filter(Boolean);

            const resultSegments = [...baseSegments];

            for (const segment of specSegments) {
                if (segment === '..') {
                    if (resultSegments.length === 0) {
                        throw new Error(`Invalid path: ${specifier} goes beyond root from ${basePath}`);
                    }
                    resultSegments.pop();
                } else if (segment !== '.') {
                    resultSegments.push(segment);
                }
            }

            resolvedPath = '/' + resultSegments.join('/');
        } else {
            // Handle node_modules resolution
            const baseSegments = normalizedBasePath.split('/').filter(Boolean);
            while (baseSegments.length > 0) {
                const modulePath = '/' + [...baseSegments, 'node_modules', specifier].join('/');
                if (this.fs.existsSync(modulePath)) {
                    resolvedPath = modulePath;
                    break;
                }
                baseSegments.pop();
            }
            if (!resolvedPath) {
                resolvedPath = '/node_modules/' + specifier;
            }
        }

        // Check for file existence and package.json
        if (this.fs.existsSync(resolvedPath)) {
            const stat = this.fs.lstatSync(resolvedPath);
            if (stat.isFile()) return resolvedPath;
            if (stat.isDirectory()) {
                // Check for package.json main field
                const pkgPath = normalizePath(`${resolvedPath}/package.json`);
                if (this.fileExists(pkgPath)) {
                    try {
                        const pkg = JSON.parse(this.readFile(pkgPath) || '{}');
                        if (pkg.main) {
                            const mainPath = normalizePath(`${resolvedPath}/${pkg.main}`);
                            if (this.fileExists(mainPath)) return mainPath;
                        }
                    } catch (e) {
                        console.error(`Error parsing package.json at ${pkgPath}:`, e);
                    }
                }

                // Try index files
                const indexPath = normalizePath(`${resolvedPath}/index`);
                for (const ext of ['.js', '.mjs']) {
                    const withExt = `${indexPath}${ext}`;
                    if (this.fileExists(withExt)) {
                        return withExt;
                    }
                }
            }
        }

        // Try extensions
        for (const ext of ['.js', '.mjs']) {
            const withExt = `${resolvedPath}${ext}`;
            if (this.fileExists(withExt)) {
                return withExt;
            }
        }

        throw new Error(`Module not found: ${specifier} (resolved to ${resolvedPath})`);
    }

    createDirectory(path: string): void {
        this.fs.mkdirSync(path,{recursive:true});
    }

    deleteDirectory(path: string): void {
        this.fs.rmdirSync(path);
    }

    listDirectory(path: string): string[] {
        return this.fs.readdirSync(path);
    }

    isDirectory(path: string): boolean {
        return this.fs.lstatSync(path).isDirectory();
    }

    readPackageJson(packagePath: string): any {
        const pkgPath = this.resolvePath('package.json', packagePath);
        if (!this.fileExists(pkgPath)) {
            return null;
        }
        try {
            const content = this.readFile(pkgPath);
            return JSON.parse(content || '{}');
        } catch (error) {
            console.error(`Error reading package.json at ${pkgPath}:`, error);
            return null;
        }
    }

    writePackageJson(packagePath: string, content: any): void {
        const pkgPath = this.resolvePath('package.json', packagePath);
        try {
            this.writeFile(pkgPath, JSON.stringify(content, null, 2));
        } catch (error) {
            console.error(`Error writing package.json at ${pkgPath}:`, error);
            throw error;
        }
    }

    async installPackage(packageName: string, version?: string, options: { dev?: boolean } = {}): Promise<void> {
        const pkgJson = this.readPackageJson(process.cwd()) || {};
        const depField = options.dev ? 'devDependencies' : 'dependencies';
        
        if (!pkgJson[depField]) {
            pkgJson[depField] = {};
        }

        pkgJson[depField][packageName] = version || 'latest';
        this.writePackageJson(process.cwd(), pkgJson);

        try {
            // Create node_modules directory if it doesn't exist
            const nodeModulesPath = this.resolvePath('node_modules');
            if (!this.fileExists(nodeModulesPath)) {
                this.createDirectory(nodeModulesPath);
            }

            // Fetch package metadata from npm registry
            const registryUrl = `https://registry.npmjs.org/${packageName}`;
            const response = await fetch(registryUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch package metadata: ${response.statusText}`);
            }

            const metadata = await response.json();
            const targetVersion = version || 'latest';
            const versionData = targetVersion === 'latest' ? metadata['dist-tags'].latest : metadata.versions[targetVersion];

            if (!versionData) {
                throw new Error(`Version ${targetVersion} not found for package ${packageName}`);
            }

            // Download and extract package
            const tarballUrl = versionData.dist.tarball;
            const tarballResponse = await fetch(tarballUrl);
            if (!tarballResponse.ok) {
                throw new Error(`Failed to download package tarball: ${tarballResponse.statusText}`);
            }

            const packageDir = this.resolvePath(`node_modules/${packageName}`);
            this.createDirectory(packageDir);

            // Write package.json
            this.writePackageJson(packageDir, versionData);

            // TODO: Extract tarball contents
            // This would require implementing tar extraction in the browser
            // For now, we'll just create a minimal package structure

            // Create basic file structure
            const indexContent = `module.exports = {}`;
            this.writeFile(`${packageDir}/index.js`, indexContent);

            console.log(`Package ${packageName}@${versionData.version} installed successfully`);

            // Install dependencies recursively
            if (versionData.dependencies) {
                for (const [dep, depVersion] of Object.entries(versionData.dependencies)) {
                    await this.installPackage(dep, depVersion);
                }
            }
        } catch (error) {
            console.error(`Failed to install package ${packageName}:`, error);
            throw error;
        }
    }

    getInstalledPackages(): { [key: string]: string } {
        const pkgJson = this.readPackageJson(process.cwd());
        if (!pkgJson) return {};

        return {
            ...pkgJson.dependencies,
            ...pkgJson.devDependencies
        };
    }

    isPackageInstalled(packageName: string): boolean {
        const packages = this.getInstalledPackages();
        return !!packages[packageName];
    }
}
