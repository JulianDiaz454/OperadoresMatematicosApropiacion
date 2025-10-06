// Declaramos las variables
let nota1, nota2, nota3;

// Solicitamos los datos    
nota1 = prompt("Ingrese el valor de la primera nota");
nota2 = prompt("Ingrese el valor de la segunda nota");
nota3 = prompt("Ingrese el valor de la tercera nota");

// Convertimos los datos
nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);

// Calculamos el promedio
let promedio = (nota1 + nota2 + nota3) / 3;

// Imprimimos el resultado
console.log("PROMEDIO: " + promedio);