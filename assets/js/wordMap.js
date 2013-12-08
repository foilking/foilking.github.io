function cleanUp()
{
	node = document.getElementsByTagName("body")[0];
	var a = [];
	var re = new RegExp('\\bwordCloud\\b');
	var els = node.getElementsByTagName("*");
	for(var i=0,j=els.length; i<j; i++)
	if(re.test(els[i].className))a.push(els[i]);

	for(var x in a)
	{
		if (a[x].parentNode)
		{
			a[x].parentNode.removeChild(a[x]);
		}
	}
}
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
		$("*").not("html, script, canvas, audio, video, noscript, meta, link").each(function(){
			var elText = $(this).text();
			var words = elText.split(' ');
			for(var i = 0; i < words.length; i++) {
				var word = words[i].replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").replace(/\s/g,"").trim().toLowerCase();
				if (word.length > 3) {
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
		cleanUp();

		var shade = document.createElement("div");
		shade.setAttribute('class','wordCloud');
		shade.setAttribute('id','shade');
		shade.setAttribute('style','background-color:#000;height:100%;left:0;opacity:0.65;position:fixed;top:0;width:100%;z-index:1001;');
		
		var centr = document.createElement("div");
		centr.setAttribute('class','wordCloud');
		centr.setAttribute('id','centr');
		centr.setAttribute('style','background-color:transparent;height:100%;left:0;position:fixed;text-align:center;top:0;width:100%;z-index:1001;');

		var wordDiv = document.createElement("div");
		wordDiv.setAttribute('class','wordCloud');
		wordDiv.setAttribute('id','wordDiv');
		var largestFont = 0;
		for(var m = 0; m < wordMap.length; m++) {
			var wordArray = wordMap[m].words;
			for(var n = 0; n < wordArray.length; n++) {
				var word = wordArray[n].word;
				var amount = wordArray[n].count;
				var fontSize = (7 + (amount * 3));
				largestFont = largestFont > fontSize ? largestFont : fontSize;
				var wordSpan = document.createElement('span');
				wordSpan.setAttribute('class', 'wordCloud');
				wordSpan.setAttribute('style', 'display:inline-block;margin:5px; font-size:' + fontSize + 'px;');
				wordSpan.innerHTML = word;
				wordDiv.appendChild(wordSpan);
			}
		}
		wordDiv.setAttribute('style','margin:25px auto auto auto;background-color:#FFF;height:700px;width:600px;z-index:1001;-moz-border-radius:20px;padding:' + (largestFont / 2) + 'px 5px 5px'); 

		centr.appendChild(wordDiv);
		document.body.appendChild(shade);
		document.body.appendChild(centr);
		document.body.setAttribute('onclick','cleanUp()');
	}
	
})();