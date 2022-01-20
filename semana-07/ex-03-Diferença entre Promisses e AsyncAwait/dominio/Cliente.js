/** @format */

const TYPE = {
	STR: "string",
};

export class Cliente {
	_nome;

	constructor(nome) {
		if (typeof nome !== TYPE.STR) {
			throw "Parâmetro inválido!";
		}

		this._nome = nome;
	}
}
