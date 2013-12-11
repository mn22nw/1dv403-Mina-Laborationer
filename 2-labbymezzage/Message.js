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

return this.getText().replace(/[\n\r]/g, "<br />");

}
Message.prototype.getDateText = function() {
var hours = this.getDate().getHours();
var minutes = this.getDate().getMinutes();
var seconds = this.getDate().getSeconds();

function addZero(value) {
    if(value < 10) {
        return '0' + value;
    } else {
        return value;
    }
}
return addZero(hours)+":"+addZero(minutes)+":"+addZero(seconds);

}
Message.prototype.getDateMessage = function() {
var monthNames = [ "Januari", "Februari", "Mars", "April", "Maj", "Juni",
    "Juli", "Augusti", "September", "October", "November", "December" ];
var month = this.getDate().getMonth();
var year = this.getDate().getFullYear();
var day = this.getDate().getDate();
return day+" "+monthNames[month]+" "+year;

}
