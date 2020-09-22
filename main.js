/*==================
[GitHub Action] Send To IFTTT
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const githubAction = {
	core: require("@actions/core"),
	github: require("@actions/github")
};
const https = require("https");
const jsonFlatten = require("flat").flatten;
let headerUserAgent = `NodeJS/${process.version.replace(/^v/giu, "")} GitHubAction.SendToIFTTT(@hugoalh)/2.0.1`;
let inputCannotVariable = {
	variableJoin: githubAction.core.getInput("variable_join"),
	variablePrefix: githubAction.core.getInput("variable_prefix"),
	variableSuffix: githubAction.core.getInput("variable_suffix"),
	webhookKey: githubAction.core.getInput("webhook_key")
};
let inputCanVariable = {
	value1: githubAction.core.getInput("value1"),
	value2: githubAction.core.getInput("value2"),
	value3: githubAction.core.getInput("value3"),
	webhookEventName: githubAction.core.getInput("webhook_eventname")
};
if (advancedDetermine.isString(inputCannotVariable.variableJoin) !== true) {
	throw new TypeError(`Argument "variable_join" must be type of string (non-nullable)! ([GitHub Action] Send To IFTTT)`);
};
if (advancedDetermine.isString(inputCannotVariable.variablePrefix) !== true) {
	throw new TypeError(`Argument "variable_prefix" must be type of string (non-nullable)! ([GitHub Action] Send To IFTTT)`);
};
if (advancedDetermine.isString(inputCannotVariable.variableSuffix) !== true) {
	throw new TypeError(`Argument "variable_suffix" must be type of string (non-nullable)! ([GitHub Action] Send To IFTTT)`);
};
if (advancedDetermine.isString(inputCanVariable.webhookEventName) !== true) {
	throw new TypeError(`Argument "webhook_eventname" must be type of string (non-nullable)! ([GitHub Action] Send To IFTTT)`);
};
if (advancedDetermine.isString(inputCannotVariable.webhookKey) !== true) {
	throw new TypeError(`Argument "webhook_key" must be type of string (non-nullable)! ([GitHub Action] Send To IFTTT)`);
};
let inputVariableListPayload = githubAction.github.context.payload;
let inputVariableListExternal = githubAction.core.getInput(`variable_list_external`);
switch (advancedDetermine.isString(inputVariableListExternal)) {
	case false:
		throw new TypeError(`Argument "variable_list_external" must be type of object JSON! ([GitHub Action] Send To IFTTT)`);
		break;
	case null:
		githubAction.core.info(`External variable list is null. ([GitHub Action] Send To IFTTT)`);
		inputVariableListExternal = {};
		break;
	case true:
		if (advancedDetermine.isStringifyJSON(inputVariableListExternal) === false) {
			throw new TypeError(`Argument "variable_list_external" must be type of object JSON! ([GitHub Action] Send To IFTTT)`);
		};
		inputVariableListExternal = JSON.parse(inputVariableListExternal);
		break;
	// No default case!
};
inputVariableListPayload = jsonFlatten(
	inputVariableListPayload,
	{
		delimiter: inputCannotVariable.variableJoin
	}
);
inputVariableListExternal = jsonFlatten(
	inputVariableListExternal,
	{
		delimiter: inputCannotVariable.variableJoin
	}
);
Object.keys(inputVariableListPayload).forEach((key) => {
	Object.keys(inputCanVariable).forEach((element) => {
		inputCanVariable[element] = inputCanVariable[element].replace(
			new RegExp(`${inputCannotVariable.variablePrefix}payload${inputCannotVariable.variableJoin}${key}${inputCannotVariable.variableSuffix}`, "gu"),
			inputVariableListPayload[key]
		);
	});
});
Object.keys(inputVariableListExternal).forEach((key) => {
	Object.keys(inputCanVariable).forEach((element) => {
		inputCanVariable[element] = inputCanVariable[element].replace(
			new RegExp(`${inputCannotVariable.variablePrefix}external${inputCannotVariable.variableJoin}${key}${inputCannotVariable.variableSuffix}`, "gu"),
			inputVariableListExternal[key]
		);
	});
});
const requestPayload = JSON.stringify({
	"value1": inputCanVariable.value1,
	"value2": inputCanVariable.value2,
	"value3": inputCanVariable.value3
});
const requestNode = https.request(
	`https://maker.ifttt.com/trigger/${inputCanVariable.webhookEventName}/with/key/${inputCannotVariable.webhookKey}`,
	{
		port: 443,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Content-Length": requestPayload.length,
			"User-Agent": headerUserAgent
		}
	},
	(result) => {
		console.log(`Status Code: ${result.statusCode}`);
		result.on(
			"data",
			(delta) => {
				process.stdout.write(delta);
			}
		);
	}
);
requestNode.write(requestPayload);
requestNode.on(
	"error",
	(error) => {
		throw new Error(error);
	}
);
requestNode.end();
