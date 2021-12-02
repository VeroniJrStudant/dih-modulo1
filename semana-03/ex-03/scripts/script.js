

function paridade() {
    var verificar = parseInt(document.getElementById("num").value);
    var resposta = document.getElementById('resposta');
    
    if (verificar%2 == 0)
        resposta.value = "Este número é PAR!";
    else
        resposta.value = "Este número é ÍMPAR!";
    
}