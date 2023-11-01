const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce una letra: ', (letra) => {
  if (letra == 'S' || letra == 'N'){
    console.log("Letra correcta");
  }else{
    console.log("No se permiten lestras diferentes a S o N");
  }
  rl.close();
});