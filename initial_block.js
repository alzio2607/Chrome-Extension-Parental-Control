_ini();

function _ini(){
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    url=tabs[0].url;
    console.log(url);

});

 if(url.search("porn") || url.search("PORN"))
	 	{document.getElementsByTagName("html")[0].style.display="none";}
}
