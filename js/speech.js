(function( document, Reveal, undefined ){

	var recognition = new webkitSpeechRecognition();
	var capturing = false;

	recognition.lang = 'pt-BR';
	recognition.continuous = true;

	recognition.onerror = function(event) {
		console.log(event);
  	};

  	recognition.onend = function(event){
  		recognition.start();
  	};

	recognition.onresult = function(event){
		var result = event.results[0];
		console.log(event);
		if(result[0].transcript == 'próximo') {
			Reveal.next();
		}
		else if(result[0].transcript == 'anterior') {
			Reveal.prev();
		}
		else {
			return;
		}
		recognition.stop();
	};

	recognition.start();
	capturing = true;

})( document, Reveal, undefined );
