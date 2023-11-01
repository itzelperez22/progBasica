const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (numero) => {
    contador=0;
    for(i=0;i<=numero;i++){
        if(i%3==0){
            console.log(i);
            contador+=1;
        }
    
    }
    console.log("Cantidad de números múltiplos de 3--> " + contador);
  rl.close();
});