"use strict";
window.onload = function() {

	function changeBackground(url) {   //kanske byt placering p� denna d�r�
	this.style.backgroundImage = url;	
	}
	// skapar namnrymd (tomt objekt som man fyller p� med funktioner man vill nyttja)	
	var WEBDESK = WEBDESK || {};
	
	WEBDESK.util = WEBDESK.util || {};
	
	WEBDESK.util.renderPopUpImages = function() { 
			AjaxTester.init();
			var imagesWindow = new PopUpImages(); 
			//imagesWindow.ajaxCall();
			imagesWindow.render();
	};
	
	//skapar ikonen och tar bakgrundsbilden som ikonbild + startar f�nsterfunktionen!
	WEBDESK.util.renderIcon = function(url, windowProperty ) {   
	
			var icon1 = new Icon(); 
			icon1.createIcon(url, windowProperty);					
	};
	
	WEBDESK.util.renderIcon("pics/icon.png", WEBDESK.util.renderPopUpImages ); 
	WEBDESK.util.renderIcon("pics/icon2.png",WEBDESK.util.renderPopUpImages  );
	  
	
};
