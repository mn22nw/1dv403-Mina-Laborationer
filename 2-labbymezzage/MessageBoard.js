"use strict";

window.onload = function() {

	var div = document.querySelector("#displayMessages"); 
	var submit = document.querySelector("#send");
	var input = document.querySelector("#text");
	
	var MessageBoard = {
	messages: [], 
	init: function(e) {
	
	var mess = new Message (e, new Date());
	
	console.log(mess.toString());
	//mess.setText(e);
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
		
		
		}
	}
	

	// ------------------------------------------------------------------------------
	// Kod för att hantera utskrift och inmatning
	

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
		submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.
		div.innerHTML = "";
		var answer = MessageBoard.init(input.value); // Läser in texten från textrutan och skickar till funktionen "guess"
		
		
		MessageBoard.renderMessage(0);

		//var writeMessages = MessageBoard.messages;
		//writeMessages.forEach(function(mesg) {
		//p.innerHTML += "<br />"+mesg.getHTMLText();
		//t.innerHTML += mesg.getDateText();		// Skriver ut texten från arrayen som skapats i funktionen.			
		//});
	//	if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
		//	submit.disabled = true;
		//}
	});
}