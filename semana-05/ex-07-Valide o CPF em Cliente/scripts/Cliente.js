/** @format */

export class Cliente {
	_cpf;
	get cpf() {
		return this._cpf;
	}
	set cpf(value) {
		this._cpf = value;
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

	constructor(cpf) {
		const adicionaCliente = cpf;

		try {
			for (let i = 0; i < adicionaCliente.length - 1; i++) {
				if (typeof adicionaCliente !== "string") {
					throw new Error("Dados Inválidos");
				}
			}
		} catch (e) {
			alert(Error);
		}
		this._cpf = cpf;
	}
}
