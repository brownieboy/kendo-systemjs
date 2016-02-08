// import jq from 'jquery';
// import 'kendo.datepicker';

// window.jQuery = jq;
// window.$ = window.jQuery;

// class DatePickerField {
// 	constructor(configObj) {
// 		console.log("constructor called");

// 		$("#testpicker").kendoDatePicker({});
// 		console.log("date picker called");
// 	}
// }

// export default DatePickerField;

var jQuery = require('jquery');
// var $ = require('jquery');
require('kendo.datepicker');

function setupDatePicker() {
    $("#testpicker").kendoDatePicker({});
    console.log("date picker called");
}

module.exports = setupDatePicker;
