_satellite.pushAsyncScript(function(event, target, $variables){
  (function(win,doc){

var scriptElement, scrSrc;

if (typeof (win.ClickTaleCreateDOMElement) != "function")
{
	win.ClickTaleCreateDOMElement = function(tagName)
	{
		if (doc.createElementNS)
		{
			return doc.createElementNS('http://www.w3.org/1999/xhtml', tagName);
		}
		return doc.createElement(tagName);
	}
}

win.WRInitTime=(new Date()).getTime();

scriptElement = ClickTaleCreateDOMElement('script');
scriptElement.type = "text/javascript";

if ( win.location.hostname.slice(-3) == ".ca" ) {
	// .CA
	_satellite.notify("ClickTale .CA Tag Firing");
	scriptElement.src = doc.location.protocol + '//cdna.clicktale.net/www33/ptc/d82d8e8e-d5f9-45a4-a36a-b15e5ca530ad.js';
} else if ( win.location.hostname.slice(-4) == ".com" ) {
	// .COM
	_satellite.notify("ClickTale .COM Tag Firing");
	scriptElement.src = doc.location.protocol + '//cdna.clicktale.net/www33/ptc/2bd2aadb-9ec5-4d38-b6b4-b73f6f2501d3.js';
}


doc.getElementsByTagName('body')[0].appendChild(scriptElement);
})(window,document);

});
