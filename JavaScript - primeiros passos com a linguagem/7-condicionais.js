console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 15;
const estaCompanhada = false;
const temPassagemComprada = true;


console.log("Destinos Possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

if ((idadeComprador >= 18) || (estaCompanhada == true)) {
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(1, 1); // removendo um item
} else {
    console.log("Não é maior de Idade e não posso Vender");
}

console.log("Embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem!!");
} else {
    console.log("Você Não pode Embarcar")
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);