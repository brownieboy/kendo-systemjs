import jq from 'jquery';
import 'kendo.datepicker';

window.jQuery = jq;
window.$ = window.jQuery;

class DatePickerField {
	constructor(configObj) {
		console.log("constructor called");

		$("#testpicker").kendoDatePicker({});
		console.log("date picker called");
	}
}

export default DatePickerField;