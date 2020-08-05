/*==================
[GitHub Action] Send To IFTTT - Custom Determine
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
function customDetermine(item) {
	if (
		advancedDetermine.isString(item) == true ||
		advancedDetermine.isNull(item, { allowStringify: true }) == false ||
		item === {} ||
		item === "{}" ||
		advancedDetermine.isUndefined(item, { fuzzyMode: true }) == true
	) {
		return true;
	};
	return false;
};
module.exports = customDetermine;
