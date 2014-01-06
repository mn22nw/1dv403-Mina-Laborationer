"use strict";

	function Icon (url)
{
this.getUrl = function () { return url; };
this.setUrl = function (_url) { url = _url; };

this.setUrl(url);
};
 
Icon.prototype.createIcon = function() {

	var taskbar = document.querySelector('#taskbar');
	var icon = document.createElement('div');
	//var img = 	document.createElement("img");
	//img.setAttribute("src", "pics/icon1.png");	
	icon.className = "icon";
	//icon.appendChild(img);
	taskbar.appendChild(icon);
	

};
