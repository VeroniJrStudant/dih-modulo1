import { Endereco } from "./domain/Endereco.js";
import { Cliente } from "./domain/Clientes.js";
import { Conta } from "./domain/Contas.js";
import { Transacao } from "./domain/Transacoes.js";

const enderecoDoInadimplente = new Endereco(
	"Rua numero sem nome",
	"123",
	"Florianópolis",
	"SC",
	"BR",
	"12345-123"
);
console.log(JSON.stringify(enderecoDoInadimplente));

const clienteRuim = new Cliente(
	"Fulano",
	"16107283005",
	enderecoDoInadimplente,
	"+5548991149500"
);

console.log(JSON.stringify(clienteRuim));

const contaHemorragia = new Conta("000000", 2000, clienteRuim);

const contaNoVermelho = new Transacao(contaHemorragia, 1000);

//Depósito
console.log(`Saldo antes do depósito de R$2000: ${contaHemorragia.saldo}`);
contaNoVermelho.deposito();
console.log(`Saldo após depósito: ${contaHemorragia.saldo}`);

//Transfêrencia
console.log(`Saldo antes do depósito de R$500: ${contaHemorragia.saldo}`);
contaNoVermelho.transferencia();
console.log(`Saldo após transferência: ${contaHemorragia.saldo}`);
