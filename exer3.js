const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];

rl.question('Quantos números deseja inserir? ', (quantidade) => {
  quantidade = parseInt(quantidade);

  function numeroValido(numero) {
    return !isNaN(numero);
  }

  function calculo(numeros) {
    let menor = numeros[0];
    let maior = numeros[0];
    let soma = 0;

    for (let numero of numeros) {
      soma += numero;

      if (numero < menor) {
        menor = numero;
      }

      if (numero > maior) {
        maior = numero;
      }
    }

    return {
      menor: menor,
      maior: maior,
      soma: soma
    };
  }

  function preencher(i) {
    if (i < quantidade) {
      rl.question(`Digite o ${i + 1}º número: `, (input) => {
        const numero = parseInt(input);
        if (numeroValido(numero)) {
          numeros.push(numero);
          preencher(i + 1);
        } else {
          console.log('Número inválido. Tente novamente.');
          preencher(i);
        }
      });
    } else {
      rl.close();

      const estatisticas = calculo(numeros);

      console.log(`Menor valor: ${estatisticas.menor}`);
      console.log(`Maior valor: ${estatisticas.maior}`);
      console.log(`Soma dos valores: ${estatisticas.soma}`);
    }
  }

  preencher(0);
});