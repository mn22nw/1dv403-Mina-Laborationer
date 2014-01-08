"use strict";

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
	 
	 
	//---mini Icon---//
	 var smallIcon = document.createElement('div');
	 smallIcon.className = 'smallIcon';	
	
	//---Loadbar---//
	var loadBar = document.createElement('div');
    loadBar.className = 'load';
	
	
	//---Exit---//
    var exitButton = document.createElement('div');
    exitButton.className = 'exitButton';
    exitButton.onclick = function (e) { 
	popup.parentNode.removeChild(popup) 
	loadBar.parentNode.removeChild(loadBar) };	
	
	header.appendChild(exitButton);
	popup.appendChild(header)
	popup.appendChild(loadBar);
	container.appendChild(popup);
	
	
		//var popup = document.querySelector('.window'); // element to make resizable
		//var div = document.querySelector('.window');

	popup.addEventListener('mousedown', initDrag, false);    


	var startX, startY, startWidth, startHeight;

	function initDrag(e) {
	   startX = e.clientX;
	   startY = e.clientY;
	   startWidth = parseInt(document.defaultView.getComputedStyle(popup).width, 10);
	   startHeight = parseInt(document.defaultView.getComputedStyle(popup).height, 10);
	   document.documentElement.addEventListener('mousemove', doDrag, false);
	   document.documentElement.addEventListener('mouseup', stopDrag, false);
	};

		function doDrag(e) {
		   popup.style.width = (startWidth + e.clientX - startX) + 'px';
		   popup.style.height = (startHeight + e.clientY - startY) + 'px';
		};

		function stopDrag(e) {
			document.documentElement.removeEventListener('mousemove', doDrag, false);
			document.documentElement.removeEventListener('mouseup', stopDrag, false);
		};

			
	} ;

//Med denna kan jag skapa flera fönster ju (som en mall)och den ärver från popup foundation //
function PopUpImages () {   
	PopUpFoundation.call(this,300,400);
	console.log("haj");
};

//PopUp ärver från PopUpFoundation
PopUpImages.prototype = new PopUpFoundation();

//lägg till nya funktioner på PopUp prototype
PopUpImages.prototype.somethingsomething = function(){
// om den behöver ha egna egenskaper
};


	function Icon (url)
{
this.getUrl = function () { return url; };
this.setUrl = function (_url) { url = _url; };

this.setUrl(url);
};
 
Icon.prototype.createIcon = function(url, window) {
	var taskbar = document.querySelector('#taskbar');
	var icon = document.createElement('a');
	icon.setAttribute("href", "#");

	icon.style.backgroundImage=	"url('" + url +"')" ;
	
	icon.addEventListener("click", function(e){
			e.preventDefault();
			window();
			//changeBackground.call(desktop,"url('pics/taskbar.jpg')"); 
			});
			
	icon.className = "icon";
	taskbar.appendChild(icon);
	var desktop = document.querySelector("#page");


};