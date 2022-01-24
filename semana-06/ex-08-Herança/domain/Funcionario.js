import Pessoa from "./Pessoa.js";

export default class Employee extends Pessoa {
	cargo;
	salario;

	constructor(name, cpf, cargo, salario) {
		super(name, cpf);

		this.cargo = cargo;
		this.salario = salario;
	}
}
