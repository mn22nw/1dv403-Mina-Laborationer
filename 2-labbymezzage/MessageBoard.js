"use strict";

window.onload = function() {

	var div = document.querySelector("#displayMessages"); 
	var submit = document.querySelector("#send");
	var input = document.querySelector("#text");
	var countMessages = document.querySelector("#countMessages");
	countMessages.innerHTML = "Antal meddelanden"+": "+ 0;
	
	var MessageBoard = {
	messages: [], 
	init: function(e) {
	
	var mess = new Message (e, new Date());
	console.log(mess.toString());
	MessageBoard.messages.push(mess);
	},
	
	renderMessage: function(messageID) {
		var messageDiv = document.createElement("div");
		messageDiv.className = 'displayMessage';
		var text = document.createElement("p");
		var date = document.createElement("p");
		text.className = 'messageText';
		date.className ='messageDate';
		text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
		date.innerHTML = MessageBoard.messages[messageID].getDateText();
		div.appendChild(messageDiv);
		messageDiv.appendChild(text);
		messageDiv.appendChild(date); 
		},
	renderMessages: function() {
	// Ta bort alla meddelanden
	document.getElementById("displayMessages").innerHTML = "";
	document.getElementById("text").value = "";
	var numberOfMessages = 0;
	// Rendera alla meddelanden
	MessageBoard.messages.forEach(function() {
	MessageBoard.renderMessage(numberOfMessages++);
	});
	countMessages.innerHTML = "Antal meddelanden"+": "+numberOfMessages;
	}
	}
	

	// ------------------------------------------------------------------------------
	// Kod för att hantera utskrift och inmatning
	

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
		submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.
		runProgram();
	});
		input.onkeydown = function (e) {
		e = e || window.event;
		var keyCode = e.keyCode || e.which;
		
		if(keyCode==13 && !e.shiftKey) {
		runProgram();} }
	
	var runProgram = function()  {
	div.innerHTML = "";
	var answer = MessageBoard.init(input.value); // Läser in texten från textrutan och skickar till funktionen "guess"
	MessageBoard.renderMessages();
	}
}