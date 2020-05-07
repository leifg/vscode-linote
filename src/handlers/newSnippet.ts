import * as vscode from 'vscode';
import { v4 as uuid } from 'uuid';

const beginningOfFile = new vscode.Position(0, 0);

const handle = (watchedFiles: string[]) => (event: vscode.TextDocumentWillSaveEvent) => {

  const fileChanges = new Promise<vscode.TextEdit[]>((resolve, reject) => {

    if(!watchedFiles.includes(event.document.fileName)) {
      resolve([]);
    }

    if(event.document.lineAt(0).text.startsWith('[//]: <>')) {
      resolve([]);
    }

    const topLine = `[//]: <> (${uuid()})`;

    resolve([vscode.TextEdit.insert(beginningOfFile, `${topLine}\n\n`)]);
  });

  event.waitUntil(fileChanges);
};

export {
  handle,
};
