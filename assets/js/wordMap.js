(function(){
	var wordMap = [];

	// Checking for jQuery, using 1.10.2 for older browser support
	if(!($ = window.jQuery)) { // typeof jQuery=='undefined' works too  
	    script = document.createElement( 'script' );  
	   	script.src = 'http://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js';   
	    script.onload=createCloud;  
	    document.body.appendChild(script);  
	} else {
		createCloud();
	}
	function createCloud() {
		$("*").each(function(){
			var elText = $(this).text();
			var words = elText.split(' ');
			for(var i = 0; i < words.length; i++) {
				var word = words[i];
				if (word.length > 4) {
					console.log(word)
					if (wordMap.length === 0) {
						wordMap.push({
							'word': word,
							'count': 1
						});
					}
					for(var j = 0; j < wordMap.length; j++) {
						var wordCounter = wordMap[j];
						if (wordCounter.word === word) {
							wordCounter.count++;
						} else {
							wordMap.push({
								'word': word,
								'count': 1
							});
						}
					}
					console.log(wordMap);
				}
			}
		});
	}
})();