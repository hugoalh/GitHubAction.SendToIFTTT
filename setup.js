/*==================
[GitHub Action] Send To IFTTT - Setup
	Language:
		NodeJS/12.0.0
==================*/
const childProcess = require("child_process");
childProcess.execSync(
	`npm install`,
	{
		cwd: __dirname
	}
);
