/**
 * Path polyfill for browser environment
 * Implements basic path manipulation utilities similar to Node.js path module
 */

export const sep = '/';
export const delimiter = ':';

export function normalize(path: string): string {
  // Remove duplicate slashes and normalize to forward slashes
  return path.replace(/[\\/]+/g, '/').replace(/\/$/, '');
}

export function join(...paths: string[]): string {
  return normalize(paths.filter(Boolean).join('/'));
}

export function resolve(...paths: string[]): string {
  let resolvedPath = '';
  for (let path of paths) {
    path = normalize(path);
    if (path.startsWith('/')) {
      resolvedPath = path;
    } else {
      resolvedPath = join(resolvedPath, path);
    }
  }
  return resolvedPath || '/';
}

export function dirname(path: string): string {
  path = normalize(path);
  const lastSlash = path.lastIndexOf('/');
  if (lastSlash === -1) return '.';
  if (lastSlash === 0) return '/';
  return path.slice(0, lastSlash);
}

export function basename(path: string, ext?: string): string {
  path = normalize(path);
  let base = path.slice(path.lastIndexOf('/') + 1);
  if (ext && base.endsWith(ext)) {
    base = base.slice(0, -ext.length);
  }
  return base;
}

export function extname(path: string): string {
  const base = basename(path);
  const lastDot = base.lastIndexOf('.');
  return lastDot === -1 ? '' : base.slice(lastDot);
}

export function isAbsolute(path: string): string {
  return path.startsWith('/');
}

export function relative(from: string, to: string): string {
  from = resolve(from);
  to = resolve(to);

  const fromParts = from.split('/').filter(Boolean);
  const toParts = to.split('/').filter(Boolean);

  let commonLength = 0;
  while (commonLength < fromParts.length && commonLength < toParts.length) {
    if (fromParts[commonLength] !== toParts[commonLength]) break;
    commonLength++;
  }

  const upCount = fromParts.length - commonLength;
  const result = [];
  for (let i = 0; i < upCount; i++) result.push('..');
  result.push(...toParts.slice(commonLength));

  return result.join('/') || '.';
}

export const path = {
  sep,
  delimiter,
  normalize,
  join,
  resolve,
  dirname,
  basename,
  extname,
  isAbsolute,
  relative
};