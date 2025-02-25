import { IFileSystem } from '../../filesystem';
import semver from 'semver';

export interface DependencyTree {
  [key: string]: {
    version: string;
    dependencies: DependencyTree;
  };
}

export interface ResolvedDependencies {
  dependencies: { [key: string]: string };
  flattenedTree: DependencyTree;
}

export class DependencyResolver {
  constructor(private fileSystem: IFileSystem) {}

  resolve(packageJson: { dependencies?: { [key: string]: string } }): ResolvedDependencies {
    const dependencies = packageJson.dependencies || {};
    const flattenedTree: DependencyTree = {};
    const resolvedDeps: { [key: string]: string } = {};

    // Process each dependency
    for (const [name, versionRange] of Object.entries(dependencies)) {
      this.resolveDependency(name, versionRange, flattenedTree, resolvedDeps);
    }

    return {
      dependencies: resolvedDeps,
      flattenedTree
    };
  }

  private resolveDependency(
    name: string,
    versionRange: string,
    tree: DependencyTree,
    resolved: { [key: string]: string },
    visited: Set<string> = new Set()
  ): void {
    // Prevent circular dependencies
    const key = `${name}@${versionRange}`;
    if (visited.has(key)) return;
    visited.add(key);

    // Check if package is already installed
    const nodeModulesPath = '/node_modules';
    const packagePath = `${nodeModulesPath}/${name}/package.json`;

    if (this.fileSystem.fileExists(packagePath)) {
      const installedPackageJson = JSON.parse(
        this.fileSystem.readFile(packagePath) || '{}'
      );
      const installedVersion = installedPackageJson.version;

      // Check if installed version satisfies the range
      if (semver.satisfies(installedVersion, versionRange)) {
        resolved[name] = installedVersion;
        tree[name] = {
          version: installedVersion,
          dependencies: {}
        };

        // Resolve nested dependencies
        const nestedDeps = installedPackageJson.dependencies || {};
        for (const [depName, depVersion] of Object.entries(nestedDeps)) {
          this.resolveDependency(
            depName,
            depVersion,
            tree[name].dependencies,
            resolved,
            visited
          );
        }
      }
    }
  }
}