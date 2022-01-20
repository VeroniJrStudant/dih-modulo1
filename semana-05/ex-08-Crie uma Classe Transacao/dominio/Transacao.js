/** @format */

import { Conta } from "Conta.js";

const TYPE = {
	STR: "string",
	NUM: "number",
};

export class Transacao {
	_conta;
	_valorDaTransacao;

	constructor(conta, valorTransacao) {
		if (!(conta instanceof Conta)) {
			throw "Conta Inválida!";
		}

		if (typeof valorTransacao !== TYPE.NUM) {
			throw "Valor inválido";
		}

		this._conta = conta;
		this._valorDaTransacao = valorTransacao;
	}

	transferencia() {
		this.conta.saldo -= this.valorDaTransacao;
		return this.conta.saldo;
	}

	deposito() {
		this.conta.saldo += this.valorDaTransacao;
		return this.conta.saldo;
	}
}
