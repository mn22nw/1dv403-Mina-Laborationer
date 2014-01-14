"use strict";

function PopUpFoundation(width, height) {
	this.width = width;
	this.height = height;

};

PopUpFoundation.prototype.render = {

	init: function(content, classname, title, icon){ 

	//här skrivs popupfönstret ut och skapar elementen 
	var container = document.querySelector("#container");
	var page = document.querySelector("#page");

	// ---Popup--- //
    var popup = document.createElement('div');
    popup.className = 'popup'+ classname;
	
	//---Header---//
	 var header = document.createElement('div');
	 header.className = 'headerbar';	 
	  
	//---mini Icon---//
	 var smallIcon = document.createElement('img');
	 smallIcon.className = 'smallIcon';	
	//smallIcon.setAttribute("src", "pics/icon.png");
	smallIcon.setAttribute("src",( "pics/" + icon+ ".png"));
		
	//---Loadbar + loadicon---//
	var loadBar = document.createElement('div');
    loadBar.className = 'load';	
	
	 //---Title---//
	 var divTitle = document.createElement('div');
	 var title = document.createTextNode(title);
	 divTitle.className = 'titlePopup';	
	 divTitle.appendChild(title);
	//---Exit---//
    var exitButton = document.createElement('div');
    exitButton.className = 'exitButton';
    exitButton.onclick = function (e) { 
	popup.parentNode.removeChild(popup) 
	loadBar.parentNode.removeChild(loadBar) };	
	
	header.appendChild(smallIcon);
	header.appendChild(divTitle);
	header.appendChild(exitButton);
	popup.appendChild(header)
	popup.appendChild(content);
	popup.appendChild(loadBar);
	container.appendChild(popup);
	

	if ( popup.previousSibling != null && popup.previousSibling != undefined)
	
	
    var style = window.getComputedStyle(popup),
    top = style.getPropertyValue('top');
	if (top > "10px") console.log("hoio");
	
/*	if ( popup.style.top > 105) {
	console.log("29999999");
			popup.style.left = page.offsetLeft + 400 + "px";
			popup.style.top = page.offsetTop + 15 + "px";
		}
		
	if ( popup.previousSibling != null && popup.previousSibling != undefined) {
		var positionPopup = findPos(popup.previousSibling);

		popup.style.left = positionPopup[0] - page.offsetLeft + 5 + "px";
		popup.style.top = positionPopup[1] - page.offsetTop + 10 + "px";
		console.log ( popup.style.top);
		
		
	};*/
	
	//console.log(popup.offsetLeft);
	//popup.offsetLeft
	
	//HITTA POSITIONEN AV POPUP//
	function findPos(obj) {
		var curleft = 0;
		var curtop = 0;
		if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
			} while (obj = obj.offsetParent);
			return [curleft,curtop];
	}};
	
	//PLACERA DIV ÖVERST//
	var allPopups = document.querySelectorAll(".popup");
	var prev = false;

	for(var i=0; i <allPopups.length;i++) {
	  allPopups[i].addEventListener('click', function() {
		this.style.position = 'absolute'; 
		if(prev) { prev.style.zIndex = 1; }
		  this.style.zIndex = 1000;
		  prev = this;
			});
		  };
	
	
	
	// ÄNDRA STORLEK ETC //
	
	popup.addEventListener('mousedown', initDrag, false);    
//	header.addEventListener('mousedown', movePopUp, false);    
	
	
	function getElementTopLeft(id) {

    var ele = id;
    var top = 0;
    var left = 0;
   
    while(ele.tagName != "BODY") {
        top += ele.offsetTop;
        left += ele.offsetLeft;
        ele = ele.offsetParent;
    }
    return { top: top, left: left };
	}
	
	var topLeft = getElementTopLeft(popup);
	
	var  style = window.getComputedStyle(popup);
    var leftOfPopup = style.getPropertyValue('margin-left');

	popup.style.left = 5 +leftOfPopup;
	
	//console.log(TopLeft.top);
	 function movePopUp(e){
	   var cordx = topLeft.top;
	   var cordy = topLeft.left;
	   if (!e) {
		var e = window.event;
	   }
	//   if (e.pageX || e.pageY){
	//	cordx = e.pageX;
	//	cordy = e.pageY;
	//   }
	   if (e.clientX || e.clientY){
		cordx = e.clientX;
		cordy = e.clientY;
	   }
	
		popup.style.left = topLeft.left +"px";
		popup.style.top = topLeft.top +"px";
	  };
	
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
	}
	};

//Med denna kan jag skapa flera fönster ju (som en mall)och den ärver från popup foundation //
function PopUpImages () {   
	PopUpFoundation.call(this,300,400);
};

//PopUpImages ärver från PopUpFoundation
PopUpImages.prototype = new PopUpFoundation();

//lägg till nya funktioner på PopUp prototype
PopUpImages.prototype.ajaxCall = function(){
		AjaxTester.init();
};

// popup singleImages
function singleImages () {   
	PopUpFoundation.call(this,300,400);
};

singleImages.prototype = new PopUpFoundation();


function PopUpMemory () {   
	PopUpFoundation.call(this,300,400);
};

//PopUpMemory ärver från PopUpFoundation
PopUpMemory.prototype = new PopUpFoundation();

//lägg till nya funktioner på PopUp prototype
PopUpMemory.prototype.somethingsomething = function(){
		
			//någon mer egenskap kanske om det behövs?
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
	
	var onClick = function(e){
			e.preventDefault();
			window();
			}
	
	icon.addEventListener("click", onClick, false );
			
	icon.className = "icon";
	taskbar.appendChild(icon);


};