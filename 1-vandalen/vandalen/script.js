"use strict";

var makePerson = function(persArr){

	// Din kod här...
	var minAge = 200;
	var maxAge = 0;
	var totalAge = 0;
	var averageAge = 0;
	var count = 0;
	var names = [];

	persArr.forEach(function(pers) {

		//If version
		/*
		if( pers.age < minAge)
			minAge = pers.age;
		if( pers.age > maxAge)
			maxAge = pers.age;
		*/

		//Using Math.max and Math.min
		minAge = Math.min(minAge, pers.age);
		maxAge = Math.max(maxAge, pers.age);

		//Using formula
		/*minAge = ?;
		maxAge = (maxAge + pers.age) / 2 + Math.abs(maxAge - pers.age) / 2;
		*/

		count++;
		totalAge +=pers.age;
		averageAge = Math.round(totalAge/ count);

		names[names.length] = pers.name;
		});

	names.sort(sortfunction);

	/*http://forums.htmlhelp.com/lofiversion/index.php/t762.html
	Might not work in countries without åäö in there locale?*/
	function sortfunction(a, b) {
		return a.toString().localeCompare(b.toString());
	}
	
	var answer = new Object();
	answer.names = names.join(', ');
	answer.minAge = minAge;
	answer.maxAge = maxAge;
	answer.averageAge = averageAge;
	return answer;
}

