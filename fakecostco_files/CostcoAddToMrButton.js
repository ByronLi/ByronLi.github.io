// run script
if ((typeof myRegistryWidget).toString().toLowerCase() != "undefined") {
    myRegistryWidget.initialize();
} else {
    var script = document.createElement('script');
    var dh = document.getElementsByTagName("head")[0];
    var db = document.getElementsByTagName("body")[0];
    script.setAttribute("type", "text/javascript");
    script.setAttribute("async", "true");
    script.setAttribute("src", "//www.myregistry.com/ExternalApps/Costco/ScriptWriter.ashx?type=0&version" + (new Date().getTime()));
    if (typeof script != "undefined") {
        if (dh) dh.appendChild(script);
        else if (db) db.appendChild(script);
    }
}