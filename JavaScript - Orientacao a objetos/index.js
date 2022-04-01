import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Gutavo";
cliente1.cpf = 11822222956;

const cliente2 = new Cliente();
cliente2.nome = "Bianca";
cliente2.cpf = 11542726956;

const contaCorrenteGustavo = new ContaCorrente();
contaCorrenteGustavo._saldo = 0;
contaCorrenteGustavo.agencia = 1001;
contaCorrenteGustavo.cliente = cliente1;
contaCorrenteGustavo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

let valor = 200;
contaCorrenteGustavo.trasferir(valor, conta2);


console.log("Valor:", valor);
console.log(contaCorrenteGustavo);
console.log(conta2);