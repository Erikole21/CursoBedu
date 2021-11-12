//String en ES6

//ES5
const nombre = 'Erik';

console.log('Welcome ' + nombre);

//ES6
console.log(`Welcome ${nombre}`);

//Multiples lineas

const mensaje = `Welcome! 
Erik 
Alumnos
Ingrid
etc...
`;

console.log(mensaje);

//Expresiones matematicas

const a = 2, b = 6;

console.log(`La suma de ${a} + ${b} es igual a ${a + b}`);

//Trabajar con arreglos

const colores = ['Azul', 'Rojo', 'Amarillo'];

console.log(`Colores primarios: ${colores.join(', ')}`);

//Funciones de alto orden.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(` odd numbers: ${numeros.filter(n => n % 2 != 0)} `);

//Spread Operator

//Objetos
const book = {
    author: 'Autor',
    title: 'Titulo',
    year: 2018
}

const copyOfBook1 = book;
copyOfBook1.year = 2021;
const copyOfBook2 = { ...book, year: 2019 };

console.log(book);
console.log(copyOfBook1);
console.log(copyOfBook2);

//Arrays 
const colores1 = [...colores];
const copyOfColorsbad = colores1;
const copyOfColorsok = [...colores1];
colores1[0] = 'blanco';
console.log(colores1)
console.log(copyOfColorsbad)
console.log(copyOfColorsok)