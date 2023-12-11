var SpeechRecognition = window.webkitSpeechRecognition;
var reconhecer = new SpeechRecognition()

var texto = document.getElementById("texto")
function iniciar(){
    reconhecer.start()
}
reconhecer.onresult = function(e){
    console.log(e)
    var conteudo = e.results[0][0].transcript
    texto.innerHTML = conteudo
}