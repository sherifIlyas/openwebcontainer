import { Process } from './base';
import { ProcessType, ProcessState } from '../types';
import { ProcessEvent } from '../events';

export class NpmProcess extends Process {
    private packageJson: any;
    private nodeModulesPath: string;

    constructor(pid: number, executablePath: string, args: string[] = [], parentPid?: number, cwd?: string) {
        super(pid, ProcessType.NPM, executablePath, args, parentPid, cwd);
        this.nodeModulesPath = this.cwd ? `${this.cwd}/node_modules` : '/node_modules';
    }

    protected async execute(): Promise<void> {
        try {
            const command = this.args[0];
            switch (command) {
                case 'install':
                    await this.handleInstall();
                    break;
                case 'run':
                    await this.handleRun();
                    break;
                default:
                    throw new Error(`Unsupported npm command: ${command}`);
            }
        } catch (error: any) {
            this.emitError(error.message);
            this._exitCode = 1;
        }
    }

    private async handleInstall(): Promise<void> {
        try {
            // Read package.json if it exists
            const packageJsonContent = await this.readPackageJson();
            this.packageJson = packageJsonContent ? JSON.parse(packageJsonContent) : {};

            // Parse packages to install
            const packages = this.args.slice(1);
            if (packages.length === 0 && !this.packageJson.dependencies) {
                throw new Error('No packages specified and no dependencies in package.json');
            }

            // Resolve dependencies
            const dependencies = await this.resolveDependencies(packages);
            
            // Create node_modules directory if it doesn't exist
            await this.ensureNodeModulesExists();

            // Install each package
            for (const dep of dependencies) {
                this.emitOutput(`Installing ${dep.name}@${dep.version}...`);
                await this.installPackage(dep);
            }

            this.emitOutput('Installation completed successfully');
            this._exitCode = 0;
        } catch (error: any) {
            throw new Error(`Installation failed: ${error.message}`);
        }
    }

    private async handleRun(): Promise<void> {
        try {
            const scriptName = this.args[1];
            if (!scriptName) {
                throw new Error('No script name specified');
            }

            const packageJsonContent = await this.readPackageJson();
            if (!packageJsonContent) {
                throw new Error('package.json not found');
            }

            const packageJson = JSON.parse(packageJsonContent);
            const script = packageJson.scripts?.[scriptName];
            if (!script) {
                throw new Error(`Script '${scriptName}' not found in package.json`);
            }

            // Execute the script
            await this.executeScript(script);
            this._exitCode = 0;
        } catch (error: any) {
            throw new Error(`Script execution failed: ${error.message}`);
        }
    }

    private async readPackageJson(): Promise<string | undefined> {
        const packageJsonPath = this.cwd ? `${this.cwd}/package.json` : '/package.json';
        try {
            return await this.spawnChild('cat', [packageJsonPath])
                .then(result => result.stdout);
        } catch (error) {
            return undefined;
        }
    }

    private async resolveDependencies(packages: string[]): Promise<Array<{ name: string, version: string }>> {
        // TODO: Implement proper dependency resolution
        // For now, just return direct dependencies
        return packages.map(pkg => {
            const [name, version] = pkg.split('@');
            return { name, version: version || 'latest' };
        });
    }

    private async ensureNodeModulesExists(): Promise<void> {
        try {
            await this.spawnChild('mkdir', ['-p', this.nodeModulesPath]);
        } catch (error) {
            // Directory might already exist
        }
    }

    private async installPackage(dep: { name: string, version: string }): Promise<void> {
        // TODO: Implement actual package installation
        // This is a placeholder that simulates package installation
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.emitOutput(`Installed ${dep.name}@${dep.version}`);
    }

    private async executeScript(script: string): Promise<void> {
        const result = await this.spawnChild('sh', ['-c', script]);
        this.emitOutput(result.stdout);
        if (result.stderr) {
            this.emitError(result.stderr);
        }
    }

    protected async onTerminate(): Promise<void> {
        // Cleanup if needed
    }
}