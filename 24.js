function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    if (numero <= 3) {
      return true;
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
      return false;
    }
    for (let i = 5; i * i <= numero; i += 6) {
      if (numero % i === 0 || numero % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Introduce un número: ', (input) => {
    const numero = parseInt(input);
      const primo = esPrimo(numero);
      if (primo) {
        console.log(`Es primo.`);
      } else {
        console.log(`No es primo.`);
      }
    rl.close();
  });
  