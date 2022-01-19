/** @format */

export class Cliente {
	_cpf;

	constructor(cpf) {
		this._cpf = cpf;
	}

	set cpf(novo_cpf) {
		if (Cliente._cpfIsValid(novo_cpf)) {
			this._cpf = novo_cpf;
		} else {
			throw new Error(alert("Arrumar o CPF"));
		}
	}

	get cpf() {
		return this._cpf;
	}

	static _cpfIsValid(value) {
		return /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/.test(value);
	}
}
