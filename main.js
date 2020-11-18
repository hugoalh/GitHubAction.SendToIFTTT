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
	nodeFetch = require("node-fetch"),
	regexpEscape = require("escape-string-regexp");
(async () => {
	githubAction.core.info(`Import workflow argument. ([GitHub Action] Send To IFTTT)`);
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
	githubAction.core.info(`Analysis workflow argument. ([GitHub Action] Send To IFTTT)`);
	if (advancedDetermine.isStringSingleLine(variableSystem.join, { allowWhitespace: false }) !== true) {
		throw new TypeError(`Argument "variable_join" must be type of string (non-nullable)! ([GitHub Action] Send To IFTTT)`);
	};
	if (advancedDetermine.isStringSingleLine(variableSystem.prefix, { allowWhitespace: false }) !== true) {
		throw new TypeError(`Argument "variable_prefix" must be type of string (non-nullable)! ([GitHub Action] Send To IFTTT)`);
	};
	if (advancedDetermine.isStringSingleLine(variableSystem.suffix, { allowWhitespace: false }) !== true) {
		throw new TypeError(`Argument "variable_suffix" must be type of string (non-nullable)! ([GitHub Action] Send To IFTTT)`);
	};
	if (advancedDetermine.isStringSingleLine(webhook.eventName, { allowWhitespace: false }) !== true) {
		throw new TypeError(`Argument "webhook_eventname" must be type of string (non-nullable)! ([GitHub Action] Send To IFTTT)`);
	};
	if (webhook.eventName.search(/\//gu) !== -1) {
		throw new SyntaxError(`Argument "webhook_eventname"'s value is not match the require pattern! ([GitHub Action] Send To IFTTT)`);
	};
	if (advancedDetermine.isStringLowerCase(webhook.eventName) !== true) {
		githubAction.core.warning(`Argument "webhook_eventname" is recommended to keep in lower case to prevent issue! ([GitHub Action] Send To IFTTT)`);
	};
	if (advancedDetermine.isStringSingleLine(webhook.key, { allowWhitespace: false }) !== true) {
		throw new TypeError(`Argument "webhook_key" must be type of string (non-nullable)! ([GitHub Action] Send To IFTTT)`);
	};
	if (webhook.key.search(/\//gu) !== -1) {
		throw new SyntaxError(`Argument "webhook_key"'s value is not match the require pattern! ([GitHub Action] Send To IFTTT)`);
	};
	githubAction.core.info(`Import variable list. ([GitHub Action] Send To IFTTT)`);
	variableSystem.list = {
		external: githubAction.core.getInput(`variable_list_external`),
		payload: githubAction.github.context.payload
	};
	githubAction.core.info(`Analysis external variable list. ([GitHub Action] Send To IFTTT)`);
	if (advancedDetermine.isJSON(variableSystem.list.external) !== true) {
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
	};
	githubAction.core.info(`Tokenize variable list. ([GitHub Action] Send To IFTTT)`);
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
	githubAction.core.info(`Replace variable in the data. ([GitHub Action] Send To IFTTT)`);
	function variableReplace(variableKey, variableValue) {
		Object.keys(input).forEach((element) => {
			input[element] = input[element].replace(variableKey, variableValue);
		});
		webhook.eventName = webhook.eventName.replace(variableKey, variableValue);
	};
	Object.keys(variableSystem.list.payload).forEach((keyPayload) => {
		variableReplace(
			new RegExp(
				regexpEscape(`${variableSystem.prefix}payload${variableSystem.join}${keyPayload}${variableSystem.suffix}`),
				"gu"
			),
			variableSystem.list.payload[keyPayload]
		);
	});
	Object.keys(variableSystem.list.external).forEach((keyExternal) => {
		variableReplace(
			new RegExp(
				regexpEscape(`${variableSystem.prefix}external${variableSystem.join}${keyExternal}${variableSystem.suffix}`),
				"gu"
			),
			variableSystem.list.external[keyExternal]
		);
	});
	githubAction.core.info(`Generate network request payload. ([GitHub Action] Send To IFTTT)`);
	let requestPayload = JSON.stringify(input);
	githubAction.core.debug(`Network Request Payload: ${requestPayload} ([GitHub Action] Send To IFTTT)`);
	githubAction.core.info(`Send network request to IFTTT. ([GitHub Action] Send To IFTTT)`);
	let response = await nodeFetch(
		`https://maker.ifttt.com/trigger/${webhook.eventName}/with/key/${webhook.key}`,
		{
			body: requestPayload,
			follow: 5,
			headers: {
				"Content-Type": "application/json",
				"Content-Length": requestPayload.length,
				"User-Agent": `NodeJS/${process.version.replace(/^v/giu, "")} node-fetch/2.6.1 GitHubAction.SendToIFTTT(@hugoalh)/3.1.0`
			},
			method: "POST",
			redirect: "follow"
		}
	);
	githubAction.core.info(`Receive network response from IFTTT. ([GitHub Action] Send To IFTTT)`);
	if (response.status !== 200) {
		githubAction.core.warning(`Receive status code ${response.status}! May cause error in the beyond. ([GitHub Action] Send To IFTTT)`);
	};
	let responseText = await response.text();
	if (response.ok === true) {
		githubAction.core.debug(`${response.status} ${responseText} ([GitHub Action] Send To IFTTT)`);
	} else {
		throw new Error(`${response.status} ${responseText} ([GitHub Action] Send To IFTTT)`);
	};
})().catch((error) => {
	githubAction.core.error(error);
	process.exit(1);
});
