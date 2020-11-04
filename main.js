/*==================
[GitHub Action] Send To IFTTT
	Language:
		NodeJS/12.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine"),
	githubAction = {
		core: require("@actions/core"),
		github: require("@actions/github")
	},
	jsonFlatten = require("flat").flatten,
	nodeFetch = require("node-fetch");
githubAction.core.debug(`Import workflow argument. ([GitHub Action] Send To IFTTT)`);
let input = {
		value1: githubAction.core.getInput("value1"),
		value2: githubAction.core.getInput("value2"),
		value3: githubAction.core.getInput("value3")
	},
	variableSystem = {
		join: githubAction.core.getInput("variable_join"),
		prefix: githubAction.core.getInput("variable_prefix"),
		suffix: githubAction.core.getInput("variable_suffix")
	},
	webhook = {
		eventName: githubAction.core.getInput("webhook_eventname"),
		key: githubAction.core.getInput("webhook_key")
	};
githubAction.core.debug(`Analysis workflow argument. ([GitHub Action] Send To IFTTT)`);
if (advancedDetermine.isString(variableSystem.join) !== true) {
	throw new TypeError(`Argument "variable_join" must be type of string (non-nullable)! ([GitHub Action] Send To IFTTT)`);
};
if (advancedDetermine.isString(variableSystem.prefix) !== true) {
	throw new TypeError(`Argument "variable_prefix" must be type of string (non-nullable)! ([GitHub Action] Send To IFTTT)`);
};
if (advancedDetermine.isString(variableSystem.suffix) !== true) {
	throw new TypeError(`Argument "variable_suffix" must be type of string (non-nullable)! ([GitHub Action] Send To IFTTT)`);
};
if (advancedDetermine.isString(webhook.eventName) !== true) {
	throw new TypeError(`Argument "webhook_eventname" must be type of string (non-nullable)! ([GitHub Action] Send To IFTTT)`);
};
if (advancedDetermine.isString(webhook.key) !== true) {
	throw new TypeError(`Argument "webhook_key" must be type of string (non-nullable)! ([GitHub Action] Send To IFTTT)`);
};
githubAction.core.debug(`Import variable list. ([GitHub Action] Send To IFTTT)`);
variableSystem.list = {
	external: githubAction.core.getInput(`variable_list_external`),
	payload: githubAction.github.context.payload
};
githubAction.core.debug(`Analysis external variable list. ([GitHub Action] Send To IFTTT)`);
switch (advancedDetermine.isString(variableSystem.list.external)) {
	case false:
		throw new TypeError(`Argument "variable_list_external" must be type of object JSON! ([GitHub Action] Send To IFTTT)`);
	case null:
		githubAction.core.info(`External variable list is empty. ([GitHub Action] Send To IFTTT)`);
		variableSystem.list.external = {};
		break;
	case true:
		if (advancedDetermine.isStringifyJSON(variableSystem.list.external) === false) {
			throw new TypeError(`Argument "variable_list_external" must be type of object JSON! ([GitHub Action] Send To IFTTT)`);
		};
		variableSystem.list.external = JSON.parse(variableSystem.list.external);
		break;
	default:
		throw new Error();
};
githubAction.core.debug(`Tokenize variable list. ([GitHub Action] Send To IFTTT)`);
variableSystem.list.external = jsonFlatten(
	variableSystem.list.external,
	{
		delimiter: variableSystem.join
	}
);
variableSystem.list.payload = jsonFlatten(
	variableSystem.list.payload,
	{
		delimiter: variableSystem.join
	}
);
githubAction.core.debug(`Replace variable to data. ([GitHub Action] Send To IFTTT)`);
Object.keys(variableSystem.list.payload).forEach((key) => {
	Object.keys(input).forEach((element) => {
		input[element] = input[element].replace(
			new RegExp(`${variableSystem.prefix}payload${variableSystem.join}${key}${variableSystem.suffix}`, "gu"),
			variableSystem.list.payload[key]
		);
	});
	webhook.eventName = webhook.eventName.replace(
		new RegExp(`${variableSystem.prefix}payload${variableSystem.join}${key}${variableSystem.suffix}`, "gu"),
		variableSystem.list.payload[key]
	);
});
Object.keys(variableSystem.list.external).forEach((key) => {
	Object.keys(input).forEach((element) => {
		input[element] = input[element].replace(
			new RegExp(`${variableSystem.prefix}external${variableSystem.join}${key}${variableSystem.suffix}`, "gu"),
			variableSystem.list.payload[key]
		);
	});
	webhook.eventName = webhook.eventName.replace(
		new RegExp(`${variableSystem.prefix}external${variableSystem.join}${key}${variableSystem.suffix}`, "gu"),
		variableSystem.list.payload[key]
	);
});
githubAction.core.debug(`Export request payload. ([GitHub Action] Send To IFTTT)`);
let requestPayload = JSON.stringify(input);
githubAction.core.debug(`Send network request to IFTTT. ([GitHub Action] Send To IFTTT)`);
nodeFetch(
	`https://maker.ifttt.com/trigger/${webhook.eventName}/with/key/${webhook.key}`,
	{
		body: requestPayload,
		follow: 5,
		headers: {
			"Content-Type": "application/json",
			"Content-Length": requestPayload.length,
			"User-Agent": `NodeJS/${process.version.replace(/^v/giu, "")} node-fetch/2.6.1 GitHubAction.SendToIFTTT(@hugoalh)/2.1.0`
		},
		method: "POST",
		redirect: "follow"
	}
).catch((error) => {
	throw error;
}).then((result) => {
	if (Math.floor(Number(result.status) / 100) !== 2) {
		throw new Error(`Status Code: ${result.status} ([GitHub Action] Send To IFTTT)`);
	};
	githubAction.core.debug(`Status Code: ${result.status} ([GitHub Action] Send To IFTTT)`);
});
