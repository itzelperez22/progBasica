sumaPar=0;
sumaImpar=0;
for (i=0;i<101;i++){
    console.log(i);
    if(i%2==0){
        sumaPar+=i;
    }else{
        sumaImpar+=i;
    }
}
console.log("Suma par: " + sumaPar);
console.log("Suma impar: " + sumaImpar);
