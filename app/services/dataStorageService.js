define([], function(argument) {
	return[ function() {
		var actualData = null;
		function setDataFromInputField(data) {
			actualData = data;
		}
		function getDataFromInputField() {
			return actualData;
		}
		return {
			set: setDataFromInputField,
			get: getDataFromInputField
		}
	}]
});