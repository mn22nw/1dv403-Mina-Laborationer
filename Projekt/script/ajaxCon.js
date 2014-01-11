  function AjaxCon(url, callback){
	var READY_STATE_UNINITIALIZED = 0;
	var READY_STATE_OPENED = 1;
	var READY_STATE_SENT = 2;
	var READY_STATE_LOADING = 3;
	var READY_STATE_COMPLETE = 4; // "allt �r f�rdigt o man har f�tt svar"

	var xhr = this.getXHR();

	xhr.onreadystatechange = function(){
		
		if(xhr.readyState === READY_STATE_COMPLETE)
		{
			if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)
			{	
				callback(xhr.responseText);			
					
			}
			else
			{
				console.log("L�sfel, status:"+xhr.status);	
			}
		}
	};

	xhr.open("get", url, true); 
	
	
	xhr.send(null);  //skickar ni in n�t �r det helt enkelt post-data
	//har man ingen data b�r man ange null
	//n�r jag k�r s�nd startar jag en timer har jag inte f�tt svar inom 300 millisek
	//sl�nger jag upp laddarsymbol 
  }

  AjaxCon.prototype.getXHR = function(){
		var xhr = null;
		try {
			xhr = new XMLHttpRequest();	
		} catch (error){
			try {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");	
			} catch (error){
				throw new Error("No XHR object available");
			}
		}
		return xhr;
  };

