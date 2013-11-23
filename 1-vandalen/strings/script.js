"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
	
		if(  typeof str != 'string' || str.length < 1 ) {
			throw new Error("Not a string or too few characters detected."); 
		}	 
		
		var modified_str = "";

		for (var i = 0, max = str.length; i < max; i++) {
           var c = str.charAt(i);
           if( c == 'a' || c == 'A') {
        		c = '#';
           }
           else if(c.toUpperCase() != c) {
           	c =	c.toUpperCase();
           }
           else if(c.toLowerCase() != c) {
           		c = c.toLowerCase();
           }

         	modified_str += c;
        }

		return modified_str;




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