const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];

function Par(numero) {
  return numero % 2 === 0;
}

rl.question('Digite o 1º número inteiro: ', (num1) => {
  numeros.push(parseInt(num1));

  rl.question('Digite o 2º número inteiro: ', (num2) => {
    numeros.push(parseInt(num2));

    rl.question('Digite o 3º número inteiro: ', (num3) => {
      numeros.push(parseInt(num3));

      rl.question('Digite o 4º número inteiro: ', (num4) => {
        numeros.push(parseInt(num4));

        rl.question('Digite o 5º número inteiro: ', (num5) => {
          numeros.push(parseInt(num5));

          rl.question('Digite o 6º número inteiro: ', (num6) => {
            numeros.push(parseInt(num6));

            rl.question('Digite o 7º número inteiro: ', (num7) => {
              numeros.push(parseInt(num7));

              rl.question('Digite o 8º número inteiro: ', (num8) => {
                numeros.push(parseInt(num8));

                rl.question('Digite o 9º número inteiro: ', (num9) => {
                  numeros.push(parseInt(num9));

                  rl.question('Digite o 10º número inteiro: ', (num10) => {
                    numeros.push(parseInt(num10));

                    rl.close();

                    let qtdPares = 0;
                    let qtdImpares = 0;

                    for (let numero of numeros) {
                      if (Par(numero)) {
                        qtdPares++;
                      } else {
                        qtdImpares++;
                      }
                    }

                    console.log(`Quantidade de números pares: ${qtdPares}`);
                    console.log(`Quantidade de números ímpares: ${qtdImpares}`);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});