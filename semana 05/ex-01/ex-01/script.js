  class Retangulo {
    largura
    altura
    constructor (altura, largura){
    this.altura = altura;
    this.largura = largura;
    }
    calcularArea() {
        return this.altura * this.largura;
    } 
}
const vetor = [
    new Retangulo(3,6),
    new Retangulo(5,6),
    new Retangulo(3,9),
]
