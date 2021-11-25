const nomeParametro = window.prompt('Digite seu nome.');

const idadeParametro = window.prompt('Qual sua idade.');

const confirmaParametro = window.confirm('Gosta de práticar esportes?');

function exercise5(nomeArgumento, idadeArgumento, confirmaArgumento) {
    console.log("nome: ", nomeArgumento)
    console.log("idade: ", idadeArgumento)
    console.log("confirma: ", confirmaArgumento)
}

exercise5(nomeParametro, idadeParametro, confirmaParametro)

// pesquisar diferença entre argumento e parametro de uma função.
// pesquisar cast de string, number e boolean
// pesquisar o que é camelcase 