function numeroDeCaracteres(string, caracter){
    let contador = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] === caracter){
            contador++;
        }
    }
    return contador;
}

console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4