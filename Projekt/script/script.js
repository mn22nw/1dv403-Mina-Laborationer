"use strict";
window.onload = function() {

	// skapar namnrymd (tomt objekt som man fyller p� med funktioner man vill nyttja)	
	var WEBDESK = WEBDESK || {};
	
	WEBDESK.util = WEBDESK.util || {};
	
	WEBDESK.util.renderPopUpImages = function() { 
			
			//var btn=document.createTextNode("Hello World");
			AjaxTester.init();
		
	};
	
	WEBDESK.util.renderMemory= function() { 
			var memoryWindow = new PopUpMemory(); 
			memoryWindow.render();
	};	
		
	//skapar ikonen och tar bakgrundsbilden som ikonbild + startar f�nsterfunktionen!
	WEBDESK.util.renderIcon = function(url, windowProperty, id ) {   
			var icon1 = new Icon(); 
			icon1.createIcon(url, windowProperty, id);					
	};
	
	WEBDESK.util.renderIcon("pics/icon.png", WEBDESK.util.renderPopUpImages, "pictures"); 
	WEBDESK.util.renderIcon("pics/icon2.png",WEBDESK.util.renderMemory);
	  
};
