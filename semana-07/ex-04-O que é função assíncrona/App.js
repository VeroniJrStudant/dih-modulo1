/** @format */

import { Conta } from "../dominio/Conta.js";
import { Transacao } from "../dominio/Transacao.js";
import { Cliente } from "../dominio/Cliente.js";

const clienteTeste = new Cliente("Fulano", "1111111111");

const contaTeste = new Conta("000000", 2000, clienteTeste);

const transacaoTeste = new Transacao(contaTeste, 1000);

//Depósito
console.log(`Saldo antes do depósito de R$2000: ${contaTeste.saldo}`);
transacaoTeste.deposito();
console.log(`Saldo após depósito: ${contaTeste.saldo}`);

//Transfêrencia
console.log(`Saldo antes do depósito de R$ 1000: ${contaTeste.saldo}`);
transacaoTeste.transferencia();
console.log(`Saldo após transferência: ${contaTeste.saldo}`);
