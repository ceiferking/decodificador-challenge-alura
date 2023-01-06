var textInput = document.querySelector("#input-text");
var outInput = document.querySelector("#output");


function criptografar(){

  var texto = textInput.value;

  var resultCripto = texto.replace(/i/g, "ad").replace(/a/g, "ha").replace(/o/g, "eu").replace(/u/g, "gig").replace(/c/g, "ws").replace(/d/g, "s").replace(/e/g, "a").replace(/f/g, "gs").replace(/g/g, "kb").replace(/h/g, "ss").replace(/j/g, "lj").replace(/k/g, "qq").replace(/l/g, "qt").replace(/m/g, "cc").replace(/n/g, "xx").replace(/p/g, "hg");

  
  document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar!</button>'
}

function descriptografar(){

    var texto = textInput.value;

    var resultDescripto = texto.replace(/ad/g, "i").replace(/ha/g, "a").replace(/eu/g, "o").replace(/gig/g, "u").replace(/ws/g, "c").replace(/s/g, "d").replace(/a/g, "e").replace(/gs/g, "f").replace(/kb/g, "g").replace(/ss/g, "h").replace(/lj/g, "j").replace(/qq/g, "k").replace(/qt/g, "l").replace(/cc/g, "m").replace(/xx/g, "n").replace(/hg/g, "p");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar!</button>'
}

function copiar() {
    var textoCop = document.getElementById('input-text');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado!!");
}  