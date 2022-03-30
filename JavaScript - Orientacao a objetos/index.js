class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        } else {
            console.log("Saldo insuficente para saque");
        }
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Gutavo";
cliente1.cpf = 11822222956;

const cliente2 = new Cliente();
cliente2.nome = "Bianca";
cliente2.cpf = 11542726956;

const contaCorrenteGustavo = new ContaCorrente();
contaCorrenteGustavo._saldo = 0;
contaCorrenteGustavo.agencia = 1001;

contaCorrenteGustavo.depositar(500);

const valorSavado = contaCorrenteGustavo.sacar(50);

console.log(valorSavado);
console.log(contaCorrenteGustavo);