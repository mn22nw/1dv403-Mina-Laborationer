"use strict";
window.onload = function() {

	function changeBackground(url) {   //kanske byt placering på denna dårå
		this.style.backgroundImage = url;	
	}
	// skapar namnrymd (tomt objekt som man fyller på med funktioner man vill nyttja)
	var WEBDESK = WEBDESK || {};
	
	WEBDESK.util = WEBDESK.util || {};
	
	WEBDESK.util.popUpImg = Icon.prototype.createIcon();
	
	var windowMaker = {
		run: function() { 
		var icon1 = new Icon("pics/icon.png");
		icon1.createIcon();
	
	WEBDESK.util.popUpImg();
	
	
		var popUpWindow = document.querySelector('#window'); // element to make resizable
		var div = document.querySelector('#window');

	popUpWindow.addEventListener('click', function init() {
	/*p.removeEventListener('click', init, false);
    p.className = p.className + ' resizable';
    var resizer = document.createElement('div');
    resizer.className = 'resizer';
    p.appendChild(resizer);*/
    popUpWindow.addEventListener('mousedown', initDrag, false);    //måste ske direkt på mousedown!!
	}, false);

	var startX, startY, startWidth, startHeight;

	function initDrag(e) {
	   startX = e.clientX;
	   startY = e.clientY;
	   startWidth = parseInt(document.defaultView.getComputedStyle(popUpWindow).width, 10);
	   startHeight = parseInt(document.defaultView.getComputedStyle(popUpWindow).height, 10);
	   document.documentElement.addEventListener('mousemove', doDrag, false);
	   document.documentElement.addEventListener('mouseup', stopDrag, false);
	}

function doDrag(e) {
   popUpWindow.style.width = (startWidth + e.clientX - startX) + 'px';
   popUpWindow.style.height = (startHeight + e.clientY - startY) + 'px';
}

function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
}

		} 
			
	} 
	  
	
};
