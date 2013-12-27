"use strict";

window.onload = function() {

	if (!NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
	}
	
	var r = "RUMPLE";
	
	
	//st.replaceAll("\\s+","")
	
	var Form = {
	formId:document.querySelector("#theForm"),
	errorArray:document.querySelectorAll(".errorm"),
	submit:document.querySelector("#submitknapp"),
	init: function(value1,value2) {
	}};
	

	//var postCodeReg2 = /^(\d{3})-(\d{2})$/;//funkar!
	//var postCodeReg2 =  /^\d{5}$/;   //funkar!
	var postCodeReg = /^\w{0,2}\s{0,1}\d{3,3}-{0,1}\s{0,1}\d{2,2}$/;
	var form = Form.formId;
	var fn = form.elements["0"];
	var ln = form.elements["1"];
	var postc = form.elements["2"];
	var epost = form.elements["3"];
	var pricem = form.elements["4"];
	
	//pricem.style.visibility= "hidden";
	// fn.style.visibility= "hidden"; //tar bort första elementet
	fn.focus(); 
	
	
	for (var i=0; i<form.elements.length; i+=1) {   
	form.elements[i].onfocus = function () {
	this.select();
	}};
	
	
	// -----Name and Last name----- //
	var errorm = document.createElement("p");
	fn.onblur = function () {
	errorm.textContent ="";
	if (fn.value ===""|| fn.value === null){
	var textNode1 = document.createTextNode("Detta fält får inte lämnas tomt!");
	errorm.appendChild(textNode1);
	Form.errorArray[0].appendChild(errorm);	
	//Form.errorArray[0].removeChild(Form.errorArray[0].childNodes[0]);
	} 
	}
	
	var errorm1 = document.createElement("p");
	ln.onblur = function () {
	errorm1.textContent ="";
	if (ln.value ==="" || ln.value === null){	
	var textNode2 = document.createTextNode("Detta fält får inte lämnas tomt!");
	errorm1.appendChild(textNode2);
	Form.errorArray[1].appendChild(errorm1);}
	}
	
	// -----Postcode----- //
	var errorm2 = document.createElement("p");
	postc.onblur = function () {
	errorm2.textContent ="";
	if (ln.value ==="" || ln.value === null){	
	var textNode3 = document.createTextNode("Detta fält får inte lämnas tomt!");
	errorm2.appendChild(textNode3);
	Form.errorArray[2].appendChild(errorm2);}
	
	if (postc.value !=="" && postc.value!== null && postCodeReg.test(postc.value) === false)
	console.log(r);
	/*if (isNaN(postc.value)){  // om det inte är ett nummer blir det sant
	errorm2.textContent =""; 
	var textNode3 = document.createTextNode("Du måste ange ett korrekt postnummer!");
	errorm2.appendChild(textNode3);
	Form.errorArray[2].appendChild(errorm2); console.log(r);
	}*/}
	
	
	form.onsubmit = function (e) {
	Form.submit.disabled = true;
	if(postCodeReg.test(postc.value) ===true){
	var pcArray = postc.value.split("");
	postc.value = (pcArray[0]+pcArray[1]+pcArray[2]+" "+pcArray[3]+pcArray[4]);
	console.log(postc.value);
	}
	console.log(postc.value);	
	return false;
	};
	};
	

//http://stackoverflow.com/questions/15643842/createelement-inside-a-for-loop-just-replaces-created-item