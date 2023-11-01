const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (numero) => {
  for(i=0;i<numero;i++){
    console.log(i+1);
  }
  rl.close();
});
