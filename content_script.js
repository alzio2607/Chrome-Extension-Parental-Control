_ini();
function replaceURLWithHTMLLinks(text) {
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i;
    return text.replace(exp,"<a href='$1'>$1</a>"); 
}
function _ini(){

	var datas = document.body.innerText;
	var n = datas.length;
	console.log(n);
	if(n>1000) {
		datas = datas.slice(0,1000);
	}
	datas= datas.replace(/[^\x00-\x7F]/g, "");
	console.log(datas);

	temp = datas.split(" ");
	n = temp.length;
    if(datas.includes("porn")||datas.includes("PORN")) {document.getElementsByTagName("html")[0].style.display="none";alert("Site is blocked!!");window.open('http://images.memes.com/meme/1085469','_self');}

	 $(function() {
        
      
        $.ajax({
            url: "https://southeastasia.api.cognitive.microsoft.com/contentmoderator/moderate/v1.0/ProcessText/Screen/?language=eng&",
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","text/plain");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","Your Azure API Key");
            },
            type: "POST",
            // Request body
            data: datas,

        })
        .done(function(data) {
            console.log((data["Terms"]["length"])/n);
            if ((data["Terms"]["length"])/n>0.02)
            {document.getElementsByTagName("html")[0].style.display="none";alert("Site is blocked!!");window.open('http://images.memes.com/meme/1085469','_self');}
        })
        .fail(function() {
       
        });
    });
}