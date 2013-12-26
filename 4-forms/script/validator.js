"use strict";

window.onload = function() {

	if (!NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
	}
	
	var r = "RUMPLE";
	
	
	//st.replaceAll("\\s+","")
	
	var Form = {
	formId:document.querySelector("#theForm"),
	errorFn:document.querySelector(".errorm #error1"),
	errorLn:document.querySelector(".errorm #error2"),
	errorPostc:document.querySelector(".errorm #error3"),
	errorEpost:document.querySelector(".errorm #error4"),
	errorPricem:document.querySelector(".errorm #error5"),
	submit:document.querySelector("#submitknapp"),
	idArray:[],
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
	}}
	//  -----Name and Last name----- //
	fn.onblur = function () {
	Form.errorFn.innerHTML = "";
	if (fn.value ==="")
	Form.errorFn.innerHTML = "Detta fält får inte <br />lämnas tomt!";
	}
	ln.onblur = function () {
	Form.errorLn.innerHTML = "";
	if (ln.value ==="")
	Form.errorLn.innerHTML = "Detta fält får inte <br />lämnas tomt!";
	}
	
	postc.onblur = function () {
	Form.errorPostc.innerHTML = "";
	if (postc.value ==="")
	Form.errorPostc.innerHTML = "Detta fält får inte <br />lämnas tomt!";
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