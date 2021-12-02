let listaArray = [];

document.getElementById("botao").addEventListener("click", () => {
  adicionarItem();
});

document.getElementById("botaoSalvar").addEventListener("click", () => {
  salvarLista();
});

const adicionarItem = () => {
  const lista = document.getElementById("lista");
  const item = document.querySelector("#inserir-item");

  if (item.value === "") {
    alert("Escreva no campo o item desejado!");

  } else {
    const itemLista = document.createElement("option");
    itemLista.innerText = item.value;
    listaArray.push(item.value);

    lista.appendChild(itemLista);

    item.value = "";
  }
}

const salvarLista = () => {
  localStorage.setItem("bancoLista", JSON.stringify(listaArray));
}
