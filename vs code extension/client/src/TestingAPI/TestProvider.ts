
import * as vscode from 'vscode';

export async function activateTestAPI(context: vscode.ExtensionContext){
	const ctrl = vscode.tests.createTestController('mathTestController', 'Markdown Math');
	context.subscriptions.push(ctrl);
}