var AjaxTester = {
	init:function()
	{			if (!NodeList.prototype.forEach) {
					NodeList.prototype.forEach = Array.prototype.forEach;
				};
	
				var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
				
				
				//var singeImageWindow = new singleImages(); 
					
					
				new AjaxCon(url, function(data){
					var jImages= JSON.parse(data);
					var containerPopUp = document.querySelector(".popupContent");
					var page = document.querySelector("#page");
					var maxWidth = 0;
					var thumbHeight = jImages[0].thumbHeight;
					
					
					for(var i = 0; i < jImages.length; i+=1){ 						
						if (jImages[i].thumbWidth > maxWidth){
						maxWidth = jImages[i].thumbWidth;
					}};
					
					var initUrls = function(n) {
						return function(e) {
							e = e || window.event; 
							e.preventDefault();
							page.style.backgroundImage = "url('" +jImages[n].URL +"')" ;
							
							/*singeImageWindow.render.init(2);
							var imgBigPopup = document.querySelector(".popup2");											
							var parentImg = document.querySelector("#content");
			
							var singleImgContent = document.querySelector(".popupContent2");
							var imgBig = document.createElement('img');
							imgBig.setAttribute("src", jImages[n].URL);
							singleImgContent.appendChild(imgBig);	 */
						};
					};
					var popupContent = document.createElement('div'); 
						popupContent.className = 'popupContent';
					var imagesWindow = new PopUpImages(); 
					
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
						popupContent.appendChild(a);
						};

						imagesWindow.render.init(popupContent);
	});
	}
};



