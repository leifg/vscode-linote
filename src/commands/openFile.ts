import * as vscode from 'vscode';

const execute = (contentFile: string) => {
  vscode.workspace.openTextDocument(contentFile).then(doc => {
    vscode.window.showTextDocument(doc);
 });
};

export {
  execute,
};
