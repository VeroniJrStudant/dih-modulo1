import Funcionario from "./domain/Funcionario.js";

const funcionarios = [
	new Funcionario("João", "123", "Professor", 5000),
	new Funcionario("José", "456", "Gestor", 6000),
	new Funcionario("Maria", "789", "Empresaria", 7000),
];

const calcularSalario = (funcionarios) => {
	return funcionarios.reduce(
		(total, funcionario) => total + funcionario.salario,
		0
	);
};

console.log(calcularSalario(funcionarios));
