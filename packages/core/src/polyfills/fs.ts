import { FileSystem } from '../filesystem';

interface FSCallback<T> {
  (err: Error | null, result?: T): void;
}

export const fs = {
  readFileSync: (path: string, encoding?: string): string | Buffer => {
    try {
      const content = FileSystem.getInstance().readFile(path);
      return encoding === 'utf8' ? content : Buffer.from(content);
    } catch (err) {
      throw new Error(`Error reading file ${path}: ${err.message}`);
    }
  },

  writeFileSync: (path: string, data: string | Buffer): void => {
    try {
      const content = data instanceof Buffer ? data.toString() : data;
      FileSystem.getInstance().writeFile(path, content);
    } catch (err) {
      throw new Error(`Error writing file ${path}: ${err.message}`);
    }
  },

  readFile: (path: string, encoding: string | FSCallback<string>, callback?: FSCallback<string>): void => {
    const cb = typeof encoding === 'function' ? encoding : callback;
    const enc = typeof encoding === 'string' ? encoding : 'utf8';

    try {
      const content = fs.readFileSync(path, enc);
      cb?.(null, content.toString());
    } catch (err) {
      cb?.(err);
    }
  },

  writeFile: (path: string, data: string | Buffer, encoding: string | FSCallback<void>, callback?: FSCallback<void>): void => {
    const cb = typeof encoding === 'function' ? encoding : callback;

    try {
      fs.writeFileSync(path, data);
      cb?.(null);
    } catch (err) {
      cb?.(err);
    }
  },

  existsSync: (path: string): boolean => {
    try {
      return FileSystem.getInstance().exists(path);
    } catch {
      return false;
    }
  },

  exists: (path: string, callback: (exists: boolean) => void): void => {
    callback(fs.existsSync(path));
  },

  mkdirSync: (path: string): void => {
    try {
      FileSystem.getInstance().createDirectory(path);
    } catch (err) {
      throw new Error(`Error creating directory ${path}: ${err.message}`);
    }
  },

  mkdir: (path: string, callback: FSCallback<void>): void => {
    try {
      fs.mkdirSync(path);
      callback(null);
    } catch (err) {
      callback(err);
    }
  },

  readdirSync: (path: string): string[] => {
    try {
      return FileSystem.getInstance().listDirectory(path);
    } catch (err) {
      throw new Error(`Error reading directory ${path}: ${err.message}`);
    }
  },

  readdir: (path: string, callback: FSCallback<string[]>): void => {
    try {
      const files = fs.readdirSync(path);
      callback(null, files);
    } catch (err) {
      callback(err);
    }
  }
};