"use strict";

window.onload = function(){

	/*Function copied from http://stackoverflow.com/a/2483476*/
	var daysBetween = function(one, two){
		// Do the math.
   		var millisecondsPerDay = 1000 * 60 * 60 * 24;
        var millisBetween = two.getTime() - one.getTime();
   		var days = millisBetween / millisecondsPerDay;

    	// Round down.
    	return Math.floor(days);
	}

	var birthday = function(date){

		//Error handling if date isn't in the format 2013-11-22 must be implemented.
		var bday = new Date(date);
		
		var today = new Date();
		bday.setHours(0,0,0,0);
		today.setHours(0,0,0,0);
	
		bday.setFullYear(today.getFullYear());
		
		var diff = daysBetween(today, bday);

		if( diff < 0 ) {
			//Negative number, already had birthday this year.
			bday.setFullYear( bday.getFullYear() +  1 );
			diff = daysBetween(today, bday);
		}

		return diff;
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
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
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