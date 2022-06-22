console.log(`\nTrabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 15;
const estaCompanhada = true;
let temPassagemComprada = false;
const destino = "São Paulo";


console.log("\nDestinos Possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaCompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 4) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    } else {
        destinoExiste = false;
    }
    contador++;
}

console.log("Destino Existe:", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
} else {
    console.log("Desculpe Tivemos um erro")
}

for (let cont = 0; cont < 4; cont++) {
    if (listaDeDestinos[cont] == destino) {
        destinoExiste = true;
        break;
    } else {
        destinoExiste = false;
    }
}

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
} else {
    console.log("Desculpe Tivemos um erro")
}