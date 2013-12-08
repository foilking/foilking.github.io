javascript:(function(){
	if(document.getElementById){
		var x=document.getElementsByTagName('head').item(0);
		var o=document.createElement('script');
		if(typeof(o)!='object') 
			o=document.standardCreateElement('script');
		o.setAttribute('src','http://foilking.github.io/assets/js/wordMap.js'); // Hosted location
		o.setAttribute('type','text/javascript');
		x.appendChild(o);
	}
})();