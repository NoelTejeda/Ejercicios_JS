/* Escribe un programa que pueda calcular el área de 3 figuras geométicias, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.

triangulo = b*h/2
rectángulo = b*h
círculo = π * r2 (pi * radio al cuadrado)
 */

let figura = prompt('Indica el tipo de figura a calcular: circulo, triangulo, rectangulo');

let base;
let altura;
let radio;

switch (figura) {
    case 'circulo':
        radio = prompt('indica el radio del circulo');
        alert(`el área del circulo es: ${Math.PI * Math.pow(radio, 2)} `);
        break;
    case 'triangulo':
        base = prompt('indica la base del triangulo');
        altura = prompt('indica la altura del triangulo');
        alert(`el área del triangulo es: ${base * altura / 2}`);
        break;
    case 'rectangulo':
        base = prompt('indica la base del triangulo');
        altura = prompt('indica la altura del triangulo');
        alert(`el área del triangulo es: ${base * altura} `);
        break;
    default:
        alert('Haz indicado una figura incorrecta, por favor verifica')
        break;
}

