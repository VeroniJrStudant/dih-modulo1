const calcularProduto = (...numerosInteiros) => {
    let total = 1

    for (let item of numerosInteiros) {
        total*= parseInt(item);
    }

    return total;
}

console.log(calcularProduto(2,3,1));
