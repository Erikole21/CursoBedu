//Destructuring
//Es extraer valores o propiedades de un arreglo u objeto

//Caso Areglo
const colores = ['Azul', 'Rojo', 'Amarillo'];
const [Azul, Rojo, Amarillo] = colores;

console.log(Azul);
console.log(Rojo);
console.log(Amarillo);

//Caso Objeto

const persona = { firtsName: 'Erik', lastName: 'Rodriguez', Country: 'Colombia' };

// Sin Destructuring
const firtsName1 = persona.firtsName;
const lastName2 = persona.lastName;

// Con Destructuring
const { firtsName, lastName } = persona;
persona.lastName = 'Lopez';
console.log(firtsName, firtsName1, lastName, lastName2, persona);