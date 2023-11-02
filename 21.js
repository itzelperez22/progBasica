sumaPar=0;
sumaImpar=0;
for (i=0;i<1001;i++){
    if(i%2==0){
        sumaPar+=i;
    }else{
        sumaImpar+=i;
    }
}
console.log("Suma par: " + sumaPar);
console.log("Suma impar: " + sumaImpar);
