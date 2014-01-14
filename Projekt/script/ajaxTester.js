var AjaxTester = {
	init:function()
	{			if (!NodeList.prototype.forEach) {
					NodeList.prototype.forEach = Array.prototype.forEach;
				};
	
				var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
				
				
				var singeImageWindow = new singleImages(); 
			
				var taskbar= document.querySelector('#taskbar');	
				var coverIcon = document.createElement("div");
				coverIcon.className = "coverIcon";
				taskbar.appendChild(coverIcon);
				
				new AjaxCon(url, function(data){
					
					var jImages= JSON.parse(data);
					console.log(jImages);
					var containerPopUp = document.querySelector(".popupContent");
					var page = document.querySelector("#page");
					var maxWidth = 0;
					var thumbHeight = jImages[0].thumbHeight; //dethär måste jag ändra
					
					
					for(var i = 0; i < jImages.length; i+=1){ 						
						if (jImages[i].thumbWidth > maxWidth){
						maxWidth = jImages[i].thumbWidth;
					}};
					
					var initUrls = function(n) {
						return function(e) {
							e = e || window.event; 
							e.preventDefault();
							page.style.backgroundImage = "url('" +jImages[n].URL +"')" ;
							
							var imgBig = document.createElement('img');
								imgBig.setAttribute("src", jImages[n].URL);	
								imgBig.className = "imgBig";
							singeImageWindow.render.init(imgBig, "bildvisare", "Image Viewer", "small_icon1");
							var setSizeWindow = document.querySelector(".popupbildvisare");
							console.log(jImages[n].height);
							if(jImages[n].height > 400) {
								setSizeWindow.style.width =	"225px";
								setSizeWindow.style.minWidth ="225px";
								setSizeWindow.style.maxWidth ="225px";
								
								};
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

						imagesWindow.render.init(popupContent, "ajax", "Image Viewer","small_icon1");
						coverIcon.style.visibility = "hidden";
	});
	}
};



