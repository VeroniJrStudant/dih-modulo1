import { Endereco } from "./domain/Endereco.js";
import { Cliente } from "./domain/Cliente.js";
import { Conta } from "./domain/Conta.js";
import { Transacao } from "./domain/Transacao.js";

const enderecoMaldito = new Endereco(
	"Rua Do Estopô",
	"Sem Número",
	"Florianópolis",
	"SC",
	"BR",
	"12345-000"
);
const clienteInfiel = new Cliente(
	"Fulaninho",
	"2222222222",
	enderecoMaldito,
	"+550099999999"
);

const contaQueNaoAcabaMais = new Conta("0001", 1000, clienteInfiel);
const contaMaisEssa = new Conta("0002", 2000, clienteInfiel);

const transacao = new Transacao(500, contaQueNaoAcabaMais, contaMaisEssa);
transacao.executaTransacao();

console.log(contaQueNaoAcabaMais);
console.log(contaMaisEssa);
console.log(transacao);
