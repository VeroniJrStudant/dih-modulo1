const inputCep = document.getElementById("cep");
const btnCep = document.getElementById("btnCep");
const resultadoCep = document.querySelector(".resultadoCep");

const clicarBotao = (event) => {
	event.preventDefault();
	const cep = inputCep.value;
	consultaCep(cep);
};

const consultaCep = async (cep) => {
	try {
		const consultaUrl = `https://viacep.com.br/ws/${cep}/json/`;
		const response = await fetch(consultaUrl);
		const converteUrl = await response.text();

		resultadoCep.innerHTML = converteUrl;
	} catch (erro) {
		alert("Digite um CEP válido!");
	}
};

btnCep.addEventListener("click", clicarBotao);
