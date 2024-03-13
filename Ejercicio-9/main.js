function numeroDeAes(string){
    let contador = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i].toLowerCase() === "a"){
            contador++;
        }
    }
    return contador;
}

console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0