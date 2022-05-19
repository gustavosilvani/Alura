import { Cliente } from "./Cliente.js"
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Gustavo", 11122233309);



const contaCorrenteGustavo = new ContaCorrente(cliente1, 1001);
contaCorrenteGustavo.depositar(500);
contaCorrenteGustavo.sacar(100);

console.log(contaCorrenteGustavo);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca);