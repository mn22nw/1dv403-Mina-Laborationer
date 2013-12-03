"use strict";

window.onload = function(){

	var birthday = function(date){
	
		var validateInput = /(\d{4})[-\/](\d{2})[-\/](\d{2})/.exec(date);
		
	if (validateInput == null)
         {
			throw new Error("Du måste välja ett datum!");
         }
		 
	var splitDate= validateInput.toString();	
	var arrDate= splitDate.split(",");
	var setBirthday = new Date(arrDate[1],arrDate[2] - 1,arrDate[3])
	var currdate = new Date();
	var differenceInMilliseconds = setBirthday-currdate;
	var differenceInDays = Math.ceil(differenceInMilliseconds / 1000 / 60 / 60 / 24);

	if (differenceInDays === 0) {
	return 0;
	}	

	if (setBirthday < currdate) {
	 throw new Error("Din födelsedag har redan varit!!");
	}
	if (setBirthday > currdate) {
	 return differenceInDays;
	} 
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"'
			console.log(answer);
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};