"use strict";

window.onload = function(){

	var birthday = function(date){
				
		var validateInput = /(\d{4})[-\/](\d{2})[-\/](\d{2})/.exec(date)
		
	if (validateInput == null)
         {
			throw new Error("Du måste välja ett datum!");
         }
		 
	var splitDate= validateInput.toString();	
	var arrDate= splitDate.split(",");
	
	var currdate = new Date();	
	var currentYear = currdate.getFullYear();
	
	var setBirthday = new Date(arrDate[1],arrDate[2] - 1,arrDate[3]);
	var birthdayYear = setBirthday.getFullYear();
	var newBirthday = new Date(currentYear ,arrDate[2] - 1,arrDate[3]); 
	
	if (birthdayYear>currentYear){
	return "Du har ju inte blivit född än!!";
		}
	
	var differenceBirthdayYearMillisec = newBirthday -setBirthday;
	var differenceYearBirthdaytoBirthday = Math.ceil(differenceBirthdayYearMillisec / 1000 / 60 / 60 / 24);
	

	var differenceInMilliseconds = setBirthday-currdate;
	var differenceInDays = Math.ceil(differenceInMilliseconds / 1000 / 60 / 60 / 24);
	var differenceIndays1 = differenceYearBirthdaytoBirthday +differenceInDays;
	
	if (differenceIndays1 === 0) {
	return 0;
	}	
	
	if (setBirthday < currdate) {
		if(differenceInDays<-365){
			if (differenceIndays1>0) {
			return "Du fyller år om "+ differenceIndays1 +" dagar!";}
			
			return "Du fyller år om "+ (365+differenceIndays1) +" dagar!";}
			
	 return "Du fyller år om "+ (365+differenceInDays)+" dagar";
	}
	if (setBirthday > currdate) {
	 return "Du fyller år om " +differenceInDays +" dagar";
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
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = answer;
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};