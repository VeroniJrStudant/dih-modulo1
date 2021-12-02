const n1 = window.prompt("Qual o tipo de cálculo você deseja? ( \"\ \+\ \"\ , \"\ \-\ \"\ , \"\ \*\ \"\  ou  \"\ \*\ \"\ ) ");

const n2 = window.prompt('Qual o primeiro valor que deseja calcular?');
const n3 = window.prompt('Qual o segundo valor que deseja calcular?');

switch (n1) {
    case '+':
        resultado = n2 + n3;
        break;

    case '-':
        resultado = n2 - n3;
        break;

    case '*':
        resultado = n2 * n3;
        break;

    case '/':
        resultado = n2 / n3;
        break;

    default:
        break;
}

alert("O resultado do seu cálculo é:  " + resultado);