const n = parseInt(window.prompt("Qual o valor inicial?"))
const r = parseInt(window.prompt("Qual a raiz?"))

for (i = 1; i <= 9; i++) {
    document.write(n + ", ");
    n = n + r;
}

document.write(n + ".");