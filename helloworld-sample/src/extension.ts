// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld-sample" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Fuck  World!');
	});

	context.subscriptions.push(disposable);

	const MovingCursor = () => {
		const editor = vscode.window.activeTextEditor;
		let activeTerminal = vscode.window.activeTerminal;

		//∂®“ÂŒª÷√

		let position = editor.selection.active;
		activeTerminal?.sendText("ls -al")
		/*
		if (vscode.workspace.getConfiguration("matlab-interactive-terminal").get("CursorBack") == true) {
			var newPosition = position.with(position.line, position.character);
			var newSelection = new vscode.Selection(newPosition, newPosition);
			editor.selection = newSelection;
		}
		vscode.window.showInformationMessage("")
		*/

	}

	const registerMovingCursor = vscode.commands.registerCommand('extension.MovingCursor', MovingCursor);
	context.subscriptions.push(registerMovingCursor);

}
