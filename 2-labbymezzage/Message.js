"use strict";

	
	function Message(message, date)
{
this.getDate = function () { return date; };
this.setDate = function (_date) { date = _date; };

this.getText = function () { return message; };
this.setText = function (_text) { message = _text; };


this.setDate(date);
this.setText(message);
}

Message.prototype.toString = function() {
 return this.getText()+" ("+this.getDate()+") "; }
 
Message.prototype.getHTMLText = function() {

// här ska det visst finnas något

}
Message.prototype.getDateText = function() {

// här ska det visst också finnas något

}
