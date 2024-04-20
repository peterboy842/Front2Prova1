const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let salarioInicial = 1000.00;
let crescimento = 0.015;

for (let ano = 1997; ano <= 2024; ano++) {
  salarioInicial += salarioInicial * (crescimento * 2);
  crescimento *= 2;
}

console.log(`Salário atual em 2024: R$${salarioInicial.toFixed(2)}`);

rl.question('Digite o salário inicial do funcionário: R$', (inputSalarioInicial) => {
  const salarioInicialUser = parseFloat(inputSalarioInicial);
  let salarioAtual = salarioInicialUser;
  let crescimentoUser = 0.015;

  for (let ano = 1997; ano <= 2024; ano++) {
    salarioAtual += salarioAtual * (crescimentoUser * 2);
    crescimentoUser *= 2;
  }

  console.log(`Salário atual do funcionário em 2024: R$${salarioAtual.toFixed(2)}`);

  rl.close();
});