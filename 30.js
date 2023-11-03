const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function menu(){
    console.log("1.- Sumar números");
    console.log("2.- Restar números");
    console.log("3.- Multiplicar números");
    console.log("4.- Dividir números");
    console.log("5.- Salir");

rl.question('Seleccione una opción: ', (opc) => {
    
rl.question('Introduce un número: ', (numero1) => {
    const num1= parseFloat(numero1);

rl.question('Introduce otro número: ', (numero2) => {
    const num2= parseFloat(numero2);

        switch(opc){
            case '1':
                console.log(numero1+numero2);
                break;
            case '2':
                console.log(numero1-numero2);
                break;
            case '3':
                console.log(numero1*numero2);
                break;
            case '4':
                console.log(numero1/numero2);
                break;
            case '5':
                break;
        }
    });
  });
});
}
  
