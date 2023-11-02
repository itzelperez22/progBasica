contadorP=0;
contadorIP=0;
    for(i=0;i<=100;i++){
        if(i%3==0){
            console.log("Múltiplo de 2: " + i);
            contadorP+=1;
        }else{
            console.log("Múltiplo de 3: " + i);
            contadorIP+=1;
        }
    
    }
    console.log("Cantidad de números múltiplos de 3--> " + contadorP);
    console.log("Cantidad de números múltiplos de 2--> " + contadorIP);