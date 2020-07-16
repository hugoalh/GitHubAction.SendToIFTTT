/*==================
[GitHub Action] Send To IFTTT
	Language:
		NodeJS 14
==================*/
const https = require("https");
const githubAction = {
	core: require("@actions/core")
};
const customNullDetermine = require("./customnulldetermine.js");
const jsonFlatten = require("flat").flatten;
let inputCannotVariable = {
	webhookEventName: githubAction.core.getInput("webhook_eventname"),
	webhookKey: githubAction.core.getInput("webhook_key"),
	variablePrefix: githubAction.core.getInput("variable_prefix"),
	variableSuffix: githubAction.core.getInput("variable_suffix"),
	variableJoin: githubAction.core.getInput("variable_join")
};
let inputCanVariable = {
	value1: githubAction.core.getInput("value1"),
	value2: githubAction.core.getInput("value2"),
	value3: githubAction.core.getInput("value3")
};
if (customNullDetermine(inputCannotVariable.webhookEventName) == false && customNullDetermine(inputCannotVariable.webhookKey) == false) {
	inputCannotVariable.webhookUrl = `https://maker.ifttt.com/trigger/${inputCannotVariable.webhookEventName}/with/key/${inputCannotVariable.webhookKey}`;
} else {
	githubAction.core.setFailed(`Invalid type of "webhook_eventname" or "webhook_key"! Require type of string.`);
};
let inputVariableLists = {};
for (let index = 0; index < 10; index++) {
	let name = githubAction.core.getInput(`variable_list_${index}_name`),
		data = githubAction.core.getInput(`variable_list_${index}_data`);
	if (customNullDetermine(data) == false) {
		try {
			if (typeof data != "object") {
				data = JSON.parse(data);
			};
		} catch (error) {
			githubAction.core.setFailed(`Fail to parse variable list #${index}: ${error}`);
		};
		if (customNullDetermine(name) == false) {
			inputVariableLists[name] = data;
		} else {
			inputVariableLists[index] = data;
		};
	} else {
		githubAction.core.info(`Variable list #${index} is null, ignore remains.`);
		break;
	};
};
if (customNullDetermine(inputCannotVariable.variableJoin) == true) {
	inputCannotVariable.variableJoin = "_";
};
if (customNullDetermine(inputCannotVariable.variablePrefix) == true) {
	inputCannotVariable.variablePrefix = "%";
};
if (customNullDetermine(inputCannotVariable.variableSuffix) == true) {
	inputCannotVariable.variableSuffix = "%";
};
if (customNullDetermine(inputVariableLists) == false) {
	if (Object.keys(inputVariableLists).length == 1) {
		inputVariableLists = Object.values(inputVariableLists)[0];
	};
	try {
		inputVariableLists = jsonFlatten(
			inputVariableLists,
			{
				delimiter: inputCannotVariable.variableJoin,
				overwrite: true
			}
		);
	} catch (error) {
		githubAction.core.setFailed(`Fail to flatten variable list: ${error}`);
	};
	Promise.allSettled(
		Object.keys(inputCanVariable).map((item, index) => {
			new Promise((resolve, reject) => {
				if (customNullDetermine(item) == false) {
					Object.keys(inputVariableLists).forEach((key, index) => {
						inputCanVariable[item] = inputCanVariable[item].replace(
							new RegExp(`${inputCannotVariable.variablePrefix}${key}${inputCannotVariable.variableSuffix}`, "gu"),
							inputVariableLists[key]
						);
					});
				};
			}).catch((error) => { });
		})
	);
};
const output = {
	"value1": inputCanVariable.value1,
	"value2": inputCanVariable.value2,
	"value3": inputCanVariable.value3
};
const requestPayload = JSON.stringify(output);
const requestOption = {
	port: 443,
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		"Content-Length": requestPayload.length
	}
};
const requestNode = https.request(
	inputCannotVariable["webhook_url"],
	requestOption,
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
requestNode.on(
	"error",
	(error) => {
		githubAction.core.setFailed(error);
	}
);
requestNode.write(requestPayload);
requestNode.end();
