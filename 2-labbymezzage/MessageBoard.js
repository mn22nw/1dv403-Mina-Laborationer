"use strict";

	
	var MessageBoard = {
	messages: [], 
	init: function(e) {
	
	var mess = new Message (e, new Date());
	
	console.log(mess.toString());
	//mess.setText(e);
	MessageBoard.messages.push(mess);
	}
	}
	
window.onload = function() {
	// ------------------------------------------------------------------------------
	// Kod för att hantera utskrift och inmatning
	var p = document.querySelector("#value"); 
	if(p == "") console.log("eheh");
	var t = document.querySelector("#time"); 
	var submit = document.querySelector("#send");
	var input = document.querySelector("#text");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
		submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.
		p.innerHTML = "";
		var answer = MessageBoard.init(input.value); // Läser in texten från textrutan och skickar till funktionen "guess"
		
		renderMessage: function(messageID) {
		t.innerHTML  = MessageBoard.messages[messageID].getHTMLText();
		}

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