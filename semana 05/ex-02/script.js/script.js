/** @format */

class Retangulo {
	constructor(altura, largura) {
		this.altura = altura;
		this.largura = largura;
	}

	calcularArea() {
		return this.altura * this.largura;
	}
}

function trazerResultado() {
	const retangulos = [
		[2, 3],
		[5, 6],
		[9, 7],
	];

	for (let index = 0; index < retangulos.length; index++) {
		const medidasDoRetangulo = retangulos[index];

		const medidaA = medidasDoRetangulo[0];
		const medidaB = medidasDoRetangulo[1];

		const retangulo = new Retangulo(medidaA, medidaB);

        //Refazer este console.log com template string.
        console.log(
			"Calculando a area do retangulo com altura igual a " +
				medidaA +
				" de altura e " +
				medidaB +
				" de largura, otendo a area de:",
			retangulo.calcularArea()
		);
	}
}
