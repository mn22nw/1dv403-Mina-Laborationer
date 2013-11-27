"use strict";

window.onload = function(){


		var convertString = function(str){
		if (str) {
		var strArray = new Array();
		for (var i=0; i < str.length; i++){
		strArray.push(str[i]);
		}
		var checkCase = strArray;
		
		for (var i =0; i <checkCase.length; i++){
		
		if (checkCase[i].toLowerCase() !== checkCase[i])  { 
		checkCase[i] = checkCase[i].toLowerCase(); 
		if (checkCase[i] === "a") checkCase[i]= checkCase[i].replace('a','#');
		continue;}
		
		if (checkCase[i].toUpperCase() !== checkCase[i]){ 
		checkCase[i] = checkCase[i].toUpperCase();
		if (checkCase[i] === "A") checkCase[i]= checkCase[i].replace('A','#');
		continue;	}
		}
		var fixedStr = checkCase.join("");
		return fixedStr;
		}
		else {throw new Error("Du måste skriva in något för att kunna omvandla det!");}
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
                        p.innerHTML = answer;                // Skriver ut texten från arrayen som skapats i funktionen.        
                } catch (error){
                        p.classList.add( "error"); // Växla CSS-klass, IE10+
                        p.innerHTML = error.message;
                }
        
        });

};