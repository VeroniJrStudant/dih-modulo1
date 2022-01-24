import { Conta } from "./Conta.js"

export class Transacao {
  static #lastId = 0
  #idDeTransacao
  data
  conta
  contaTransferencia
  valorDaTransacao

  constructor(valorDaTransacao, conta, contaTransferencia) {
    if (!(conta instanceof Conta)) {
      throw 'Conta inválida!'
    }
    if (typeof valorDaTransacao !== 'number') {
      throw 'Valor inválido!'
    }
    this.#idDeTransacao = ++Transacao.#lastId
    this.conta = conta
    this.valorDaTransacao = valorDaTransacao
    this.data = Intl.DateTimeFormat().format()
    this.contaTransferencia =
      contaTransferencia instanceof Conta
        ? contaTransferencia
        : null
  }

  #trasferencia() {
    if (!this.contaTransferencia) {
      return
    }

    this.conta.saldo -= this.valorDaTransacao
    this.contaTransferencia.saldo += this.valorDaTransacao
  }

  #deposito() {
    this.conta.saldo += this.valorDaTransacao
  }

  executaTransacao() {
    if (this.conta) {
      if (this.contaTransferencia) {
        this.#trasferencia()
      } else {
        this.#deposito()
      }
    }
  }
}
