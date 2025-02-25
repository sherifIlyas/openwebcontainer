import { PackageJson, DependencyMap } from './types';

export class DependencyResolver {
    constructor(private packageJson: PackageJson) {}

    async resolveDependencies(packages: string[]): Promise<DependencyMap> {
        const dependencies = new Map<string, string>();

        // Add direct dependencies from command line
        for (const pkg of packages) {
            const [name, version] = this.parsePackageSpec(pkg);
            dependencies.set(name, version);
        }

        // Add dependencies from package.json
        if (this.packageJson.dependencies) {
            for (const [name, version] of Object.entries(this.packageJson.dependencies)) {
                if (!dependencies.has(name)) {
                    dependencies.set(name, version);
                }
            }
        }

        // Resolve peer dependencies
        await this.resolvePeerDependencies(dependencies);

        return dependencies;
    }

    private parsePackageSpec(spec: string): [string, string] {
        const parts = spec.split('@');
        if (parts.length === 1) {
            return [parts[0], 'latest'];
        }
        if (parts[0] === '') {
            // Scoped package
            return [`@${parts[1]}`, parts[2] || 'latest'];
        }
        return [parts[0], parts[1]];
    }

    private async resolvePeerDependencies(dependencies: DependencyMap): Promise<void> {
        const visited = new Set<string>();
        const queue = Array.from(dependencies.entries());

        while (queue.length > 0) {
            const [name, version] = queue.shift()!;
            if (visited.has(`${name}@${version}`)) continue;
            visited.add(`${name}@${version}`);

            // TODO: Fetch package metadata and check peer dependencies
            // For now, we'll just simulate the process
            const peerDeps = await this.fetchPeerDependencies(name, version);
            for (const [peerName, peerVersion] of Object.entries(peerDeps)) {
                if (!dependencies.has(peerName)) {
                    dependencies.set(peerName, peerVersion);
                    queue.push([peerName, peerVersion]);
                }
            }
        }
    }

    private async fetchPeerDependencies(name: string, version: string): Promise<Record<string, string>> {
        // TODO: Implement actual package metadata fetching
        // This is a placeholder that returns simulated peer dependencies
        if (name === 'react') {
            return { 'react-dom': '^' + version };
        }
        return {};
    }

    async validateVersionConstraints(dependencies: DependencyMap): Promise<void> {
        // TODO: Implement version constraint validation
        // This would check for version conflicts and incompatibilities
        const conflicts = new Map<string, string[]>();

        if (conflicts.size > 0) {
            const conflictMessages = Array.from(conflicts.entries())
                .map(([pkg, versions]) => `${pkg} (${versions.join(', ')})`)
                .join('\n');
            throw new Error(`Version conflicts found:\n${conflictMessages}`);
        }
    }
}