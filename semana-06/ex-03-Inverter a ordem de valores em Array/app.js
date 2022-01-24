const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayInvertido = [];
const inverteOrdem = (lista) => [...lista].reverse();

arrayInvertido = inverteOrdem(arrayNumeros);

console.log(arrayNumeros);
console.log(arrayInvertido);
