import { join, dirname, isAbsolute, normalize } from '../polyfills/path';
import { existsSync } from '../polyfills/fs';

const CORE_MODULES = [
  'fs',
  'path',
  'os',
  'buffer',
  'events',
  'http',
  'https',
  'process',
  'child_process',
  'stream',
  'util',
  'querystring',
  'url'
];

interface PackageJson {
  main?: string;
  module?: string;
  exports?: Record<string, string>;
  type?: 'module' | 'commonjs';
}

/**
 * Resolves a module specifier to an absolute file path following Node.js resolution rules
 */
export function resolveModule(specifier: string, basePath: string = '/'): string {
  // Handle core modules
  if (CORE_MODULES.includes(specifier)) {
    return join('/polyfills', `${specifier}.js`);
  }

  // Handle absolute paths
  if (isAbsolute(specifier)) {
    return normalizeExtension(specifier);
  }

  // Handle relative paths
  if (specifier.startsWith('.')) {
    const absolutePath = join(dirname(basePath), specifier);
    return normalizeExtension(absolutePath);
  }

  // Handle node_modules resolution
  return resolveNodeModule(specifier, basePath);
}

/**
 * Resolves a bare module specifier by searching in node_modules directories
 */
function resolveNodeModule(specifier: string, basePath: string): string {
  const parts = specifier.split('/');
  const packageName = parts[0].startsWith('@') ? `${parts[0]}/${parts[1]}` : parts[0];
  const subpath = parts.slice(packageName.includes('/') ? 2 : 1).join('/');

  let dir = dirname(basePath);
  while (dir !== '/') {
    const modulePath = join(dir, 'node_modules', packageName);
    if (existsSync(modulePath)) {
      if (subpath) {
        return normalizeExtension(join(modulePath, subpath));
      }
      return resolvePackageMain(modulePath);
    }
    dir = dirname(dir);
  }

  throw new Error(`Cannot find module '${specifier}'`);
}

/**
 * Resolves the main entry point of a package
 */
function resolvePackageMain(packagePath: string): string {
  const pkgJsonPath = join(packagePath, 'package.json');
  
  if (existsSync(pkgJsonPath)) {
    try {
      const pkg: PackageJson = JSON.parse(existsSync(pkgJsonPath));
      
      // Check exports field first (Node.js 12+)
      if (pkg.exports && typeof pkg.exports === 'object') {
        if (typeof pkg.exports['.'] === 'string') {
          return normalizeExtension(join(packagePath, pkg.exports['.']));
        }
      }

      // Check module field for ES modules
      if (pkg.module) {
        return normalizeExtension(join(packagePath, pkg.module));
      }

      // Fall back to main field
      if (pkg.main) {
        return normalizeExtension(join(packagePath, pkg.main));
      }
    } catch (e) {
      // Invalid package.json, fall through to default
    }
  }

  // Default to index.js if no valid package.json or main field
  return normalizeExtension(join(packagePath, 'index.js'));
}

/**
 * Adds .js extension if none exists
 */
function normalizeExtension(path: string): string {
  const normalized = normalize(path);
  if (normalized.endsWith('.js') || normalized.endsWith('.mjs') || normalized.endsWith('.cjs')) {
    return normalized;
  }
  return `${normalized}.js`;
}