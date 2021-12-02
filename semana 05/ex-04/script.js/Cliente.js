/** @format */

export class Cliente {
    _nome
    get nome()
    {
        return this._nome;
    }
    set nome()
    {
        return this._nome;
    }
    _cpf
    get cpf()
    {
        return this._cpf;
    }
    set cpf()
    {
        return this._cpf;
    }
    _endereco
    get endereco()
    {
        return this._endereco;
    }
    set endereco()
    {
        return this._endereco;
    }
    _numeroDoCelular
    get numeroDoCelular()
    {
        return this._numeroDoCelular;
    }
    set numeroDoCelular()
    {
        return this._numeroDoCelular;
    }

    constructor(nome, cpf, endereco, numeroDoCelular)
    {

        this._nome = nome;
        this._cpf = cpf;
        this._endereco = endereco;
        this._numeroDoCelular = numeroDoCelular;
    }
}
