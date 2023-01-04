var textInput = document.querySelector("#input-text");
var outInput = document.querySelector("#output");


function criptografar(){

  var texto = textInput.value;

  var resultCripto = texto.replace(/e/g, "bd").replace(/i/g, "ad").replace(/a/g, "ha").replace(/o/g, "eu").replace(/u/g, "gig");

  
  document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">@Copiar@</button>'
}

function descriptografar(){

    var texto = textInput.value;

    var resultDescripto = texto.replace(/bd/g, "e").replace(/ad/g, "i").replace(/ha/g, "a").replace(/eu/g, "o").replace(/gig/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">@Copiar@</button>'
}

function copiar() {
    var textoCop = document.getElementById('input-text');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado!!");
}  