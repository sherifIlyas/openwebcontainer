import { fetch } from '@zenfs/core';

export interface PackageMetadata {
    name: string;
    version: string;
    dist: {
        tarball: string;
        shasum: string;
    };
    dependencies?: { [key: string]: string };
    devDependencies?: { [key: string]: string };
}

export class NpmRegistry {
    private readonly registryUrl: string;

    constructor(registryUrl: string = 'https://registry.npmjs.org') {
        this.registryUrl = registryUrl;
    }

    async getPackageMetadata(packageName: string, version?: string): Promise<PackageMetadata> {
        const url = `${this.registryUrl}/${packageName}${version ? '/' + version : ''}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch package metadata: ${response.statusText}`);
        }

        const data = await response.json();
        return this.normalizeMetadata(data, version);
    }

    async downloadPackage(metadata: PackageMetadata): Promise<Buffer> {
        const response = await fetch(metadata.dist.tarball);
        
        if (!response.ok) {
            throw new Error(`Failed to download package: ${response.statusText}`);
        }

        return Buffer.from(await response.arrayBuffer());
    }

    private normalizeMetadata(data: any, version?: string): PackageMetadata {
        if (version) {
            return {
                name: data.name,
                version: version,
                dist: data.dist,
                dependencies: data.dependencies,
                devDependencies: data.devDependencies
            };
        }

        const latest = data['dist-tags']?.latest || Object.keys(data.versions).pop();
        const latestData = data.versions[latest];

        return {
            name: data.name,
            version: latest,
            dist: latestData.dist,
            dependencies: latestData.dependencies,
            devDependencies: latestData.devDependencies
        };
    }
}