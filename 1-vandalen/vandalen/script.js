"use strict";


	var makePerson = function(persArr){
	var nameArray = [];
	var ageArray = [];
	persArr.forEach(function(person) {
	nameArray.push(person.name);
	ageArray.push(person.age);
	});
	nameArray.sort(function(a,b){ return a.localeCompare(b);});
	nameArray = nameArray.join(", "); 
	ageArray.sort();
	var total = 0;
	ageArray.forEach(function(age) {
	total+=age;
	});
  
   
  var result = {
  
  minAge:ageArray[0],
  maxAge:ageArray[ageArray.length-1],
  averageAge: Math.round(total/ ageArray.length),
  names:nameArray
  };
  
   return result;
};

