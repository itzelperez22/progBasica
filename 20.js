function calcularFactorial(numero) {
    if (numero === 0) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Introduce un número: ', (input) => {
    const numero = parseInt(input);
      const factorial = calcularFactorial(numero);
      console.log(`El factorial de ${numero} es: ${factorial}`);
    rl.close();
  });
  