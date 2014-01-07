"use strict";

	function Icon (url)
{
this.getUrl = function () { return url; };
this.setUrl = function (_url) { url = _url; };

this.setUrl(url);
};
 
Icon.prototype.createIcon = function() {

	var taskbar = document.querySelector('#taskbar');
	var icon = document.createElement('a');
	icon.setAttribute("href", "#");
	icon.addEventListener("click", function(e){
	e.preventDefault();
	//changeBackground.call(desktop,"url('pics/taskbar.jpg')"); 
	});
	icon.className = "icon";
	taskbar.appendChild(icon);
	var desktop = document.querySelector("#page");


};

function PopUpFoundation(width, height) {
	this.width = width;
	this.height = height;

};

PopUpFoundation.prototype.render = function(){

	//här skrivs popupfönstret ut och skapar elementen 
	var container = document.querySelector("#container");
	
	// ---Popup--- //
    var popup = document.createElement('div');
    popup.className = 'popup';
	popup.style.width = this.width; 
	popup.style.height = this.height; 
	console.log(popup.style.height);
	
	//---Header---//
	 var header = document.createElement('div');
	 header.className = 'headerbar';	 
	
	//---Loadbar---//
	var loadBar = document.createElement('div');
    loadBar.className = 'load';
	
	
	//---Exit---//
    var exitButton = document.createElement('div');
    exitButton.className = 'exitButton';
    exitButton.onclick = function (e) { 
	popup.parentNode.removeChild(popup) 
	loadBar.parentNode.removeChild(loadBar) };	
	
	
	popup.appendChild(exitButton);
	popup.appendChild(loadBar);
	container.appendChild(popup);
};



//Med denna kan jag skapa flera fönster ju (som en mall)och den ärver från popup foundation //
function PopUpImages () {   
	PopUpFoundation.call(this,300,400);
};

//PopUp ärver från PopUpFoundation
PopUpImages.prototype = new PopUpFoundation();

//lägg till nya funktioner på PopUp prototype
PopUpImages.prototype.somethingsomething = function(){
// om den behöver ha egna egenskaper
};
