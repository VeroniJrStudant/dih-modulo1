



const botaoDaPa = document.getElementById("botaoPa");
botaoDaPa.addEventListener("click", () => {
    calculaPa();
})

const botaoDaPg = document.getElementById("botaoPg");
botaoDaPg.addEventListener("click", () => {
    calculaPg();
})

const calculaPa = () => {
    const valorInicial = parseInt(document.getElementById("valorInicial").value);
    const valorRaiz = parseInt(document.getElementById("valorRaiz").value);

    if (Number.isNaN(valorInicial) || Number.isNaN(valorRaiz)) {
        alert("Insira um valor válido!");
    } else {
        let progressao = [valorInicial];

        for (let i = 0; i < 9; i++) {
            let proximoNumero = progressao[i] + valorRaiz;
            progressao.push(proximoNumero);
        }
        alert(progressao);
    }
}


const calculaPg = () => {
    const valorInicial = parseInt(document.getElementById("valorInicial").value);
    const valorRaiz = parseInt(document.getElementById("valorRaiz").value);

    if (Number.isNaN(valorInicial) || Number.isNaN("valorRaiz")) {
        alert("digite um valor válido!");
    } else {
        let progressao = [valorInicial];

        for (let i = 0; i < 9; i++) {
            let proximoNumero = progressao[i] * valorRaiz;
            progressao.push(proximoNumero);
        }
        alert(progressao);
    }
}



