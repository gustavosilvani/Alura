console.log(`\nTrabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 15;
const estaCompanhada = false;
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
        console.log("Destino Existe");
        destinoExiste = true;
        break;
    } else {
        console.log("Destino Não Existe");
        destinoExiste = false;
    }
    contador++;
}

console.log("Destino Existe:", destinoExiste);