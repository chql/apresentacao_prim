(function( window, undefined ){

	window.revealSpeech = function( Reveal ) {
		var recognition = new webkitSpeechRecognition();
		var sliding = false;
		recognition.lang = 'pt-BR';
		recognition.continuous = true;
		recognition.interimResults = true;

		recognition.onerror = function(event) {
			console.log(event);
	  	};

	  	recognition.onend = function(event){
	  		sliding = false;
	  		recognition.start();
	  	};

		recognition.onresult = function(event){
			var result = event.results[0];
			if(sliding === true) {
				return;
			}
			if(result[0].transcript.trim() == 'próximo') {
				Reveal.next();
			}
			else if(result[0].transcript.trim() == 'anterior') {
				Reveal.prev();
			}
			else {
				recognition.stop();
				return;
			}
			sliding = true;
			recognition.stop();
		};
		recognition.start();
	};

})( window );
