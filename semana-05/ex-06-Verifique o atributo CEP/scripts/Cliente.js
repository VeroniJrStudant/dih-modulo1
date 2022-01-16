/** @format */

export class Cliente {
	_nome;
	get nome() {
		return this._nome;
	}
	set nome(value) {
		this._nome = value;
	}
	_cpf;
	get cpf() {
		return this._cpf;
	}
	set cpf(value) {
		this._cpf = value;
	}
	_telefone;
	get telefone() {
		return this._telefone;
	}
	set telefone(value) {
		this._telefone = value;
	}

	constructor(nome, cpf, telefone) {
		const adicionaCliente = [nome, cpf, telefone];

		try {
			for (let i = 0; i < adicionaCliente.length - 1; i++) {
				if (typeof adicionaCliente[i] !== "string") {
					throw new Error("Dados Inválidos");
				}
			}
		} catch (e) {
			alert(Error);
		}

		this._nome = nome;
		this._cpf = cpf;
		this._telefone = telefone;
	}
}
