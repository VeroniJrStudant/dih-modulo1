class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    calcularArea() {
        return this.altura * this.largura
    }
}

const resultadoRetangulo = [
    new Retangulo (50, 20),
    new Retangulo (50, 20),
    new Retangulo (10, 40),
]
