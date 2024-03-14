function password(password) {
    password = password.toLowerCase();

    var newPassword = '';

    for (let i = 0; i < password.length; i++) {
        var char = password.charAt(i);
        switch (char) {
            case 'a':
                newPassword += '4';
                break;
            case 'e':
                newPassword += '3';
                break;
            case 'i':
                newPassword += '1';
                break;
            case 'o':
                newPassword += '0';
                break;
        }
    }
    return newPassword;
}

console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""