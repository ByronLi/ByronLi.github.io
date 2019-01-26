_satellite.pushAsyncScript(function(event, target, $variables){
  // Sellpoints Integration US 
(function (d,s,l,t,p) { 
  t = d.createElement(s); 
  t.type = 'text/java'+s; 
  t.async = true; 
  t.src = l;
	p = d.getElementsByTagName(s)[0]; 
  p.parentNode.insertBefore(t,p); })
(document,'script','//a.sellpoint.net/c/83/sp.js?cv='+Math.floor(Date.now() / 86400000));
// End Sellpoints Integration
});
