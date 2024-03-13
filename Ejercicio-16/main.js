function capitalizar(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""