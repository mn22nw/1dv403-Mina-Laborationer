var AjaxTester = {
	
	init:function()
	{

				console.log("gotty");
				var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
				
				new AjaxCon(url, function(data){
				
					var jImages= JSON.parse(data);
					console.log(jImages[0].thumbURL);
					/*var tmpStr = "";
					for(var i in people){
						tmpStr += "<p>"+people[i].name+" är av typen "+people[i].type+"</p>";
					}*/
					var container = document.querySelector(".popupContent");
					container.innerHTML =jImages; 
				});
				
	
			
	
	},
	
	onProductLinkClicked:function(e)
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



