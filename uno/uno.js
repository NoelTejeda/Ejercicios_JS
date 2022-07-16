/* solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás _____ años"
realiza el ejercicio con prompt(mensaje) y haz uso de los templates strings */

let nombre = prompt('Escribe tu nombre');
let edad = parseInt(prompt('Escribe tu edad'));
//let edad = prompt('Escribe tu edad');


alert(`hola ${nombre}, tienes ${edad} y el año que viene tendrás ${edad + 1} años`);
//alert(`hola ${nombre}, tienes ${edad} y el año que viene tendrás ${parseInt(edad) + 1} años`);