export default class Produto {
    nome
    quantidade
    valor

    constructor(nome, quant, valor) {

        if(typeof nome !=='string' || typeof quant !=='number' || typeof valor !=='number'){
            throw 'Erro!';
        }
        this.nome = nome;
        this.quantidade = quant;
        this.valor = valor;
    }
}