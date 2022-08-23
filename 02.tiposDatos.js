//Objetos (objetos y arrays)

//objeto
const persona = {
    nombre:'Maria',
    app:'Gonzalez Perez',
    edad: 32
}

//arrays o listas
const frutas = ['pera','limon']

//Primitivos(numbers, floats, strings, boolean, undefined, null)

const edad = 23 //tipo de dato number
const grados = 4.7 //topo de dato float
const nombre = "Maria" // tipo de dato String
const isBlue = false; //tipo de dato booleano puede ser true o false

let perro; //llamamos a perrro y nos dara unfefinided porque no tiene valor
let enfermo = null; //Null es un dato nulo que tiene valor nulo

//La diferencia entre undefined y null es que la primera no tiene valor asignado y la segunda si tiene valor 
//asignado que es un valor nulo.

//TYPEOF
//con typeof vamos a comprobar el tipo de dato con el que estamos trabajando
console.log(typeof perro);
console.log(typeof grados);
console.log(typeof isBlue);