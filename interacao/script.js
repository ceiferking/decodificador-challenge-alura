var textInput = document.querySelector("#input-text");
var outInput = document.querySelector("#output");


function criptografar(){

  var texto = textInput.value;

  var resultCripto = texto.replace(/i/g, "bac").replace(/a/g, "kjd").replace(/o/g, "lsf").replace(/u/g, "kjt").replace(/c/g, "fac").replace(/d/g, "dwq").replace(/e/g, "ttr").replace(/f/g, "klt").replace(/g/g, "578").replace(/h/g, "741").replace(/j/g, "ljgf").replace(/k/g, "lads").replace(/l/g, "uyts").replace(/m/g, "147").replace(/n/g, "opena").replace(/p/g, "888");

  
  document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){

    var texto = textInput.value;

    var resultDescripto = texto.replace(/bac/g, "i").replace(/kjd/g, "a").replace(/lsf/g, "o").replace(/kjt/g, "u").replace(/fac/g, "c").replace(/dwq/g, "d").replace(/ttr/g, "e").replace(/klt/g, "f").replace(/578/g, "g").replace(/741/g, "h").replace(/ljgf/g, "j").replace(/lads/g, "k").replace(/uyts/g, "l").replace(/147/g, "m").replace(/opena/g, "n").replace(/888/g, "p");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('input-text');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado!!");
}  