import { Process } from '../../../process/base';
import { PackageManager } from '../../../utils/packageManager';

export async function executeInstall(process: Process, args: string[]): Promise<number> {
  try {
    if (args.length < 1) {
      process.stderr.write('Usage: install <package-name> [version]\n');
      return 1;
    }

    const packageName = args[0];
    const version = args[1]; // Optional version argument

    const packageManager = new PackageManager(process.fileSystem);
    
    process.stdout.write(`Installing ${packageName}${version ? `@${version}` : ''}...\n`);
    
    await packageManager.installPackage(packageName, version);
    
    process.stdout.write('Installation completed successfully.\n');
    return 0;
  } catch (error) {
    process.stderr.write(`Error: ${error.message}\n`);
    return 1;
  }
}

export const installCommand = {
  name: 'install',
  description: 'Install an npm package',
  usage: 'install <package-name> [version]',
  execute: executeInstall
};