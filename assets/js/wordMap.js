(function(){
	var wordMap = [];
	for (var c = 0; c < 26; c++) {
		var letter = String.fromCharCode('a'.charCodeAt(0) + c);
		wordMap.push({
			'start': letter,
			'words': []
		});
	}
	// Trim Method for older browsers
	if (!String.prototype.trim) {
	  String.prototype.trim = function () {
	    return this.replace(/^\s+|\s+$/gm, '');
	  };
	}
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
		$("p, span").each(function(){
			var elText = $(this).text();
			var words = elText.split(' ');
			for(var i = 0; i < words.length; i++) {
				var word = words[i].replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").trim().toLowerCase();
				if (word.length > 4) {
					for(var j = 0; j < wordMap.length; j++) {
						var startLetter = wordMap[j].start;
						if (startLetter == word.charAt(0)) {
							var wordArray = wordMap[j].words;
							var foundWord = false;
							for(var k = 0; k < wordArray.length; k++) {
								var compareWord = wordArray[k].word;
								if (compareWord === word) {
									wordArray[k].count++;
									foundWord = true;
									break;
								}
							}
							if(!foundWord) {
								wordArray.push({
									'word': word,
									'count': 1
								});
							} 
							break;
						} 
					}
				}
			}
		});
		console.log(wordMap);
	}
})();