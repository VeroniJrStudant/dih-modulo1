/** @format */

import { Cliente } from "./Cliente.js";

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", saveAdress);

function saveAdress(event) {
	event.preventDefault();

	const formData = new FormData(myForm);

	const cpf = formData.get("cpf");

	const newClient = new Cliente(cpf);

	newClient.cpf = cpf;

	const p = document.getElementById("paragrafo");

	myForm.innerHTML = `Cpf: ${newClient.cpf}`;

	p.innerHTML = "<strong>Salvo com sucesso!</strong>";
}
