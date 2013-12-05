"use strict";

//window.onload = function(){
	
	var MessageBoard = {
	messages: [], 
	init: function(e) {
	var mess = new Message ("Mia Nygren", new Date());
	
	console.log(mess.toString());
	console.log(mess.getText());  // skriver ut texten
	mess.setText("Whhaaat, en ny text?! vad säger Rumple om detta?");
	console.log(mess.getText());
	MessageBoard.messages.push(mess);
	
	}
	}
	/*MessageBoard.prototype.play = function() { 
	init();
	}
	MessageBoard.play();*/
	//};
window.onload = function() {
MessageBoard.init(); // kör init-funktionen// lägger till meddelande i arrayen
console.log(MessageBoard.messages[0].getText());
}