function empiezanConA(arreglo){
    let palabrasConA = [];
    for(let palabra of arreglo){
        if(palabra.toLowerCase().startsWith("a")){
            palabrasConA.push(palabra);
        }
    }
    return palabrasConA;
}

console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []