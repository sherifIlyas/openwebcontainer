export interface PackageJson {
    name?: string;
    version?: string;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    peerDependencies?: Record<string, string>;
    scripts?: Record<string, string>;
}

export type DependencyMap = Map<string, string>;

export interface PackageMetadata {
    name: string;
    version: string;
    dependencies?: Record<string, string>;
    peerDependencies?: Record<string, string>;
    dist: {
        tarball: string;
        shasum: string;
    };
}

export interface InstallOptions {
    saveDev?: boolean;
    saveExact?: boolean;
    global?: boolean;
    production?: boolean;
}

export interface PackageInstallResult {
    name: string;
    version: string;
    success: boolean;
    error?: string;
}

export interface DependencyResolutionResult {
    dependencies: DependencyMap;
    conflicts?: Array<{
        package: string;
        versions: string[];
        reason: string;
    }>;
}

export interface RegistryResponse {
    name: string;
    versions: Record<string, PackageMetadata>;
    'dist-tags': Record<string, string>;
}