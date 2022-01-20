/** @format */
const TYPE = {
	STR: "string",
};

export class Cliente {
	nome;

	constructor(nome) {
		if (typeof this.nome !== TYPE.STR) {
			throw "Parâmetro inválido!";
		}

		this.nome = nome;
	}
}
