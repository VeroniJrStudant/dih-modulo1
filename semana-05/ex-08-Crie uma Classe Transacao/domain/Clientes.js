import { Endereco } from "./Endereco.js";

const TYPE = {
	STR: "string",
};

export class Cliente {
	nome;
	cpf;
	endereco;
	numeroDoCelular;

	constructor(nome, cpf, endereco, cel) {
		this.nome = nome;
		this.cpf = cpf;
		this.endereco = endereco;
		this.numeroDoCelular = cel;

		if (
			typeof this.nome !== TYPE.STR ||
			typeof this.cpf !== TYPE.STR ||
			// !(endereco instanceof Endereco) ||
			typeof cel !== TYPE.STR
		) {
			throw "Parâmetro inválido!";
		}

		if (!Cliente.testaCPF(cpf)) {
			throw "CPF inválido!";
		}
	}

	static testaCPF(strCPF) {
		let soma;
		let resto;
		soma = 0;

		if (strCPF == "00000000000") {
			return false;
		}

		for (let i = 1; i <= 9; i++) {
			soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
		}
		resto = (soma * 10) % 11;

		if (resto == 10 || resto == 11) {
			resto = 0;
		}

		if (resto != parseInt(strCPF.substring(9, 10))) {
			return false;
		}

		soma = 0;
		for (let i = 1; i <= 10; i++) {
			soma = soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
		}
		resto = (soma * 10) % 11;

		if (resto == 10 || resto == 11) {
			resto = 0;
		}

		if (resto != parseInt(strCPF.substring(10, 11))) {
			return false;
		}

		return true;
	}
}
