"use strict";
window.onload = function() {

	// skapar namnrymd (tomt objekt som man fyller på med funktioner man vill nyttja)	
	var WEBDESK = WEBDESK || {};
	
	WEBDESK.util = WEBDESK.util || {};
	
	WEBDESK.util.renderPopUpImages = function() { 

			AjaxTester.init();
		
	};
	
	WEBDESK.util.renderMemory= function() { 
			var memoryWindow = new PopUpMemory(); 
			var content = document.createElement("div");
			content.className = "memory";
			memoryWindow.render.init(content, "Memory", "Memory", "small_icon2");
	};	
		
	//skapar ikonen och tar bakgrundsbilden som ikonbild + startar fönsterfunktionen!
	WEBDESK.util.renderIcon = function(url, windowProperty ) {   
			var icon1 = new Icon(); 
			icon1.createIcon(url, windowProperty);					
	};
	
	WEBDESK.util.renderIcon("pics/icon.png", WEBDESK.util.renderPopUpImages); 
	WEBDESK.util.renderIcon("pics/icon2.png",WEBDESK.util.renderMemory);
	  
};
