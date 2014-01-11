var AjaxTester = {
	
	init:function()
	{
		
		document.getElementById("bilderna").onclick = function(e){
				console.log("hej");
				e.preventDefault();
				
				var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
				
				new AjaxCon(url, function(data){
				
					var jImages= JSON.parse(data);
					console.log(jImages[0].thumbURL);
					/*var tmpStr = "";
					for(var i in people){
						tmpStr += "<p>"+people[i].name+" är av typen "+people[i].type+"</p>";
					}*/
					container.innerHTML =jImages; 
				});
				
				return false;
			
		};
		
		console.log("hej");
	},
	
	onProductLinkClicked:function(e)
	{
		
		var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
		var container = document.getElementById("textId1");
		
		new AjaxCon(url, function(data){
			container.innerHTML = data;
		});
		
		return false;
	}

};
window.onload = AjaxTester.init;



