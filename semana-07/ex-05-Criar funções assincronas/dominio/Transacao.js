/** @format */

import { Conta } from "./Conta.js";

const TYPE = {
	STR: "string",
	NUM: "number",
};

export class Transacao {
	conta;
	valorDaTransacao;

	constructor(conta, valorDaTransacao) {
		if (!(conta instanceof Conta)) {
			throw "Conta Inválida!";
		}

		if (typeof valorTransacao !== TYPE.NUM) {
			throw "Valor inválido";
		}

		this.conta = conta;
		this.valorDaTransacao = valorDaTransacao;
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
