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
	//persArr.prototype.minAge

	
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

