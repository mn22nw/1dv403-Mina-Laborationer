"use strict";

window.onload = function() {

	
	
	var MessageBoard = {
	div:document.querySelector("#displayMessages"), 
	submit:document.querySelector("#send"),
	input:document.querySelector("#text"),
	countMessages:document.querySelector("#countMessages"),
	countMessages.innerHTML = "Antal meddelanden"+": "+ 0;
	messages: [], 
	init: function(e) {
	var mess = new Message (e, new Date());
	MessageBoard.messages.push(mess);
	},
	
	renderMessage: function(messageID) {
		var messageDiv = document.createElement("div");
		var exitSquare = document.createElement("div");
		var clock = document.createElement("div");
		var text = document.createElement("p");
		var date = document.createElement("p");
		exitSquare.className = 'exitSquare1';
		messageDiv.className = 'displayMessage';
		clock.className = 'clock';
		text.className = 'messageText';
		date.className ='messageDate';
		text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
		date.innerHTML = MessageBoard.messages[messageID].getDateText();
		div.appendChild(messageDiv);
		messageDiv.appendChild(exitSquare);
		messageDiv.appendChild(clock);
		messageDiv.appendChild(text);
		messageDiv.appendChild(date); 
		exitSquare.addEventListener("click", function(){ 
		if(confirm("Är du säker på att du vill ta bort meddelandet?")){
		MessageBoard.removeMessage(messageID);}});
		clock.addEventListener("click", function(){ 
		alert("Inlägget skapades den " +  MessageBoard.messages[messageID].getDateMessage()+" klockan " +MessageBoard.messages[messageID].getDateText());});
		},
		
	renderMessages: function() {
	// Ta bort alla meddelanden
	document.getElementById("displayMessages").innerHTML = "";
	document.getElementById("text").value = "";
	var numberOfMessages = 0;
	// Rendera alla meddelanden
	MessageBoard.messages.forEach(function() {
	MessageBoard.renderMessage(numberOfMessages++);
	});
	countMessages.innerHTML = "Antal meddelanden"+": "+numberOfMessages;
	},
	removeMessage: function(messageID) {
	MessageBoard.messages.splice(messageID, 1);
	MessageBoard.renderMessages();
	}
	}
	

	// ------------------------------------------------------------------------------

		submit.addEventListener("click", function(e){
		e.preventDefault(); 
		if (input.value.length > 0)
		runProgram();
	});
		input.onkeydown = function (e) {
		e = e || window.event;
		var keyCode = e.keyCode || e.which;
		if(keyCode==13 && e.shiftKey) { 
		console.log("jodå"); }
		if (input.value.length > 0) {
		if(keyCode==13 && !e.shiftKey) { 
		runProgram();} }}
	
	var runProgram = function()  {
	Messageboard.div.innerHTML = "";
	var answer = MessageBoard.init(input.value); 
	MessageBoard.renderMessages();
	}
}