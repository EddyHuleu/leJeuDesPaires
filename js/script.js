document.addEventListener('DOMContentLoaded',    function(){
    
    var textDiv = document.getElementById('CAMARCHEPAAAAAAAAAAS');
    document.getElementById('CAMARCHEPAAAAAAAAAAS').addEventListener('click',function(){
        var words = textDiv.innerText.split(' ');
        var len = words.length;
        var result = '';
        textDiv.innerText = '';
        for(var i = 0; i < len; ++i){
            var randIndex = Math.floor((Math.random() * (words.length)));
            result += words[randIndex] + ' ';
            words.splice(randIndex, 1);
        }
        textDiv.innerText = result;
    }, false);

}, false)