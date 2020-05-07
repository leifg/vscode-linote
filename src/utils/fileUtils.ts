import * as fs from "fs";

function reportError(error: Error | null) {
  if (error) {
    throw error;
  }
}

function createDirectory(folderName: string) {
  fs.mkdir(folderName, err => reportError(err));
}

function exists(path:string):boolean{
  return fs.existsSync(path);
}

function createFile(filepath: string, fileContent: string) {
  fs.writeFile(filepath, fileContent, err => reportError(err));
}

export {
  exists,
  createDirectory,
  createFile,
};
