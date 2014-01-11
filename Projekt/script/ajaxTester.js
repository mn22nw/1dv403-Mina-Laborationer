var AjaxTester = {
	
	init:function()
	{

				console.log("gotty");
				var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
				
				new AjaxCon(url, function(data){
				
					var jImages= JSON.parse(data);
					var container = document.querySelector(".popupContent");
					var maxWidth = 0;
					console.log(jImages);
					
					
					for(var i = 0; i < jImages.length; i+=1){ 	
					
						if (jImages[i].thumbWidth > maxWidth){
						maxWidth = jImages[i].thumbWidth;
					}};
					
					console.log(maxWidth);
					
					for(var i in jImages){
						var tumbNailBox = document.createElement('div');
						tumbNailBox.className = 'tumbNailBox';	
						
						var tumbNailImg = document.createElement('img');
						tumbNailImg.className = "tumbNailImg";
						tumbNailImg.setAttribute("src", jImages[i].thumbURL);		
						tumbNailBox.appendChild(tumbNailImg);
						container.appendChild(tumbNailBox);
					}
					
				});
				
	
			
	
	},
	
	onTumbnailClicked:function(e)
	{
		//Kanske bakgrund här? hmmm
	/*	var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
		var container = document.getElementById("textId1");
		
		new AjaxCon(url, function(data){
			container.innerHTML = data;
		});
		
		return false;*/
	} 

};
window.onload = AjaxTester.init;



