const TYPE = {
  STR: "string"
}

export class Endereco {
  logradouro
  numero
  cidade
  estado
  pais
  cep

  constructor(log, num, cid, est, pai, cep) {
    if (
      typeof log !== TYPE.STR ||
      typeof num !== TYPE.STR ||
      typeof cid !== TYPE.STR ||
      typeof est !== TYPE.STR ||
      typeof pai !== TYPE.STR ||
      typeof cep !== TYPE.STR
    ) {
      throw "Endereço Inválido!"
    }

    if (!this.validaCEP(cep)) {
      throw "CEP Inválido!"
    }

    this.logradouro = log
    this.numero = num
    this.cidade = cid
    this.estado = est
    this.pais = pai
    this.cep = cep
  }

  validaCEP(cep) {
    const tamanho = cep.length
    if (tamanho !== 9 || cep[5] !== '-') {
      return false
    }

    for (let i = 0; i < tamanho; i++) {
      if (i !== 5) {
        if (cep[i] < '0' || cep[i] > '9') {
          return false
        }
      }
    }

    return true
  }
}