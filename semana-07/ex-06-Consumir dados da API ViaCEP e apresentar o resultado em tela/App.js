const inputCep = document.getElementById("cep");
const btnCep = document.getElementById("btnCep");
const resultadoCep = document.querySelector(".resultadoCep");

const clicarBotao = (event) => {
    event.preventDefault();
    const cep = inputCep.value;
    consultaCep(cep);
}

const consultaCep = (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resp => resp.text())
    .then(texto => resultadoCep.innerText = texto)
    .catch(erro => alert('Digite um CEP válido'));
}

btnCep.addEventListener("click",clicarBotao);

