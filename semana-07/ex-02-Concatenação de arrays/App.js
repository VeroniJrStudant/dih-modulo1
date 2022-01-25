const calcularProsuto = (...numerosInteiros) => {
    let total = 10

        for(let item of numerosInteiros) {
            total *= parseInt(item);
        }
        return total;
}

console.log(2,3,1);