"use strict";

window.onload = function() {

	if (!NodeList.prototype.forEach) {
		NodeList.prototype.forEach = Array.prototype.forEach;
		}
	
	var Form = {
		formId:document.querySelector("#theForm"),
		errorArray:document.querySelectorAll(".errorm"),
		submit:document.querySelector("#submitknapp"),
		regexStr: /^[a-zåäö]{1,120}$/i,
		regexEmail: /^[0-9a-z._-]{1,64}@[a-z]{1,}?\.[a-z]{2,}$/im,
		regexPostcode:/^\w{0,2}\s{0,1}\d{3,3}-{0,1}\s{0,1}\d{2,2}$/,
		regexFixPostcode:/^\d{5}$/,
		init:function() {
			Form.submit.disabled = true;
			var counting = 0;
			var form = Form.formId.elements;
			form[0].focus();  
			

			var validateForm = function(n) {

				var matchString = function isStringMatch(str, strToMatch){
				var indexString = str.indexOf(strToMatch); 
				 return indexString;
				};
				
				form[n].onblur = function () {	 
						var fieldName =  this.getAttribute("name");
						var checkName = matchString( fieldName.toLowerCase(), "namn");
						var checkEmail = matchString(fieldName.toLowerCase(), "email");
						var checkPostcode = matchString(fieldName.toLowerCase(), "post");
						var regexValue;
				
						errorm.textContent ="";
						
						if (this.value ===""|| this.value === null){  //om formfält är tomt
							var textNode1 = document.createTextNode("Detta fält får inte lämnas tomt!");
							errorm.appendChild(textNode1);
							Form.errorArray[n].appendChild(errorm);	
						};
						
						if (checkName >= 0) {
							regexValue = Form.regexStr.test(this.value);
						}
						
						if (checkEmail >= 0) {
							regexValue = Form.regexEmail.test(this.value);}
						
						if (checkPostcode >= 0) {
							regexValue = Form.regexPostcode.test(this.value);}
						
						if (this.value !=="" && this.value!== null && regexValue === false){
							errorm.textContent ="";
							var textNode2 = document.createTextNode("Du måste ange ett korrekt " + fieldName.toLowerCase());
							errorm.appendChild(textNode2);
							Form.errorArray[n].appendChild(errorm);	
						};
						if (regexValue === true) {
							counting += 1; console.log(counting);
						}
						if (counting >3){
							Form.submit.disabled = false;
						}
					};
			};
			
				for (var i=0; i<form.length-2; i+=1) {   
				var errorm = document.createElement("p");
				form[i].onfocus = function () {
					this.select(); 
				}
				var validate = validateForm(i);
			};
			
			
		
		},
		popUp: function (){ console.log("hej");
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
				mask.parentNode.removeChild(mask)
				Form.submit.value = "Genomför Köp";
				};
		
					//---Cancel---//
			var cancel = document.createElement('div');
			cancel.id = 'cancel';
			var textNodeCancel = document.createTextNode("Avbryt");
			var pCancel = document.createElement('p');
			pCancel.appendChild(textNodeCancel);
			cancel.appendChild(pCancel);
			cancel.onclick = function (e) { popup.parentNode.removeChild(popup) 
				mask.parentNode.removeChild(mask)
				Form.submit.value = "Genomför Köp";
			};
				
					//--Confirm--//
			
			var confirm = document.createElement('div');
			confirm.id = 'confirm';
			var textNodeConfirm = document.createTextNode("Genomför köp");
			var pConfirm = document.createElement('p');
			pConfirm.appendChild(textNodeConfirm);
			confirm.appendChild(pConfirm);
			
		
			var h2= document.createElement('h2');
			var textNodeH2 = document.createTextNode("Vänligen bekräfta ditt köp");
			h2.appendChild(textNodeH2);
			
			var firstName = document.createElement('p');
			var textNodeFn = document.createTextNode("Förnamn: "+ Form.formId.elements[0].value);
			firstName.appendChild(textNodeFn);
			
			var lastName = document.createElement('p');
			var textNodeLn = document.createTextNode("Efternamn: "+ Form.formId.elements[1].value);
			lastName.appendChild(textNodeLn);
			
			var pPostCode = document.createElement('p');
			var textNodePc = document.createTextNode("Postnummer: "+Form.formId.elements[2].value);
			pPostCode.appendChild(textNodePc);
			
			var pEpost = document.createElement('p');
			var textNodeEp = document.createTextNode("E-post: "+Form.formId.elements[3].value);
			pEpost.appendChild(textNodeEp);
			
			var pPrism = document.createElement('p');
			var textNodePm = document.createTextNode("Prismodell: "+Form.formId.elements[4].value);
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
			console.log("poppo"); 
		
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
	
	Form.init();
	
	Form.formId.onsubmit = function (e) {
		e.preventDefault(); 
		Form.submit.value = "Skickar...";
		var popUpWindow = Form.popUp();
		var confirmButton = document.getElementById("confirm");
		confirmButton.onclick = function (e) {    // popup.parentNode.removeChild(popup); 
			Form.formId.submit();
		}; 	
	};
	};
