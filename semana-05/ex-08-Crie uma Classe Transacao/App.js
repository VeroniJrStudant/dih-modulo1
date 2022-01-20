/** @format */

import { Cliente } from "/Cliente.js";
import { Conta } from "/Conta.js";
import { Transacao } from "./Transacao.js";

const clienteFulano = new Cliente("Fulano");

const contaFulano = new Conta("000000", 2000, clienteFulano);

const transacaoBeltrano = new Transacao(clienteFulano, 1000);

//Depósito
console.log(`Saldo antes do depósito de R$2000: ${contaFulano.saldo}`);
transacaoBeltrano.deposito();
console.log(`Saldo após depósito: ${contaFulano.saldo}`);

//Transfêrencia
console.log(`Saldo antes do depósito de R$500: ${contaFulano.saldo}`);
transacaoBeltrano.transferencia();
console.log(`Saldo após transferência: ${contaFulano.saldo}`);
