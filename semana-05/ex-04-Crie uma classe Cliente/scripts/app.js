import { Endereco } from './Endereco.js';
import { Cliente } from './Cliente.js';

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", saveAdress);

function saveAdress(event) {
  event.preventDefault();

  const formData = new FormData(myForm);

  const nome = formData.get("nome");
  const cpf = formData.get("cpf");
  const telefone = formData.get("telefone");

  const logradouro = formData.get("logradouro");
  const numero = formData.get("numero");
  const cidade = formData.get("cidade");
  const estado = formData.get("estado");
  const pais = formData.get("pais");
  const cep = formData.get("cep");

  const newAdress = new Endereco(logradouro, numero, cidade, estado, pais, cep);
  const newClient = new Cliente(nome, cpf, telefone);
  const p = document.getElementById("paragrafo");

  p.innerHTML = "<strong>Endereço salvo com sucesso!</strong>";

  myForm.innerHTML = `
      Nome: ${newClient.nome}
      Cpf: ${newClient.cpf}
      Telefone: ${newClient.telefone}
      Rua: ${newAdress.logradouro}
      Número: ${newAdress.numero}
      Cidade: ${newAdress.cidade}
      Estado: ${newAdress.estado}
      País: ${newAdress.pais}
      Cep: ${newAdress.cep}`;
}
