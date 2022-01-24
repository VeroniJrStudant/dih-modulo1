import { Endereco } from "./Endereco.js";

const TYPE = {
	STR: "string",
};

export class Cliente {
	nome;
	cpf;
	endereco;
	numeroDoCelular;

	constructor(nome, cpf, end, cel) {
		if (
			typeof nome !== TYPE.STR ||
			typeof cpf !== TYPE.STR ||
			!(end instanceof Endereco) ||
			typeof cel !== TYPE.STR
		) {
			throw "Parâmetro Inválido!";
		}

		if (!Cliente.testaCPF(cpf)) {
			throw "CPF inválido!";
		}

		this.nome = nome;
		this.cpf = cpf;
		this.endereco = end;
		this.numeroDoCelular = cel;
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
