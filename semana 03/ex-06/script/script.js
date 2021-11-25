const estacoesDoAno = () => {

    const dataAtual = new Date("1989-05-06");
    const mes = dataAtual.getMonth();
    const dia = dataAtual.getDate();
    const img = document.querySelector("#estacoes");
    const frase = document.getElementById("descricao");

    if ((dia > 21 && mes === 12) || mes < 3 || (dia < 22 && mes === 3)) {
        frase.innerHTML = "Estamos no Verão";
        img.src = "img/verão.jpg";

    } else if ((dia > 21 && mes === 03) || mes < 6 || (dia < 22 && mes === 6)) {
        frase.innerHTML = "Estamos no Outubro";
        img.src = "img/outono.jpg";

    } else if ((dia > 21 && mes === 06) || mes < 9 || (dia < 22 && mes === 9)) {
        frase.innerHTML = "Estamos no Inverno";
        img.src = "img/inverno.jpg";

    } else if ((dia > 21 && mes === 09) || mes < 12 || (dia < 22 && mes === 12)) {
        frase.innerHTML = "Estamos no Inverno";
        img.src = "img/primavera.jpg";
    };
};

+
    
estacoesDoAno();

