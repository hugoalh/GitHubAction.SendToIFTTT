/*==================
[GitHub Action] Send To IFTTT
	Author & Contributor:
		hugoalh
	Language:
		NodeJS 12
==================*/
/*::::::::
Import Module
::::::::*/
const NodeJS = {
	HTTPS: require("https")
};
const GitHubAction = {
	Core: require("@actions/core")
};
const JSONFlatten = require("flat").flatten;

/*::::::::
Data Handle
::::::::*/
function DetermineIsNull(Input) {
	if (Input == null ||
		Input == "null" ||
		Input == "" ||
		Input == [] ||
		Input == {} ||
		Input == "{}" ||
		Input == undefined ||
		Input == "undefined"
	) {
		return true;
	};
	return false;
};
const Input_CannotVariable = {};
[
	"webhook_eventname",
	"webhook_key",
	"variable_prefix",
	"variable_suffix",
	"variable_join"
].forEach((value, index) => {
	Input_CannotVariable[value] = GitHubAction.Core.getInput(value);
});
const Input_CanVariable = {};
[
	"value1",
	"value2",
	"value3"
].forEach((value, index) => {
	Input_CanVariable[value] = GitHubAction.Core.getInput(value);
});
if (DetermineIsNull(Input_CannotVariable["webhook_eventname"]) == false && DetermineIsNull(Input_CannotVariable["webhook_key"]) == false) {
	Input_CannotVariable["webhook_url"] = `https://maker.ifttt.com/trigger/${Input_CannotVariable["webhook_eventname"]}/with/key/${Input_CannotVariable["webhook_key"]}`;
} else {
	GitHubAction.Core.setFailed("Invalid webhook event name or key!");
};
var Input_VariableLists = {};
for (let index = 0; index < 10; index++) {
	let Name = GitHubAction.Core.getInput(`variable_list_${index}_name`),
		Data = GitHubAction.Core.getInput(`variable_list_${index}_data`);
	if (DetermineIsNull(Data) == false) {
		try {
			if (typeof Data != "object") {
				Data = JSON.parse(Data);
			};
		} catch (error) {
			GitHubAction.Core.setFailed(`Fail to parse variable list #${index}: ${error}`);
		};
		if (DetermineIsNull(Name) == false) {
			Input_VariableLists[Name] = Data;
		} else {
			Input_VariableLists[index] = Data;
		};
	} else {
		GitHubAction.Core.info(`Variable list #${index} is null, ignore remains.`);
		break;
	};
};
if (DetermineIsNull(Input_CannotVariable["variable_join"]) == true) {
	Input_CannotVariable["variable_join"] = "_";
};
if (DetermineIsNull(Input_CannotVariable["variable_prefix"]) == true) {
	Input_CannotVariable["variable_prefix"] = "%";
};
if (DetermineIsNull(Input_CannotVariable["variable_suffix"]) == true) {
	Input_CannotVariable["variable_suffix"] = "%";
};
if (DetermineIsNull(Input_VariableLists) == false) {
	if (Object.keys(Input_VariableLists).length == 1) {
		Input_VariableLists = Object.values(Input_VariableLists)[0];
	};
	try {
		Input_VariableLists = JSONFlatten(
			Input_VariableLists,
			{
				delimiter: Input_CannotVariable["variable_join"],
				overwrite: true
			}
		);
	} catch (error) {
		GitHubAction.Core.setFailed(`Fail to flatten variable list: ${error}`);
	};
	Promise.allSettled(
		Object.keys(Input_CanVariable).map((Item, index) => {
			new Promise((resolve, reject) => {
				if (DetermineIsNull(Item) == false) {
					Object.keys(Input_VariableLists).forEach((Key, index) => {
						Input_CanVariable[Item] = Input_CanVariable[Item].replace(
							new RegExp(`${Input_CannotVariable["variable_prefix"]}${Key}${Input_CannotVariable["variable_suffix"]}`, "gu"),
							Input_VariableLists[Key]
						);
					});
				};
			}).catch((error) => { });
		})
	);
};
const Output = Input_VariableLists;
Output["value1"] = Input_CanVariable["value1"];
Output["value2"] = Input_CanVariable["value2"];
Output["value3"] = Input_CanVariable["value3"];

/*::::::::
Send
::::::::*/
const Request_Payload = JSON.stringify(Output);
const Request_Option = {
	port: 443,
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		"Content-Length": Request_Payload.length
	}
};
const Request_Node = NodeJS.HTTPS.request(
	Input_CannotVariable["webhook_url"],
	Request_Option,
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
Request_Node.on(
	"error",
	(error) => {
		GitHubAction.Core.setFailed(error);
	}
);
Request_Node.write(Request_Payload);
Request_Node.end();
