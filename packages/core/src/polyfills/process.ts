/**
 * Process polyfill for browser environment
 */

export const process = {
  env: {},
  cwd: () => '/',
  platform: 'browser',
  version: '1.0.0',
  versions: {
    node: '16.0.0',
  },
  pid: 1,
  ppid: 0,
  title: 'browser',
  arch: 'web',
  argv: [],
  argv0: 'browser',
  execPath: '/',
  execArgv: [],
  debugPort: 0,
  exitCode: 0,
  hrtime: (time?: [number, number]): [number, number] => {
    const now = performance.now();
    const [seconds, nanoseconds] = time || [0, 0];
    const nowSeconds = Math.floor(now / 1000);
    const nowNanoseconds = Math.floor((now % 1000) * 1e6);
    return [
      nowSeconds - seconds,
      nowNanoseconds - nanoseconds
    ];
  },
  exit: (code?: number) => {
    process.exitCode = code || 0;
  },
  nextTick: (callback: Function, ...args: any[]) => {
    queueMicrotask(() => callback(...args));
  }
};