"use strict";

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
		window.scrollTo(0,300);
		Memory.submit1.disabled = true;	
		Memory.submit2.disabled = false;
		generateBricks(2,4);
		});
		
		Memory.submit2.addEventListener("click", function(e){
		e = e || window.event;
		e.preventDefault(); 
		window.scrollTo(0,350);
		Memory.submit2.disabled = true;	
		Memory.submit1.disabled = false;	
		generateBricks(4,4);
		});
		
		function generateBricks(rows,cols){
		score.innerHTML = "Poäng: ";
		Memory.init(rows,cols);
		tries.innerHTML ="";
		ul.innerHTML ="";
		
		
		for(var i = 0; i < Memory.imagesArr.length; i+=1){ 
		
		var li = document.createElement("li");
		var a = document.createElement("a");
		var img = document.createElement("img");
		img.setAttribute("src", "pics/qm.jpg");		
		a.appendChild(img);	
		li.appendChild(a);
		a.setAttribute("data-id", Memory.imagesArr[i]);
		a.href = "#";
		ul.appendChild(li);
		} //här slutar for-loopen
				
		var atags = document.querySelectorAll("#container ul a");  // array med a-taggarna
		var countTries = 0; 
		var countScore = 0;
		var initAtags = function(n) {
				return n;
			};
	//NodeList doesn't have an indexed property setter. ??
		for (var i = 0; i < atags.length; i+=1){
		atags[i] = initAtags(i);	
		var countingBricks = 0;
		};		
		atags.forEach( function (a) {	 
		a.addEventListener("click", function(e){
		e = e || window.event; 
		e.preventDefault();
		console.log(a.firstChild);
		flipBadge(a.firstChild); //verkar inte fungera med e.target?
		Memory.idArray.push(e.target.parentNode.getAttribute("data-id"));
		countingBricks +=1;
		if (countingBricks === 2){ 
		compareBricks(a.firstChild); Memory.idArray.length = 0;
		countingBricks = 0;}
		});
		  
		a.addEventListener("click", function(e) {
		var key = e.which || e.keyCode;
		if (key !== 13)  console.log("Hey there");
		var x = 0;
		if(e.keyCode == 38)
         x = -1; 
		 
		else if(e.keyCode == 40)
         x = 1;
		});
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
		});*/ 
		
		function compareBricks(target){
		
		if (Memory.idArray[0] === Memory.idArray[1]){
		Memory.flippedImages.length = 0;
		score.innerHTML = "Poäng: " +(countScore +=1); }
		setTimeout (function() {
		if ((countScore === 4 && rows === 2) || (countScore === 8 && rows === 4)) { 
		window.scrollTo(0,100);
		ul.innerHTML ="";
		tries.innerHTML = "SPELET ÄR KLART! <br /> <br />Du behövde " + (countTries +1)+" försök";
		Memory.submit1.disabled = false;	
		Memory.submit2.disabled = false;	
		}},500);
		
		if (Memory.idArray[0] !== Memory.idArray[1]){
		mask.style.visibility= "visible";
		setTimeout (function() {
		Memory.flippedImages[0].setAttribute("src", "pics/qm.jpg");	
		Memory.flippedImages[1].setAttribute("src", "pics/qm.jpg");	
		Memory.flippedImages.splice(0, 2);
		}, 1000);
		setTimeout (function() {
		mask.style.visibility= "hidden";
		}, 1000); }		
		countTries += 1;
		};
			
		function flipBadge(target){ 
		Memory.flippedImages.push(target);
		target.setAttribute("src", "pics/"+target.parentNode.getAttribute("data-id")+".jpg");
		}; 
		
		};
			
}
//http://stackoverflow.com/questions/15643842/createelement-inside-a-for-loop-just-replaces-created-item