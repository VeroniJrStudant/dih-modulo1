import Produto from "./domain/Produto.js"

const calcularProduto = (...itens) => {
    let total = 0;

    itens.forEach(item => {
        total += item.quantidade * item.valor;
    });
    return total;
}

const produto1 = new Produto("Guardanapo",2,3.00);
const produto2 = new Produto("Lava Roupas",1,5.00);

console.log("Somatório total:" + calcularProduto(produto1, produto2));
