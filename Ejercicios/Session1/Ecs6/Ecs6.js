//Scope
// var Scope global tiene alcance global y local pero no en todos los casos
// let Scope local tiene alcance local

// const Scope Gloabal pero es inmutable, no se puede cambiar el valor asignado inicialmente

const msg = 'Hello world desde template string';


// Spread operator

const colors = ['blue', 'red', 'yellow'];

const colorCopy = [
    ...colors,
    'green'
];

console.log(colorCopy);

const book = {
    author: 'Autor',
    title: 'Titulo',
    year: 2018
}

const copyOfBook = { ...book };

console.log(copyOfBook);