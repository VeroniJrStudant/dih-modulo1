/** @format */
export class Conta {
	_conta;
	get conta() {
		return this._conta;
	}
	set conta(value) {
		this._conta = value;
	}

	_saldo;
	get saldo() {
		return parseInt(this._saldo);
	}
	set saldo(value) {
		parseInt(this._saldo) = value;
	}

	constructor(conta, saldo) {
		const adicionaConta = [conta, saldo];

		try {
			for (let i = 0; i < adicionaConta.length; i++) {
				if (saldo === NaN && typeof conta !== "string") {
					throw new Error("Dados Inválidos");
				}
			}
		} catch (e) {
			alert(e.Error);
		}

		this._conta = conta;
		this._saldo = saldo;
	}
}
