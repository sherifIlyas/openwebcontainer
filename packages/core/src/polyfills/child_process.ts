import { Process } from '../process/base';
import { ProcessManager } from '../process/manager';

export class ChildProcessPolyfill {
    constructor(private processManager: ProcessManager) {}

    exec(command: string, options: any = {}): Promise<{ stdout: string; stderr: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                let stdout = '';
                let stderr = '';

                const process = await this.processManager.spawn('sh', ['-c', command]);

                process.stdout.on('data', (data: string) => {
                    stdout += data;
                });

                process.stderr.on('data', (data: string) => {
                    stderr += data;
                });

                process.on('exit', (code: number) => {
                    if (code === 0) {
                        resolve({ stdout, stderr });
                    } else {
                        reject(new Error(`Process exited with code ${code}\n${stderr}`));
                    }
                });

                process.on('error', (error: Error) => {
                    reject(error);
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    spawn(command: string, args: string[] = [], options: any = {}): Process {
        return this.processManager.spawn(command, args, options);
    }
}

export const createChildProcessPolyfill = (processManager: ProcessManager) => {
    const childProcess = new ChildProcessPolyfill(processManager);
    return childProcess;
};