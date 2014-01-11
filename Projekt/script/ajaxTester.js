var AjaxTester = {
	
	init:function()
	{			if (!NodeList.prototype.forEach) {
					NodeList.prototype.forEach = Array.prototype.forEach;
				};
	
				var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";

				new AjaxCon(url, function(data){
				
					var jImages= JSON.parse(data);
					var containerPopUp = document.querySelector(".popupContent");
					var page = document.querySelector("#page");
					var maxWidth = 0;
					var thumbHeight = jImages[0].thumbHeight;
					console.log(jImages);
					
					
					for(var i = 0; i < jImages.length; i+=1){ 						
						if (jImages[i].thumbWidth > maxWidth){
						maxWidth = jImages[i].thumbWidth;
					}};
					
					var initUrls = function(n) {
						return function(e) {
							e = e || window.event; 
							e.preventDefault();
							page.style.backgroundImage = "url('" +jImages[n].URL +"')" ;
						};
					};
					
					for(var i in jImages){
						var tumbNailBox = document.createElement('div');
						tumbNailBox.className = 'tumbNailBox';	
						tumbNailBox.style.width = maxWidth +"px";
						tumbNailBox.style.height =thumbHeight +"px";
						imgURL = initUrls(i);
						var a = document.createElement('a');
						a.className = "atag";
						a.href = "#";
						
						a.addEventListener("click", imgURL , false);	

						var tumbNailImg = document.createElement('img');
						tumbNailImg.className = "tumbNailImg";
						tumbNailImg.setAttribute("src", jImages[i].thumbURL);		
						tumbNailBox.appendChild(tumbNailImg);
						a.appendChild(tumbNailBox);
						containerPopUp.appendChild(a);
					};	
					
					// var atags = document.querySelectorAll(".popup a");  // array med a-taggarna
			
				});
	}
};
window.onload = AjaxTester.init;



