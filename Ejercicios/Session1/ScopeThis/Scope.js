//Scope Global
var nombre = 'Erik';
console.log(nombre);
function foo() {
    console.log(nombre);
}
foo();

//Socope Local
function foo2() {
    var curso = 'js';
    console.log(curso);
}

foo2();

//Scope en condicionales
if (true) {
    var miname = 'Mary';
    console.log(miname);
}

console.log(miname);

//Scope en bucles

var number = [1, 2, 3, 4, 5];
var dubles = [];

for (var index = 0; index < number.length; index++) {
    dubles.push(number[index] * 2);
}

console.log(number,dubles);

