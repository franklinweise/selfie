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

    if(conteudo === "Selfie."){
        console.log("tirando selfie")
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    frase = "tirando selfie em dois segundos"
    var faleIsso = new SpeechSynthesisUtterance(frase)
    synth.speak(faleIsso);
    Webcam.attach(camera);
    setTimeout(() => {
        tirarSelfie()
        salvar()
    }, 2000);
}
camera = document.getElementById("webcam")
Webcam.set({
    width:360,
    height:250,
    image_format: 'jpeg',
    jpeg_quality:100  
})

function tirarSelfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>'        
    })
}

function salvar(){
    link=document.getElementById("download")
    image=document.getElementById("selfieImage").scr
    link.href = image
    link.click()
}