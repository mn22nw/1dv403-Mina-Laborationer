"use strict";

window.onload = function(){

	var icon1 = new Icon("pics/icon.png");
	icon1.createIcon();

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



};