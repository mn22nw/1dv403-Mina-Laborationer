"use strict";

window.onload = function() {

	if (!NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
	}
	
	var r = "RUMPLE";
	
	var Form = {
	formId:document.querySelector("#theForm"),
	errorArray:document.querySelectorAll(".errorm"),
	submit:document.querySelector("#submitknapp"),
	init: function() {
	var replacePc = postc.value.replace(/\s/g,""); 
	var re = replacePc.replace('SE','');
	
	if(postCodeReg2.test(re) ===true){
	var pcArray = re.split("");
	postc.value = (pcArray[0]+pcArray[1]+pcArray[2]+" "+pcArray[3]+pcArray[4]);
	console.log(postc.value);
	}
	}};
	
	var form = Form.formId;
	var fn = form.elements["0"];
	var ln = form.elements["1"];
	var postc = form.elements["2"];
	var epost = form.elements["3"];
	var pricem = form.elements["4"];
	
	fn.focus(); 
	
	for (var i=0; i<form.elements.length-2; i+=1) {   
	form.elements[i].onfocus = function () {
	this.select();
	}};
	
	
	// -----First name----- //
	var checkIfStr = /^\w{1,120}$/;
	
	var errorm = document.createElement("p");
	fn.onblur = function () {
	errorm.textContent ="";
	if (fn.value ===""|| fn.value === null){
	var textNode1 = document.createTextNode("Detta fält får inte lämnas tomt!");
	errorm.appendChild(textNode1);
	Form.errorArray[0].appendChild(errorm);	
	//Form.errorArray[0].removeChild(Form.errorArray[0].childNodes[0]);
	} 
	if (fn.value !=="" && fn.value!== null && checkIfStr.test(fn.value) === false){
	errorm.textContent =""; 
	var textNode1 = document.createTextNode("Du måste ange ett giltigt förnamn!");
	errorm.appendChild(textNode1);
	Form.errorArray[0].appendChild(errorm);
	}
	};
	// ----Last name----- //
	var errorm1 = document.createElement("p");
	ln.onblur = function () {
	errorm1.textContent ="";
	if (ln.value ==="" || ln.value === null){	
	var textNode2 = document.createTextNode("Detta fält får inte lämnas tomt!");
	errorm1.appendChild(textNode2);
	Form.errorArray[1].appendChild(errorm1);}
	
	if (ln.value !=="" && ln.value!== null && checkIfStr.test(ln.value) === false){
	errorm1.textContent =""; 
	var textNode2 = document.createTextNode("Du måste ange ett giltigt efternamn!");
	errorm1.appendChild(textNode2);
	Form.errorArray[1].appendChild(errorm1);
	}};
	
	// -----Postcode----- //
	var postCodeReg = /^\w{0,2}\s{0,1}\d{3,3}-{0,1}\s{0,1}\d{2,2}$/;
	var postCodeReg2 =  /^\d{5}$/; 
	var errorm2 = document.createElement("p");
	
	postc.onblur = function () {
	errorm2.textContent ="";
	if (postc.value ==="" || postc.value === null){	
	var textNode3 = document.createTextNode("Detta fält får inte lämnas tomt!");
	errorm2.appendChild(textNode3);
	Form.errorArray[2].appendChild(errorm2);}
	
	if (postc.value !=="" && postc.value!== null && postCodeReg.test(postc.value) === false){
	errorm2.textContent =""; 
	var textNode3 = document.createTextNode("Du måste ange ett korrekt postnummer!");
	errorm2.appendChild(textNode3);
	Form.errorArray[2].appendChild(errorm2);
	}};
	
	// -----Email----- //
	var errorm3 = document.createElement("p");
	var emailReg = /^[0-9a-z._-]{1,64}@[a-z]{1,}?\.[a-z]{2,}$/im;	
	epost.onblur = function () {
	errorm3.textContent ="";
	if (epost.value ==="" || epost.value === null){	
	var textNode4 = document.createTextNode("Detta fält får inte lämnas tomt!");
	errorm3.appendChild(textNode4);
	Form.errorArray[3].appendChild(errorm3);}
	
	if (epost.value !=="" && epost.value!== null && emailReg.test(epost.value) === false){
	errorm3.textContent =""; 
	var textNode4 = document.createTextNode("Du måste ange en korrekt email-adress!");
	errorm3.appendChild(textNode4);
	Form.errorArray[3].appendChild(errorm3);
	}};
	
	// ---Popup--- //
	function popUp(){
    var popup = document.createElement('div');
    popup.className = 'popup';
    popup.id = 'popup';
    var cancel = document.createElement('div');
    cancel.id = 'cancel';
	var textNodeCancel = document.createTextNode("Stäng");
	var pCancel = document.createElement('p');
	pCancel.appendChild(textNodeCancel);
    cancel.appendChild(pCancel);
    cancel.onclick = function (e) { popup.parentNode.removeChild(popup) };
	
    var firstName = document.createElement('p');
	var textNodeFn = document.createTextNode("Förnamn: "+fn.value);
	firstName.appendChild(textNodeFn);
	
	var lastName = document.createElement('p');
	var textNodeLn = document.createTextNode("Efternamn: "+ln.value);
	lastName.appendChild(textNodeLn);
	
	var pPostCode = document.createElement('p');
	var textNodePc = document.createTextNode("Postnummer: "+postc.value);
	pPostCode.appendChild(textNodePc);
	
	popup.appendChild(cancel);
    popup.appendChild(firstName);  
	popup.appendChild(lastName);
	popup.appendChild(pPostCode);	
    
    document.body.appendChild(popup);
}
	
	// -----Submit form----- //
	form.onsubmit = function (e) {
	//Form.submit.disabled = true;
	
	Form.init(); popUp();
	if (fn.value ===""|| fn.value === null || ln.value ==="" || ln.value === null){ console.log(r);
	return false;}
	if (postc.value ==="" || postc.value=== null || postCodeReg.test(postc.value) === false){ console.log("pos");
	return false;}
	if (epost.value ==="" || epost.value=== null || emailReg.test(epost.value) === false){ console.log("Lol");
	return false;}
	else { Form.submit.value = "Skickar...";
	
	return false; }
	};
	};
	

//http://stackoverflow.com/questions/11542822/javascript-onclick-createelement-div-viz-popup-box