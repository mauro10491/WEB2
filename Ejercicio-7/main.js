function contarRango(numeroInicial, numeroFinal){
    let contador = 0;
    for(let i = numeroInicial + 1; i < numeroFinal; i++){
        contador++;
    }
    return contador;
}

console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0

