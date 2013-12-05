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

	// ------------------------------------------------------------------------------
	// Kod för att hantera utskrift och inmatning

	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
		submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	
		
		
		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	});
}