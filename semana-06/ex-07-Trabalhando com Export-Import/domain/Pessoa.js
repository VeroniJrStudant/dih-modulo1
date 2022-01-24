export default class Pessoa {
	nome;
	#cpf;

	constructor(nome, cpf) {
		if (typeof cpf !== "string" || typeof nome !== "string") {
			throw "Error!";
		}

		this.nome = nome;
		this.#cpf = cpf;
	}

	imprime() {
		console.log(`${this.nome} - ${this.#cpf}`);
	}
}
