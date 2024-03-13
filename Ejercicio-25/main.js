function terminanConS(arreglo){
    let palabrasConS =[];

    for(let palabras of arreglo){
        if(palabras.toLowerCase().endsWith("s")){
            palabrasConS.push(palabras);
        }
    }
    return palabrasConS;
}

console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []