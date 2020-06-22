/*==================
[GitHub Action] Send To IFTTT
	Contributor:
		hugoalh
	Language:
		NodeJS 14
==================*/
/*::::::::
Import Module
::::::::*/
const nodeJS = {
	https: require("https")
};
const githubAction = {
	core: require("@actions/core")
};
const jsonFlatten = require("flat").flatten;

/*::::::::
Data Handle
::::::::*/
function determineIsNull(input) {
	if (input === null ||
		input === "null" ||
		input === "" ||
		input === [] ||
		input === {} ||
		input === "{}" ||
		input === undefined ||
		input === "undefined"
	) {
		return true;
	};
	return false;
};
const inputCannotVariable = {};
[
	"webhook_eventname",
	"webhook_key",
	"variable_prefix",
	"variable_suffix",
	"variable_join"
].forEach((value, index) => {
	inputCannotVariable[value] = githubAction.core.getInput(value);
});
const inputCanVariable = {};
[
	"value1",
	"value2",
	"value3"
].forEach((value, index) => {
	inputCanVariable[value] = githubAction.core.getInput(value);
});
if (determineIsNull(inputCannotVariable["webhook_eventname"]) == false && determineIsNull(inputCannotVariable["webhook_key"]) == false) {
	inputCannotVariable["webhook_url"] = `https://maker.ifttt.com/trigger/${inputCannotVariable["webhook_eventname"]}/with/key/${inputCannotVariable["webhook_key"]}`;
} else {
	githubAction.core.setFailed("Invalid webhook event name or key!");
};
let inputVariableLists = {};
for (let index = 0; index < 10; index++) {
	let name = githubAction.core.getInput(`variable_list_${index}_name`),
		data = githubAction.core.getInput(`variable_list_${index}_data`);
	if (determineIsNull(data) == false) {
		try {
			if (typeof data != "object") {
				data = JSON.parse(data);
			};
		} catch (error) {
			githubAction.core.setFailed(`Fail to parse variable list #${index}: ${error}`);
		};
		if (determineIsNull(name) == false) {
			inputVariableLists[name] = data;
		} else {
			inputVariableLists[index] = data;
		};
	} else {
		githubAction.core.info(`Variable list #${index} is null, ignore remains.`);
		break;
	};
};
if (determineIsNull(inputCannotVariable["variable_join"]) == true) {
	inputCannotVariable["variable_join"] = "_";
};
if (determineIsNull(inputCannotVariable["variable_prefix"]) == true) {
	inputCannotVariable["variable_prefix"] = "%";
};
if (determineIsNull(inputCannotVariable["variable_suffix"]) == true) {
	inputCannotVariable["variable_suffix"] = "%";
};
if (determineIsNull(inputVariableLists) == false) {
	if (Object.keys(inputVariableLists).length == 1) {
		inputVariableLists = Object.values(inputVariableLists)[0];
	};
	try {
		inputVariableLists = jsonFlatten(
			inputVariableLists,
			{
				delimiter: inputCannotVariable["variable_join"],
				overwrite: true
			}
		);
	} catch (error) {
		githubAction.core.setFailed(`Fail to flatten variable list: ${error}`);
	};
	Promise.allSettled(
		Object.keys(inputCanVariable).map((item, index) => {
			new Promise((resolve, reject) => {
				if (determineIsNull(item) == false) {
					Object.keys(inputVariableLists).forEach((key, index) => {
						inputCanVariable[item] = inputCanVariable[item].replace(
							new RegExp(`${inputCannotVariable["variable_prefix"]}${key}${inputCannotVariable["variable_suffix"]}`, "gu"),
							inputVariableLists[key]
						);
					});
				};
			}).catch((error) => { });
		})
	);
};
const output = {
	"value1": inputCanVariable["value1"],
	"value2": inputCanVariable["value2"],
	"value3": inputCanVariable["value3"]
};

/*::::::::
Send
::::::::*/
const requestPayload = JSON.stringify(output);
const requestOption = {
	port: 443,
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		"Content-Length": requestPayload.length
	}
};
const requestNode = nodeJS.https.request(
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
