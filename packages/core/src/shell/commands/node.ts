import { Process } from '../../process/base';
import { QuickJSContext, newQuickJSAsyncWASMModuleFromVariant } from 'quickjs-emscripten';
import variant from '@jitl/quickjs-singlefile-browser-release-asyncify';

export async function executeNode(process: Process, args: string[]): Promise<number> {
  try {
    if (args.length < 1) {
      process.stderr.write('Usage: node <script-path> [args...]\n');
      return 1;
    }

    const scriptPath = args[0];
    const scriptArgs = args.slice(1);

    // Read the script file
    const scriptContent = process.fileSystem.readFile(scriptPath);
    if (!scriptContent) {
      process.stderr.write(`Error: Could not read file ${scriptPath}\n`);
      return 1;
    }

    // Initialize QuickJS runtime
    const quickjs = await newQuickJSAsyncWASMModuleFromVariant(variant);
    const context = quickjs.newContext();

    try {
      // Set up process.argv
      const processObj = context.newObject();
      const argvArray = context.newArray();
      
      // Add 'node' and script path as first two arguments
      context.setProp(argvArray, "0", context.newString('node'));
      context.setProp(argvArray, "1", context.newString(scriptPath));
      
      // Add remaining arguments
      scriptArgs.forEach((arg, index) => {
        context.setProp(argvArray, (index + 2).toString(), context.newString(arg));
      });

      context.setProp(processObj, "argv", argvArray);
      context.setProp(context.global, "process", processObj);

      // Set up console.log and other console methods
      const console = context.newObject();
      const log = context.newFunction('log', (...args) => {
        const output = args.map(arg => context.dump(arg)).join(' ');
        process.stdout.write(output + '\n');
      });
      context.setProp(console, 'log', log);
      context.setProp(context.global, 'console', console);

      // Execute the script
      const result = context.evalCode(scriptContent);
      context.unwrapResult(result);

      return 0;
    } finally {
      context.dispose();
    }
  } catch (error) {
    process.stderr.write(`Error executing script: ${error.message}\n`);
    return 1;
  }
}

export const nodeCommand = {
  name: 'node',
  description: 'Execute a Node.js script',
  usage: 'node <script-path> [args...]',
  execute: executeNode
};