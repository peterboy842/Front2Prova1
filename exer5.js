const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularAreaEPerimetro(raio) {
  const pi = Math.PI;

  const area = pi * raio * raio;

  const perimetro = 2 * pi * raio;

  return {
    area: area.toFixed(2),
    perimetro: perimetro.toFixed(2)
  };
}

rl.question('Digite o raio do círculo: ', (raioInput) => {
  const raio = parseFloat(raioInput);

  if (isNaN(raio) || raio <= 0) {
    console.log('Número inválido');
    rl.close();
    return;
  }

  const resultados = calcularAreaEPerimetro(raio);

  console.log(`A área do círculo é ${resultados.area} unidades²`);
  console.log(`O perímetro do círculo é ${resultados.perimetro} unidades`);

  rl.close();
});