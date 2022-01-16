/** @format */

import { Conta } from "./Conta.js";
import { Endereco } from "./Endereco.js";
import { Cliente } from "./Cliente.js";

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", saveAdress);

function saveAdress(event) {
	event.preventDefault();

	const formData = new FormData(myForm);

	const nome = formData.get("nome");
	const cpf = formData.get("cpf");
	const telefone = formData.get("telefone");

	const conta = formData.get("conta");
	const saldo = formData.get("saldo");

	const logradouro = formData.get("logradouro");
	const numero = formData.get("numero");
	const cidade = formData.get("cidade");
	const estado = formData.get("estado");
	const pais = formData.get("pais");
	const cep = formData.get("cep");

	const newAdress = new Endereco(
		logradouro,
		numero,
		cidade,
		estado,
		pais,
		cep
	);
	const newClient = new Cliente(nome, cpf, telefone);

	const newConta = new Conta(conta, saldo);

	if (newClient instanceof Cliente) {
		alert("esta instanciado em Cliente");
	}

	const p = document.getElementById("paragrafo");

	p.innerHTML = "<strong>Salvo com sucesso!</strong>";

	myForm.innerHTML = `
      Nome: ${newClient.nome}
      Cpf: ${newClient.cpf}
      Telefone: ${newClient.telefone}
      Conta: ${newConta.conta}
      Saldo: ${newConta.saldo}
      Rua: ${newAdress.logradouro}
      Número: ${newAdress.numero}
      Cidade: ${newAdress.cidade}
      Estado: ${newAdress.estado}
      País: ${newAdress.pais}
      Cep: ${newAdress.cep}`;
}
