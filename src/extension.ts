// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fileUtils from "./utils/fileUtils";
import * as openFileCommand from "./commands/openFile";
import * as newSnippetHandler from "./handlers/newSnippet";
import * as parseFileHandler from "./handlers/parseFile";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  const globalStoragePath = context.globalStoragePath;
  const contentFile = `${globalStoragePath}/content.md`;

  if (!fileUtils.exists(globalStoragePath)) {
    fileUtils.createDirectory(globalStoragePath);
  }

  if(!fileUtils.exists(globalStoragePath)) {
    fileUtils.createDirectory(globalStoragePath);
  }

  if(!fileUtils.exists(contentFile)) {
    fileUtils.createFile(contentFile, '');
  }

  const newSnippetHandlerSubscription = vscode.workspace.onWillSaveTextDocument(newSnippetHandler.handle([contentFile]));
  const parseFileHandlerSubscription = vscode.workspace.onDidSaveTextDocument(parseFileHandler.handle([contentFile]));

  console.log('newSnippetHandlerSubscription', newSnippetHandlerSubscription);

  let openFileSubscription = vscode.commands.registerCommand(
    'linote.openFile',
    () => openFileCommand.execute(contentFile)
  );

  context.subscriptions.push(openFileSubscription);
  context.subscriptions.push(newSnippetHandlerSubscription);
  context.subscriptions.push(parseFileHandlerSubscription);
}

// this method is called when your extension is deactivated
export function deactivate() {}
