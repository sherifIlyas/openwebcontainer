import { Process } from '../../process/base';
import { QuickJSContext, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import variant from '@jitl/quickjs-singlefile-browser-release-asyncify';
import { PackageManager } from '../../utils/packageManager';

export async function executeNpm(process: Process, args: string[]): Promise<number> {
  try {
    if (args.length < 1) {
      process.stderr.write('Usage: npm <command>\nCommands:\n  run <script-name>\n  install [package-name][@version]\n');
      return 1;
    }

    const command = args[0];

    if (command === 'install') {
      // Allow running npm install without arguments to install dependencies from package.json
      if (args.length === 1) {
        try {
          const packageManager = new PackageManager(process.fileSystem);
          const packageJsonContent = process.fileSystem.readFile('/package.json');
          if (!packageJsonContent) {
            process.stderr.write('Error: No package.json found in the current directory\n');
            return 1;
          }
          const packageJson = JSON.parse(packageJsonContent);
          const dependencies = packageJson.dependencies || {};
          
          for (const [name, version] of Object.entries(dependencies)) {
            process.stdout.write(`Installing ${name}@${version}...\n`);
            await packageManager.installPackage(name, version);
          }
          
          process.stdout.write('All dependencies installed successfully\n');
          return 0;
        } catch (error) {
          process.stderr.write(`Error installing dependencies: ${error.message}\n`);
          return 1;
        }
      }

      const packageName = args[1];
      const version = args[2];

      try {
        const packageManager = new PackageManager(process.fileSystem);
        await packageManager.installPackage(packageName, version);
        process.stdout.write(`Successfully installed ${packageName}${version ? `@${version}` : ''}\n`);
        return 0;
      } catch (error) {
        process.stderr.write(`Error installing package: ${error.message}\n`);
        return 1;
      }
    }

    if (command === 'run') {
      if (args.length < 2) {
        process.stderr.write('Error: No script specified\n');
        return 1;
      }

      const scriptName = args[1];
      const packageJsonPath = '/package.json';

      // Read package.json
      const packageJsonContent = process.fileSystem.readFile(packageJsonPath);
      if (!packageJsonContent) {
        process.stderr.write(`Error: Could not find package.json in the current directory\n`);
        return 1;
      }

      try {
        const packageJson = JSON.parse(packageJsonContent);
        const script = packageJson.scripts?.[scriptName];

        if (!script) {
          process.stderr.write(`Error: Script '${scriptName}' not found in package.json\n`);
          return 1;
        }

        process.stdout.write(`> ${scriptName}\n`);
        process.stdout.write(`> ${script}\n\n`);

        // Initialize QuickJS runtime
        const quickjs = await newQuickJSAsyncWASMModuleFromVariant(variant);
        const context = quickjs.newContext();

        try {
          // Set up process object
          const processObj = context.newObject();
          context.setProp(context.global, 'process', processObj);

          // Set up console methods
          const console = context.newObject();
          const log = context.newFunction('log', (...args) => {
            const output = args.map(arg => context.dump(arg)).join(' ');
            process.stdout.write(output + '\n');
          });
          context.setProp(console, 'log', log);
          context.setProp(context.global, 'console', console);

          // Execute the script
          const result = context.evalCode(script);
          context.unwrapResult(result);

          return 0;
        } finally {
          context.dispose();
        }
      } catch (parseError) {
        process.stderr.write(`Error parsing package.json: ${parseError.message}\n`);
        return 1;
      }
    } else {
      process.stderr.write(`Error: Unsupported npm command '${command}'\n`);
      return 1;
    }
  } catch (error) {
    process.stderr.write(`Error executing npm command: ${error.message}\n`);
    return 1;
  }
}

export const npmCommand = {
  name: 'npm',
  description: 'Execute npm commands',
  usage: 'npm <command>\nCommands:\n  run <script-name>\n  install <package-name>[@version]',
  execute: executeNpm
};