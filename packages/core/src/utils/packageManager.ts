import { IFileSystem } from '../filesystem';
import JSZip from 'jszip';
import pako from 'pako';

export interface PackageMetadata {
  name: string;
  version: string;
  dist: {
    tarball: string;
    shasum: string;
  };
  dependencies?: Record<string, string>;
}

export class PackageManager {
  constructor(private fileSystem: IFileSystem) {}

  async fetchPackageMetadata(packageName: string): Promise<PackageMetadata> {
    try {
      const response = await fetch(`https://registry.npmjs.org/${packageName}/latest`);
      if (!response.ok) {
        throw new Error(`Failed to fetch package metadata: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Error fetching package metadata: ${error.message}`);
    }
  }

  async downloadAndExtractPackage(packageName: string, version?: string): Promise<void> {
    try {
      // Fetch package metadata
      const metadata = await this.fetchPackageMetadata(packageName);
      const tarballUrl = metadata.dist.tarball;

      // Download tarball
      const response = await fetch(tarballUrl);
      if (!response.ok) {
        throw new Error(`Failed to download package: ${response.statusText}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const zip = await JSZip.loadAsync(arrayBuffer);

      // Create node_modules directory if it doesn't exist
      const nodeModulesPath = '/node_modules';
      const packagePath = `${nodeModulesPath}/${packageName}`;
      
      if (!this.fileSystem.exists(nodeModulesPath)) {
        this.fileSystem.createDirectory(nodeModulesPath);
      }
      if (!this.fileSystem.exists(packagePath)) {
        this.fileSystem.createDirectory(packagePath);
      }

      // Extract files
      for (const [filename, file] of Object.entries(zip.files)) {
        if (!file.dir) {
          const content = await file.async('string');
          const filePath = `${packagePath}/${filename}`;
          const dirPath = filePath.substring(0, filePath.lastIndexOf('/'));
          
          if (!this.fileSystem.exists(dirPath)) {
            this.fileSystem.createDirectory(dirPath);
          }
          
          this.fileSystem.writeFile(filePath, content);
        }
      }

      // Create/update package.json
      const packageJson = {
        name: metadata.name,
        version: metadata.version,
        dependencies: metadata.dependencies || {}
      };

      this.fileSystem.writeFile(
        `${packagePath}/package.json`,
        JSON.stringify(packageJson, null, 2)
      );

      console.log(`Successfully installed ${packageName}@${metadata.version}`);
    } catch (error) {
      throw new Error(`Failed to install package ${packageName}: ${error.message}`);
    }
  }

  async installPackage(packageName: string, version?: string): Promise<void> {
    const installed = new Set<string>();
    await this.installPackageWithDependencies(packageName, version, installed);
  }

  private async installPackageWithDependencies(
    packageName: string,
    version?: string,
    installed: Set<string> = new Set()
  ): Promise<void> {
    const packageKey = `${packageName}${version ? '@' + version : ''}`;
    if (installed.has(packageKey)) return;

    await this.downloadAndExtractPackage(packageName, version);
    installed.add(packageKey);

    // Read installed package.json
    const packagePath = `/node_modules/${packageName}/package.json`;
    if (this.fileSystem.fileExists(packagePath)) {
      const packageJson = JSON.parse(this.fileSystem.readFile(packagePath) || '{}');
      const dependencies = packageJson.dependencies || {};

      // Install dependencies recursively
      for (const [depName, depVersion] of Object.entries(dependencies)) {
        await this.installPackageWithDependencies(
          depName,
          depVersion,
          installed
        );
      }
    }
  }

  async createPackageJson(path: string, options: {
    name: string;
    version?: string;
    description?: string;
    main?: string;
    scripts?: Record<string, string>;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
  }): Promise<void> {
    const packageJson = {
      name: options.name,
      version: options.version || '1.0.0',
      description: options.description || '',
      main: options.main || 'index.js',
      scripts: options.scripts || {},
      dependencies: options.dependencies || {},
      devDependencies: options.devDependencies || {}
    };

    this.fileSystem.writeFile(
      this.fileSystem.resolvePath('package.json', path),
      JSON.stringify(packageJson, null, 2)
    );
  }
}