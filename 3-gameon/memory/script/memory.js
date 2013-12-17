"use strict";

window.onload = function() {

	
	
	var Memory= {
	div:document.querySelector(".brick"), 
	submit1:document.querySelector("#submit1"),
	submit2:document.querySelector("#submit2"),
	images: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', 
        '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'],
	imagesArr:[] , 
	init: function(value1,value2) {
	Memory.imagesArr = new RandomGenerator.getPictureArray(value1,value2);
	console.log(Memory.imagesArr);
	}
	}
	var ul = document.querySelector("#container ul");

	// ------------------------------------------------------------------------------

		Memory.submit1.addEventListener("click", function(e){
		e = e || window.event;
		e.preventDefault(); 
		Memory.init(2,4);
		var br = document.createElement("br");
	
		for(var i = 0; i < Memory.imagesArr.length; i+=1){ 
		if ( i === 4 || i === 8) 
		ul.appendChild(br);
		var li = document.createElement("li");
		var a = document.createElement("a");
		var img = document.createElement("img");
		var imgSrc = "pics/"+Memory.images[Memory.imagesArr[i]];
		console.log(Memory.imagesArr[i]);
		li.appendChild(a);
		a.appendChild(img);
		img.setAttribute("src", imgSrc);
		a.setAttribute("href", imgSrc);
		ul.appendChild(li);
		a.addEventListener("click", function(e){
		e = e || window.event;
		e.preventDefault(); 
		
		//console.log(hej);
		//console.log(valueOfa);
		});}
		Memory.submit1.disabled = true;
		
		});
		
		Memory.submit2.addEventListener("click", function(e){
		e = e || window.event;
		e.preventDefault(); 
		var imagesArr2 = RandomGenerator.getPictureArray(4,4);
		console.log(imagesArr2);
		});
		
		
		Memory.div.addEventListener("click", function(e){
		e = e || window.event;
		e.preventDefault(); 
		Memory.div.setAttribute("style", "background-image:url('pics/thauriel.jpg');");
	});
		
}
//http://stackoverflow.com/questions/15643842/createelement-inside-a-for-loop-just-replaces-created-item