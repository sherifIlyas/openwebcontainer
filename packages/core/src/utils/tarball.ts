import { IFileSystem } from '../filesystem';
import JSZip from 'jszip';

export class TarballProcessor {
  constructor(private fileSystem: IFileSystem) {}

  async extract(buffer: ArrayBuffer, targetPath: string): Promise<void> {
    try {
      // Load the tarball as a zip file
      const zip = await JSZip.loadAsync(buffer);

      // Create target directory if it doesn't exist
      if (!this.fileSystem.fileExists(targetPath)) {
        this.fileSystem.createDirectory(targetPath);
      }

      // Extract files
      for (const [filename, file] of Object.entries(zip.files)) {
        if (!file.dir) {
          const content = await file.async('string');
          const filePath = `${targetPath}/${filename}`;
          const dirPath = filePath.substring(0, filePath.lastIndexOf('/'));
          
          // Create parent directories if they don't exist
          if (!this.fileSystem.fileExists(dirPath)) {
            this.fileSystem.createDirectory(dirPath);
          }
          
          // Write file content
          this.fileSystem.writeFile(filePath, content);
        }
      }
    } catch (error) {
      throw new Error(`Failed to extract tarball: ${error.message}`);
    }
  }

  async extractFromUrl(url: string, targetPath: string): Promise<void> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to download tarball: ${response.statusText}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      await this.extract(arrayBuffer, targetPath);
    } catch (error) {
      throw new Error(`Failed to extract tarball from URL: ${error.message}`);
    }
  }
}
