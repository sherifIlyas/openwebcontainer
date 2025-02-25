import { resolveModule } from '../filesystem/resolveModule';
import { existsSync, readFileSync } from './fs';
import { dirname } from './path';

interface ModuleCache {
  [key: string]: any;
}

interface RequireContext {
  module: { exports: any };
  exports: any;
  require: (id: string) => any;
  __filename: string;
  __dirname: string;
}

// Module cache to prevent multiple loads of the same module
const moduleCache: ModuleCache = {};

/**
 * Implementation of Node.js-style require function
 */
export function createRequire(currentPath: string) {
  function require(id: string) {
    // Resolve the module path
    const resolvedPath = resolveModule(id, currentPath);
    
    // Check cache first
    if (moduleCache[resolvedPath]) {
      return moduleCache[resolvedPath].exports;
    }

    // Create module object
    const module = { exports: {} };
    moduleCache[resolvedPath] = module;

    // Create require context
    const context: RequireContext = {
      module,
      exports: module.exports,
      require: createRequire(dirname(resolvedPath)),
      __filename: resolvedPath,
      __dirname: dirname(resolvedPath)
    };

    try {
      // Load and execute the module
      const content = readFileSync(resolvedPath, 'utf8');
      if (!content) {
        throw new Error(`Module not found: ${id}`);
      }

      // Wrap the module code in a function to provide CommonJS context
      const wrapper = Function(
        'exports', 'require', 'module', '__filename', '__dirname',
        `${content}\n//# sourceURL=${resolvedPath}`
      );

      wrapper.call(
        module.exports,
        module.exports,
        context.require,
        module,
        context.__filename,
        context.__dirname
      );

      return module.exports;
    } catch (error) {
      delete moduleCache[resolvedPath];
      throw error;
    }
  }

  return require;
}

// Create the global require function
export const require = createRequire('/');