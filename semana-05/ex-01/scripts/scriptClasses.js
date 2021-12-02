import {Endereco} from "./script.js";
class Cliente {
	construtor(nome, cpf, endereco, numeroDoCelular) {
		if (typeof nome != "string") {
			throw "Incorreto!";
		}
		if (typeof cpf != "string") {
			throw "Incorreto!";
		}
		if (typeof numeroDoCelular != "string") {
			throw "Incorreto!";
		}
		this.nome = nome;
		this.cpf = cpf;
		this.endereco = endereco instanceof Endereco;
		this.numeroDoCelular = numeroDoCelular;
  }
  
}

const dadosDoCliente = new Cliente(
	"Alan",
	"137.831.929,00",
	"Ola",
	"48 999779414"
);

console.log(dadosDoCliente);
