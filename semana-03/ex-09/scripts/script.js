let listaArray = [];

document.getElementById("botao").addEventListener("click", () => {
    adicionaItem();
});

document.getElementById("botaoSalva").addEventListener("click", () => {
    salvaLista();
});

document.getElementById("botaoCarrega").addEventListener("click", () => {
    salvaCarrega();
});

const adicionaItem = () => {
    const item = document.querySelector("#criaTarefa");

    if (item.value === "") {
        alert("Escreva no campo o item");
    } else {
        criaItemHtml(item.value);
        item.value = "";
    }
}

const criaItemHtml = (texto) => {
    const itemLista = document.createElement("option");
    itemLista.innerText = texto;

    const lista = document.getElementById("itemInserido");
    lista.appendChild(itemLista);

    listaArray.push(texto);
}

const salvaLista = () => {
    localStorage.setItem("itens", JSON.stringify(listaArray));
}

function salvaCarrega() {
    const carrega = localStorage.getItem("itens");

    if (carrega) {
        listaArray = JSON.parse(carrega);

        const lista = document.getElementById("botaoCarrega"); listaArray.forEach(item => criaItemHtml(item));
    } else {
        alert("Não há itens salvos.");
    }
}