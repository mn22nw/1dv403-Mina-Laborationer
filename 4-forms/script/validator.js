"use strict";

window.onload = function() {

	if (!NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
	}
	
	var Form = {
	formId:document.querySelector("#theForm"),
	errorArray:document.querySelectorAll(".errorm"),
	submit:document.querySelector("#submitknapp"),
	regexStr: /^[a-zåäö]{1,120}$/,
	regexEmail: /^[0-9a-z._-]{1,64}@[a-z]{1,}?\.[a-z]{2,}$/im,
	regexPostcode:/^\w{0,2}\s{0,1}\d{3,3}-{0,1}\s{0,1}\d{2,2}$/,
	regexFixPostcode:/^\d{5}$/,
	init:function() {
		//här ska väl all kod in..

		},
	fixPostcode: function() {  //rättar till postkoden
		var replacePc = postc.value.replace(/\s/g,""); 
		var re = replacePc.replace('SE','');
		
		if(Form.regexFixPostcode.test(re) ===true){
		var pcArray = re.split("");
		postc.value = (pcArray[0]+pcArray[1]+pcArray[2]+" "+pcArray[3]+pcArray[4]);
		console.log(postc.value);
	}
	}};	

	var form = Form.formId.elements;
	form[0].focus();  
	
	var matchString = function isStringMatch(str, strToMatch){
		var indexString = str.indexOf(strToMatch); 
		 return indexString;
	};
	
	
	var validateForm = function(n) {
					
		form[n].onblur = function () {	 
				console.log("ofocus");
				errorm.textContent ="";
				
				if (this.value ===""|| this.value === null){  //om formfält är tomt
					var textNode1 = document.createTextNode("Detta fält får inte lämnas tomt!");
					errorm.appendChild(textNode1);
					Form.errorArray[n].appendChild(errorm);	
				};
				
				var fieldName =  this.getAttribute("name");
				
				var checkName = matchString( fieldName.toLowerCase(), "namn");
				var checkEmail = matchString(fieldName.toLowerCase(), "email");
				var checkPostcode = matchString(fieldName.toLowerCase(), "post");
				var regexValue;
				
				if (checkName >= 0) {
				console.log(checkName +"detäre namn");
				regexValue = Form.regexStr.test(this.value);
				}
				
				if (checkEmail >= 0) {
				console.log(checkEmail +"detäremail"); 
				regexValue = Form.regexEmail.test(this.value);}
				
				if (checkPostcode >= 0) {
				console.log(checkPostcode +"detärepost");
				regexValue = Form.regexPostcode.test(this.value);}
				
				if (this.value !=="" && this.value!== null && regexValue === false){
					errorm.textContent ="";
					var textNode2 = document.createTextNode("Du måste ange ett korrekt " + fieldName.toLowerCase());
					errorm.appendChild(textNode2);
					Form.errorArray[n].appendChild(errorm);	
				};
			};
	};
	
	for (var i=0; i<form.length-2; i+=1) {   
		var errorm = document.createElement("p");
		form[i].onfocus = function () {
			this.select(); 
		}
		var validate = validateForm(i);
		
	} ;
	
	

	
	
	// ---Popup--- //
	var popUp =function (){
    var popup = document.createElement('div');
    popup.id = 'popup';
	var mask = document.createElement('div');
    mask.id = 'mask';
    var exitButton = document.createElement('div');
    exitButton.id = 'exitButton';
	var textNodeExitButton = document.createTextNode("Stäng");
	var pExitButton = document.createElement('p');
	pExitButton.appendChild(textNodeExitButton);
    exitButton.appendChild(pExitButton);
    exitButton.onclick = function (e) { 
	popup.parentNode.removeChild(popup); 
	mask.parentNode.removeChild(mask) };
	
	
			//---Cancel---//
	var cancel = document.createElement('div');
    cancel.id = 'cancel';
	var textNodeCancel = document.createTextNode("Avbryt");
	var pCancel = document.createElement('p');
	pCancel.appendChild(textNodeCancel);
    cancel.appendChild(pCancel);
    cancel.onclick = function (e) { popup.parentNode.removeChild(popup) 
	mask.parentNode.removeChild(mask)};
	
	
			//--Confirm--//
	var trueEller;
	var confirm = document.createElement('div');
    confirm.id = 'confirm';
	var textNodeConfirm = document.createTextNode("Genomför köp");
	var pConfirm = document.createElement('p');
	pConfirm.appendChild(textNodeConfirm);
    confirm.appendChild(pConfirm);
    confirm.onclick = function (e) {  console.log("hej"); trueEller = true; // popup.parentNode.removeChild(popup); 
	console.log(trueEller);
	}; 

	
	var h2= document.createElement('h2');
	var textNodeH2 = document.createTextNode("Vänligen bekräfta ditt köp");
	h2.appendChild(textNodeH2);
	
    var firstName = document.createElement('p');
	var textNodeFn = document.createTextNode("Förnamn: "+fn.value);
	firstName.appendChild(textNodeFn);
	
	var lastName = document.createElement('p');
	var textNodeLn = document.createTextNode("Efternamn: "+ln.value);
	lastName.appendChild(textNodeLn);
	
	var pPostCode = document.createElement('p');
	var textNodePc = document.createTextNode("Postnummer: "+postc.value);
	pPostCode.appendChild(textNodePc);
	
	var pEpost = document.createElement('p');
	var textNodeEp = document.createTextNode("E-post: "+epost.value);
	pEpost.appendChild(textNodeEp);
	
	var pPrism = document.createElement('p');
	var textNodePm = document.createTextNode("Prismodell: "+pricem.value);
	pPrism.appendChild(textNodePm);
	
	popup.appendChild(exitButton);
	popup.appendChild(h2);
    popup.appendChild(firstName);  
	popup.appendChild(lastName);
	popup.appendChild(pPostCode);
	popup.appendChild(pEpost);
	popup.appendChild(pPrism);
	popup.appendChild(cancel);
	popup.appendChild(confirm);
	
	
		   
    document.body.appendChild(popup);
	document.body.appendChild(mask);
	
}
	
	// -----Submit form----- //
	
	form.onsubmit = function (e) {
	//Form.submit.disabled = true;
	e.preventDefault(); 
	Form.init();   
	popUp(); 
	/*if (fn.value ===""|| fn.value === null || ln.value ==="" || ln.value === null){ 
	return false;}
	if (postc.value ==="" || postc.value=== null || Form.regexPostcode.test(postc.value) === false){ console.log("Ej ifyllt");
	return false;}
	if (epost.value ==="" || epost.value=== null || Form.regexEmail.test(epost.value) === false){ console.log("Ej ifyllt");
	return false;} */
	
	if (popUp()) { console.log("woop"); Form.submit.value = "Skickar...";
	return true;
	};
	
	
	//return false; }
	
	}; 
	};
	

//http://stackoverflow.com/questions/11542822/javascript-onclick-createelement-div-viz-popup-box