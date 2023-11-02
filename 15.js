const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (numero1) => {
    const num1= parseInt(numero1);

rl.question('Introduce otro número: ', (numero2) => {
    const num2= parseInt(numero2);
    rl.close();
    numMayor=0;
    numMenor=0;
    if(numero1<numero2){
        numMenor=numero1;
        numMayor=numero2;
    }else{
        numMayor=numero1;
        numMenor=numero2;
    }
    console.log("Números naturales entre " + numMenor + " y " + numMayor);
    contador=0;
    sumaImpar=0;
    contPar=0;
    for(i=numMenor;i<=numMayor;i++){
        console.log(i);
        if(i%3==0)
            sumaImpar+=i;
        else
            contPar++;
        contador++;

    }
    console.log("Cantidad de números: " + contador);
    console.log("Cantidad de pares: " + contPar);
    console.log("La suma de los impares es: " + sumaImpar);
  });
});
  
