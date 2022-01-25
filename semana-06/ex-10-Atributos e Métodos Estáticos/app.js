import Funcionarios from "./domain/Funcionario.js";

const funcionarios = [
    new Funcionarios("João", "123", "Professor", 5000),
    new Funcionarios("José", "456", "Gestor", 6000),
    new Funcionarios("Maria", "789", "Empresaria", 7000)
];

console.log(Funcionarios.calcularSalarios(funcionarios));