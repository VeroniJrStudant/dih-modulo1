/** @format */

import { Cliente } from "./Cliente.js";

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", saveAdress);

function saveAdress(event) {
	event.preventDefault();

	const formData = new FormData(myForm);

	const cpf = formData.get("cpf");

	const newClient = new Cliente(cpf);

	const p = document.getElementById("paragrafo");

	p.innerHTML = "<strong>Salvo com sucesso!</strong>";

	myForm.innerHTML = `Cpf: ${newClient.cpf}`;
}
