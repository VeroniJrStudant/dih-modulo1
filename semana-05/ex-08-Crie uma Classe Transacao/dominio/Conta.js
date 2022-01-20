/** @format */
import { Cliente } from "./Cliente.js";

const TYPE = {
	STR: "string",
	NUM: "number",
};

export class Conta {
	_numeroDaConta;
	_saldo;
	_cliente;

	constructor(numeroDaConta, saldo, cliente) {
		if (
			typeof numeroDaConta !== TYPE.STR ||
			typeof saldo !== TYPE.NUM ||
			!(cliente instanceof Cliente)
		) {
			throw "Parametro Inválido!";
		}

		this._numeroDaConta = numeroDaConta;
		this._saldo = saldo;
		this._cliente = cliente;
	}
}
