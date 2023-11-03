const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function numPrimo(num){
  if(num <= 1)
    return false;
  for(i=2;i<=Math.sqrt(num);i++){
    if (num%i==0)
      return false;
  }
  return true;
}
function factorial(num){
  if(num==0)
    return 1;
  return num*factorial(num-1);
}

rl.question('Introduce un número: ', (numero) => {
  const num = parseInt(numero);
    if (numPrimo(num))
      console.log("Es un número primo.");
    else
      console.log("No es un número primo.");
    const fact = factorial(num);
    console.log(`El factorial es ${fact}`);
    for(i=1;i<=10;i++)
        console.log(i*num);
  rl.close();
});
