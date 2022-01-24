import { Cliente } from "./Cliente.js"

const TYPE = {
  STR: "string",
  NUM: "number"
}

export class Conta {
  numeroDaConta
  saldo
  cliente

  constructor(numeroDaConta, saldo, cliente) {

    if (
      typeof numeroDaConta !== TYPE.STR ||
      typeof saldo !== TYPE.NUM ||
      !(cliente instanceof Cliente)
    ) {
      throw "Parâmetro Inválido!"
    }

    this.numeroDaConta = numeroDaConta
    this.saldo = saldo
    this.cliente = cliente
  }
}