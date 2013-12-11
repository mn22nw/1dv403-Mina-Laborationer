"use strict";

window.onload = function(){
	
	var secret = Math.floor(Math.random() * 100) + 1;
	var clicks = 0;
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.	
		clicks +=1; 
		var array =[];
		array[0]=[true, "Grattis du vann! Det hemliga talet var "+secret+" och du behövde "+clicks+" gissningar för att hitta det."];
		array[1]=[false, "Det hemliga talet är högre!"];
		array[2]=[false, "Det hemliga talet är lägre!"];
		array[3]=[false, "Talet är utanför intervallet 0 - 100"];
		
		if ((+number )=== secret){
		return (array[0]);
		}
		if ((+number ) >100 || (+number ) <0 ){
		return (array[3]);
		}
		if ((+number )< secret){
		return (array[1]);
		}
		if ((+number )> secret){
		return (array[2]);
		}
	
	};
	
	// ------------------------------------------------------------------------------
	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.
try {
		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	}
	catch (error){ p.innerHTML = "Du måste ange ett nummer!";}	
	});
};