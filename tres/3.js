/* solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" ó "es impar"
ejemplo:
    1-es impar
    2- es par 
    3 - es impar
 */

let numIngre = parseInt(prompt("indica el número"))

for (let i = 1; i <= numIngre; i++) {
    if (i % 2 == 0) {
        console.log(`el numero ${i} es par`)
    } else {
        console.log(`el numero ${i} es impar`)
    }
}