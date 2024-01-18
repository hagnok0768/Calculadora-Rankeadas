const prompt = require('prompt-sync')();

let vit = prompt('Digite o número de vitórias: ');
let derr = prompt('Digite o número de derrotas: ');

// Convertendo as strings para números inteiros
vit = parseInt(vit);
derr = parseInt(derr);

function calcularSaldoRankeadas(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Uso da função
let resultado = calcularSaldoRankeadas(vit, derr);
//Apresentando Resultados
console.log("O Herói tem um saldo de " + resultado.saldoVitorias + ", está no nível " + resultado.nivel);
