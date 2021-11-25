


document.getElementById("botao").addEventListener("click", () => {
    itemAdicionados()
});

const itemAdicionados = () => {
    const lista = document.getElementById("itemInserido");
    const item = document.querySelector("#criaTarefa");

    if (item.value === "") { 
        alert("insira uma tarefa!")
    } else {
        const itemLista = document.createElement("option");
        itemLista.innerText = item.value;
        itemInserido.appendChild(itemLista);
        item.value = "";
    }

}

