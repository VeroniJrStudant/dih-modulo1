import Pessoa from "./domain/Pessoa.js";
import Funcionarios from "./domain/Funcionario.js";

const pessoas = [
    new Pessoa("João", "123"),
    new Pessoa("José", "456"),
    new Pessoa("Maria", "789")
];

const funcionarios = [
    new Funcionarios("João", "123", "Professor", 5000),
    new Funcionarios("José", "456", "Gestor", 6000),
    new Funcionarios("Maria", "789", "Empresaria", 7000)
];

pessoas.forEach(item => item.imprime())

funcionarios.forEach(item => item.imprime())