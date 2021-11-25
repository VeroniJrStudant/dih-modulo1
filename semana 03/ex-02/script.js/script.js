



const botoes = document.querySelectorAll("button");

botoes.forEach((botao) =>
    botao.addEventListener("click", () => {
        calcular(botao.value);
    })
);

const calcular = (operacao) => {
    
    const primeiroValor = Number(document.getElementById("inserirDados").value);
    
    const segundoValor = Number(document.getElementById("inserirDadosUm").value);
    
    const resposta = document.querySelector("#resposta");

    if (operacao === "somar") {
        resposta.value = primeiroValor + segundoValor;
    } else if (operacao === "subtrair") {
        resposta.value = primeiroValor - segundoValor;
    } else if (operacao === "multiplicar") {
        resposta.value = primeiroValor * segundoValor;
    } else {
        resposta.value = primeiroValor / segundoValor;
    }

};

