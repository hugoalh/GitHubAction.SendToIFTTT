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
const internalService = require("./internalservice.js");
const jsonFlatten = require("flat").flatten;
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
if (advancedDetermine.isString(inputCannotVariable.variableJoin) != true) {
	internalService.prefabTypeError("variable_join", "string");
};
if (advancedDetermine.isString(inputCannotVariable.variablePrefix) != true) {
	internalService.prefabTypeError("variable_prefix", "string");
};
if (advancedDetermine.isString(inputCannotVariable.variableSuffix) != true) {
	internalService.prefabTypeError("variable_suffix", "string");
};
if (advancedDetermine.isString(inputCannotVariable.webhookKey) != true) {
	internalService.prefabTypeError("webhook_key", "string");
};
if (advancedDetermine.isString(inputCannotVariable.webhookEventName) != true) {
	internalService.prefabTypeError("webhook_eventname", "string");
};
let inputVariableListPayload = githubAction.github.context.payload;
let inputVariableListExternal = githubAction.core.getInput(`variable_list_external`);
switch (advancedDetermine.isString(inputVariableListExternal)) {
	case false:
		internalService.prefabTypeError("variable_list_external", "object.json");
		break;
	case null:
		githubAction.core.info(`External variable list is null.`);
		inputVariableListExternal = {};
		break;
	case true:
		if (advancedDetermine.isStringifyJSON(inputVariableListExternal) == false) {
			internalService.prefabTypeError("variable_list_external", "object.json");
		};
		try {
			inputVariableListExternal = JSON.parse(inputVariableListExternal);
		} catch (error) {
			throw new Error(error);
		};
		break;
	// No default case!
};
try {
	inputVariableListPayload = jsonFlatten(
		inputVariableListPayload,
		{
			delimiter: inputCannotVariable.variableJoin
		}
	);
} catch (error) {
	throw new Error(error);
};
try {
	inputVariableListExternal = jsonFlatten(
		inputVariableListExternal,
		{
			delimiter: inputCannotVariable.variableJoin
		}
	);
} catch (error) {
	throw new Error(error);
};
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
https.request(
	`https://maker.ifttt.com/trigger/${inputCannotVariable.webhookEventName}/with/key/${inputCannotVariable.webhookKey}`,
	{
		port: 443,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Content-Length": requestPayload.length,
			"User-Agent": internalService.preset.header.userAgent
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
).write(requestPayload).on(
	"error",
	(error) => {
		throw new Error(error);
	}
).end();
