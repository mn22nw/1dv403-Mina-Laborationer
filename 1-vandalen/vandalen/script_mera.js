"use strict";


	var makePerson = function(persArr){

	//konstruktor
	function Person(name,age){
	this.getName = function () { return name; }
	this.setName = function (_name) { name=_name;}

	this.getAge = function () { return age; }
	this.setAge = function (_age) { age=_age;}

	this.setName(name);
	this.setAge(age);

	}
	Person.prototype.minAge

	var person1 = new Person("John Häggerud", 37);
	var person2 = new Person("Johan Leitet", 36);
	var person3 = new Person("Mats Loock", 46);
	var nameArray = [];
	var persons = [person1, person2, person3];

	persons.forEach(function(person) {
	nameArray.push(person.getName());
	});
	nameArray.sort();
	nameArray = nameArray.join(", "); 
  //console.log(person1.getName());
  
  var result = {
  
  minAge: 0,
  maxAge:120,
  averageAge: 67,
  names:nameArray
  };

  /* var objPerson = {

	names: "RUMPLE",
	minAge: 0,
	maxAge:120,
	averageAge: 30}*/

   return result;

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);
/*


var output = “”;
if (typeof args.name == “string”){
output += “Name: “ + args.name + “\n”;
}
if (typeof args.age == “number”) {
output += “Age: “ + args.age + “\n”;
}
alert(output);
}
displayInfo({ 
name: “Nicholas”, 
age: 29
});
displayInfo({
name: “Greg”

var objPerson = {

names: "RUMPLE",
minAge: 0;
maxAge:120;
averageAge: 30;
//function(){
//return "eehokej_kanske inte";


return names;
} */
	// Din kod här...

};

