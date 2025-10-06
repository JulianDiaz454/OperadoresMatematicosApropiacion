// Declaramos los datos
let base, altura;

// Solicitamos los datos
base = prompt("Ingrese la base del terreno");
altura = prompt("Ingrese la altura del terreno");

// Convertimos los datos a tipo flotante
base = parseFloat(base);
altura = parseFloat(altura);

// Calculamos el área del terreno
let area = base * altura;

// Calculamos el perimetro del terreno
let perimetro = 2 * (base + altura);

// Imprimimos el resultado
console.log("El area del terreno es: " + area + " metros");
console.log("El perimetro del terreno es: " + perimetro + " metros");