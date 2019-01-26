_satellite.notify("PMCERROR: adding error listener");
window.onerror = function(a, b, c, d, e) {
  try { localStorage.setItem('pmc-error', JSON.stringify( [ a, b, c, d, e ] ) ) } catch(ex) { };
  	_satellite.notify("PMCERROR: tracking " + localStorage.getItem('pmc-error') );
  return false;
}

