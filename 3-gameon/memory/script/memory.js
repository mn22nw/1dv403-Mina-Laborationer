"use strict";

window.onload = function() {

	
	
	var Memory= {
	div:document.querySelector(".brick"), 
	submit1:document.querySelector("#submit1"),
	submit2:document.querySelector("#submit2"),
	images: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', 
        '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'],
	imagesArr: new RandomGenerator.getPictureArray(4,4), 
	init: function(e) {
	var board = new RandomGenerator.getPictureArray(4,4);
	Memory.imagesArr.push(board);
	},

	}
	var ul = document.querySelector("#container ul");
	
	
	
	

	// ------------------------------------------------------------------------------

		Memory.submit1.addEventListener("click", function(e){
		e = e || window.event;
		e.preventDefault(); 
		var imagesArr = RandomGenerator.getPictureArray(2,4);
		var br = document.createElement("br");
		
		for(var i = 0; i < imagesArr.length; i+=1){ 
		if ( i === 4) 
		ul.appendChild(br);
		var li = document.createElement("li");
		var a = document.createElement("a");
		var img = document.createElement("img");
		var imgSrc = "pics/"+Memory.images[i];
		li.appendChild(a);
		a.appendChild(img);
		img.setAttribute("src", imgSrc);
		//a.setAttribute("href", "http://www.google.se");
		ul.appendChild(li);}
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