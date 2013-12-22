﻿"use strict";

window.onload = function() {

	if (!NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
	}
	
	var Memory= {
	submit1:document.querySelector("#submit1"),
	submit2:document.querySelector("#submit2"),
	idArray:[],
	imagesArr:[], 
	flippedImages:[],
	init: function(value1,value2) {
	Memory.imagesArr = new RandomGenerator.getPictureArray(value1,value2);
	}
	};
	var ul = document.querySelector("#container ul");
	var score = document.querySelector("#container #score"); 
	var tries = document.querySelector("#container #tries");
	var mask = document.querySelector("#container #mask");
	score.innerHTML = "Poäng: ";
	// ------------------------------------------------------------------------------
		Memory.submit1.addEventListener("click", function(e){
		e = e || window.event;
		e.preventDefault(); 
		Memory.init(2,4);
		Memory.submit1.disabled = true;	
		tries.innerHTML ="";
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
		a.setAttribute("href","");
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
		e.preventDefault();  
		flipBadge(e.target);
		Memory.idArray.push(e.target.parentNode.getAttribute("data-id"));
		countingBricks +=1;
		if (countingBricks === 2){ 
		compareBricks(e.target); Memory.idArray.length = 0;
		countingBricks = 0;}
		});
		
		atags[i].addEventListener("keypress", function(e) {
		var key = e.which || e.keyCode;
		if (key === 13) { console.log("hej hej");
		e = e || window.event; 
		e.preventDefault();  
		flipBadge(e.target);
		Memory.idArray.push(e.target.parentNode.getAttribute("data-id"));
		countingBricks +=1;
		if (countingBricks === 2){ 
		compareBricks(e.target); Memory.idArray.length = 0;
		countingBricks = 0;}}
		}); }
		
		function compareBricks(target){
		
		if (Memory.idArray[0] === Memory.idArray[1]){
		Memory.flippedImages.length = 0;
		score.innerHTML = "Poäng: " +(countScore +=1); }
		if (countScore === 4) { 
		ul.innerHTML ="";
		tries.innerHTML = "SPELET ÄR KLART! <br /> <br />Du behövde " + (countTries +1)+" försök";
		Memory.submit1.disabled = false;	
		}
		
		if (Memory.idArray[0] !== Memory.idArray[1]){
		mask.style.visibility= "visible";
		setTimeout (function() {
		Memory.flippedImages[0].setAttribute("src", "pics/qm.jpg");	
		Memory.flippedImages[1].setAttribute("src", "pics/qm.jpg");	
		Memory.flippedImages.splice(0, 2);
		}, 1000);
		setTimeout (function() {
		mask.style.visibility= "hidden";
		}, 1000);
		}
		
		countTries += 1;
		};
		
		
		function flipBadge(target){ 
		Memory.flippedImages.push(target);
		target.setAttribute("src", "pics/"+target.parentNode.getAttribute("data-id")+".jpg");
		};
		
		
			
		});
		
		Memory.submit2.addEventListener("click", function(e){
		e = e || window.event;
		e.preventDefault(); 
		var imagesArr2 = RandomGenerator.getPictureArray(4,4);
		console.log(imagesArr2);
		});
			
}
//http://stackoverflow.com/questions/15643842/createelement-inside-a-for-loop-just-replaces-created-item