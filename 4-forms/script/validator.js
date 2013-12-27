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
	var postCodeReg =  /^\d{5}$/;   //funkar!
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
	fn.onblur = function () {
	if (fn.value ===""|| fn.value === null){
	var textNode1 = document.createTextNode("Detta fält får inte lämnas tomt!");
	var errorm = document.createElement("p");
	errorm.appendChild(textNode1);
	Form.errorArray[0].appendChild(errorm);	}
	}
	
	ln.onblur = function () {
	if (ln.value ==="" || ln.value === null){
	var textNode2 = document.createTextNode("Detta fält får inte lämnas tomt!");
	var errorm1 = document.createElement("p");
	errorm1.appendChild(textNode2);
	Form.errorArray[1].appendChild(errorm1);	}
	}
	
	postc.onblur = function () {
	//Form.errorPostc.innerHTML = "";
	//if (postc.value ==="")
	//Form.errorPostc.innerHTML = "Detta fält får inte <br />lämnas tomt!";
	}
	form.onsubmit = function (e) {
	// -----Postcode----- //
	
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