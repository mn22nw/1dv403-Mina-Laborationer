"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
	
		var eachLetter = str;
		for (var i = 0; i < eachLetter.length; i++){
		if (eachLetter == eachLetter.toUpperCase()) console.log("yeah");
		if (eachLetter == eachLetter.toLowerCase()) {console.log("Buh");}
		}

	//var replaceInput= str.replace('a', '#').replace("A", "#");     ---ANVÄND!!!--
	
	/*var myString = "Hello world!";
var myArray = new Array();
for (var i=0; i < myString.length; i++){
     myArray.push(myString[i]);
}*/

	/*var letters = ['a', 'b', 'c', 'A', 'B', 'C', '(', ')', '+', '-', '~', '*'];

​​​for (var ​i = 0; i<letters.length; i++) {
    if (letters[i] === letters[i].toUpperCase()
        && letters[i] !== letters[i].toLowerCase()) {
        console.log(letters[i] + ": " + true);
    } else {
        console.log(letters[i] + ": " + false);
    }
}​*/
	
	/*var character = '5';
if (character == character.toUpperCase()) {
 alert ('upper case true');
}
if (character == character.toLowerCase()){
 alert ('lower case true');
}*/
	
	/*var s = "Rumplee";
	for (var i = 0; i < s.length; i++) {
    console.log(s.charAt(i));
}*/
	//return replaceInput;
	//throw new UserException("Det blev något fel! Försök igen")}

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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});
};

// länkar jag använde för tips //
//http://stackoverflow.com/questions/6745154/how-to-replace-multiple-words-in-a-single-string-in-java