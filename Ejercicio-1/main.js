/*Escribir una función llamada contrasenaValida que reciba un string
 y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". 
 De lo contrario debe retornar false.*/

 function contraseñaValida(password){
    return password === "2Fj(jjbFsuj" || password === "eoZiugBf&g9";
 }

 console.log(contraseñaValida("2Fj(jjbFsuj"));
 console.log(contraseñaValida("eoZiugBf&g9"));
 console.log(contraseñaValida("hola"));
 console.log(contraseñaValida(""));
