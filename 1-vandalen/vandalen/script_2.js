"use strict";


	var makePerson = function(persArr){

	var nameArray = [];
	var ageArray = [];
	persArr.forEach(function(person) {
	nameArray.push(person.getName());
	ageArray.push(person.getAge());
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

	function Person(name,age){
	this.getName = function () { return name; }
	this.setName = function (_name) { name=_name;}

	this.getAge = function () { return age; }
	this.setAge = function (_age) { age=_age;}

	this.setName(name);
	this.setAge(age);
	
	
	}
	
	var person1 = new Person("John Häggerud", 37);
	var person2 = new Person("Johan Leitet", 36);
	var person3 = new Person("Mats Loock", 46);
	var persons = [person1, person2, person3];
var data = persons;

var result = makePerson(data);

console.log(result);

