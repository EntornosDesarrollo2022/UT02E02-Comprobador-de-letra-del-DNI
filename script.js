let dni = prompt("Introduce tu DNI");

let letra = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

let resto = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];


// Tomo todo excepto el último carácter (parte numérica)
let numero = parseInt(dni.slice(0, -1)); 

// Tomo el último carácter (letra proporcionada por el usuario)
let letraUsuario = dni.slice(-1); 

// Encuentro el resto del número entre 23
for (let i = 0; i < resto.length; i++) {
    if (numero % resto.length == resto[i]) {
        // Comparo la letra calculada con la letra proporcionada por el usuario
        if (letraUsuario.toUpperCase() === letra[i]) {
            alert("La letra del DNI es correcta.");
        } else {
            alert("La letra proporcionada es incorrecta. La letra correcta es: " + letra[i]);
        }
    }
}
