import { Cliente } from "./Clientes.js";

const TYPE = {
	STR: "string",
	NUM: "number",
};

export class Conta {
	numeroDaConta;
	saldo;
	cliente;

	constructor(numeroDaConta, saldo, cliente) {
		if (
			typeof numeroDaConta !== TYPE.STR ||
			typeof saldo !== TYPE.NUM ||
			!(cliente instanceof Cliente)
		) {
			throw "Parametro Inválido!";
		}

		this.numeroDaConta = numeroDaConta;
		this.saldo = saldo;
		this.cliente = cliente;
	}
}
