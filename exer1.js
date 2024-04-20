let populacaoA = 80000;
const crescimentoA = 0.03;

let populacaoB = 200000;
const crescimentoB = 0.015;

let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * crescimentoA;
    populacaoB += populacaoB * crescimentoB;
    anos++;
}

console.log(`País A vai se igualar ou ultrapassar o país B em população em: ${anos} anos.`);