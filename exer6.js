const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularMontante(capital, juros, tempo) {
  const i = juros / 100;
  const montante = capital * Math.pow((1 + i), tempo);
  return montante.toFixed(2);
}

rl.question('Digite o capital inicial: R$', (inputCapital) => {
  rl.question('Digite a taxa de juros mensal (%): ', (inputJuros) => {
    rl.question('Digite o tempo do investimento (meses): ', (inputTempo) => {
      const capital = parseFloat(inputCapital);
      const juros = parseFloat(inputJuros);
      const tempo = parseInt(inputTempo);

      const montante = calcularMontante(capital, juros, tempo);

      console.log(`O montante do investimento será: R$${montante}`);

      rl.close();
    });
  });
});