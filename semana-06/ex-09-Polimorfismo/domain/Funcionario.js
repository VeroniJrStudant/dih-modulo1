import Pessoa from "./Pessoa.js";

export default class Funcionarios extends Pessoa {
	cargo;
	salario;

	constructor(nome, cpf, cargo, salario) {
		super(nome, cpf);
		this.cargo = cargo;
		this.salario = salario;
	}

	imprime() {
		console.log(`${this.nome} ${this.cargo}`);
	}
}
