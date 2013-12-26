"use strict";

window.onload = function() {

	if (!NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
	}
	
	
	
	//st.replaceAll("\\s+","")
	
	var Form = {
	formId:document.querySelector("#theForm"),
	errorFn:document.querySelector(".errorm #error1"),
	errorLn:document.querySelector(".errorm #error2"),
	errorPostc:document.querySelector(".errorm #error3"),
	errorEpost:document.querySelector(".errorm #error4"),
	errorPricem:document.querySelector(".errorm #error5"),
	idArray:[],
	init: function(value1,value2) {
	}};
	
	var postCodeReg = /^(\d{3})-(\d{2})$/;//funkar!
	var postCodeReg2 =  /^\d{5}$/;   //funkar!
	var form = Form.formId;
	var fn = form.elements["0"];
	var ln = form.elements["1"];
	var postc = form.elements["2"];
	var epost = form.elements["3"];
	var pricem = form.elements["4"];
	pricem.style.visibility= "hidden";
	// fn.style.visibility= "hidden"; //tar bort första elementet
	fn.focus();
	
	/*var str = "Hello world!";
	var res = str.slice(1,5);*/
	Form.errorFn.innerHTML = "Detta fält får inte <br />lämnas tomt!";
	form.onsubmit = function (e) {
	if(postCodeReg.test(postc.value) ===false){
	if(postCodeReg2.test(postc.value) === true){
	var pcArray = postc.value.split("");
	postc.value = (pcArray[0]+pcArray[1]+pcArray[2]+"-"+pcArray[3]+pcArray[4]);
	}
	else console.log(postc.value);
	}
	//submit.disabled = true;	
	return false;
	};
	
	//score.innerHTML = "Poäng: ";
	// ------------------------------------------------------------------------------
		/*Memory.submit1.addEventListener("click", function(e){
		e = e || window.event;
		e.preventDefault(); 
		window.scrollTo(0,500);
		Memory.submit1.disabled = true;	
		Memory.submit2.disabled = false;
		generateBricks(2,4);
		});
		
		Memory.submit2.addEventListener("click", function(e){
		e = e || window.event;
		e.preventDefault(); 
		window.scrollTo(0,500);
		Memory.submit2.disabled = true;	
		Memory.submit1.disabled = false;	
		generateBricks(4,4);
		});
		
		function generateBricks(rows,cols){
		score.innerHTML = "Poäng: ";
		Memory.init(rows,cols);
		tries.innerHTML ="";
		ul.innerHTML ="";
		var br = document.createElement("br");
		
		for(var i = 0; i < Memory.imagesArr.length; i+=1){ 

		if ( i === 4 || i === 8 || i === 12 ) {
		ul.appendChild(br);}
		
		var li = document.createElement("li");
		var a = document.createElement("a");
		var img = document.createElement("img");
		img.setAttribute("src", "pics/qm.jpg");		
		a.appendChild(img);	
		li.appendChild(a);
		a.setAttribute("data-id", Memory.imagesArr[i]);
		a.setAttribute('href', "#");
		ul.appendChild(li);
		} //här slutar for-loopen
				
		var atags = document.querySelectorAll("#container ul a");
		console.log(atags);
		var countTries = 0;
		var countScore = 0;
		var initAtags = function(n) {
				return n;
			};

		for (var i = 0; i < atags.length; i+=1){
		atags[i] = initAtags(i);	
		var countingBricks = 0;
		
		atags[i].addEventListener("click", function(e){
		e = e || window.event;
		console.log("hej");
		e.preventDefault();  
		flipBadge(e.target); //verkar inte fungera med e.target?
		Memory.idArray.push(e.target.parentNode.getAttribute("data-id"));
		countingBricks +=1;
		if (countingBricks === 2){ 
		compareBricks(e.target); Memory.idArray.length = 0;
		countingBricks = 0;}
		});
		//FUNKAR INTE MED ENTER?!
		/*atags[i].addEventListener("click", function(e) {
		var key = e.which || e.keyCode;
		if (key === 13)  console.log("Hey there");
		e = e || window.event; 
		e.preventDefault();  
		flipBadge(e.target);
		Memory.idArray.push(e.target.parentNode.getAttribute("data-id"));
		countingBricks +=1;
		if (countingBricks === 2){ 
		compareBricks(e.target); Memory.idArray.length = 0;
		countingBricks = 0;}}
		});*/ };

//http://stackoverflow.com/questions/15643842/createelement-inside-a-for-loop-just-replaces-created-item