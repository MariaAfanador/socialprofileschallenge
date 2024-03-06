//VARIABLES
let number = 42;
let verdadero = false;
let nulo = null;
let undef;

console.log(typeof number);
console.log(typeof verdadero);
console.log(typeof nulo);
console.log(typeof undef);

//OBJET
let personaje = {
  nombre: "Char",
  edad: 25,
  signo: "capricornio",
};

console.log(personaje.nombre);

//ARRAYS
let animals = ["horse", "dog", "cat"];

console.log(animals[1]);

//FUNCTIONS

function suma() {
  return 2 + 3;
}

let resultado = suma();

console.log(resultado);


//OPERADOR TERNIARIO

let edad = 25;
let ingreso = edad > 18 ? "Acceder" : "Acceso restringido";

console.log(ingreso);

//CONTROL DE FLUJO

let age = 15;

if (age > 17) {
  console.log("Acceso permitido!");
} else if (age >= 15) {
  console.log("Acceso permitido con adulto responsable");
} else {
  age < 15;
  console.log("Acceso no permitido!");
}


//LOOPS
let array = [0,1,2,3,4,5];
for (let numero = 0; numero < array.length; numero++) {
  console.log(array[numero])
}