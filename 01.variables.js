//var, let y const

//variable:Guardar un espacio en memoria

//declaracion de la variable
let mascota;

//inicializacion de la variable
mascota = "perro";

//declaracion de la variable e inicializacion de una varable

let mascota1 = "perro";

console.log(mascota);

//Reglas de las variables
/*  1. Let no me permite declarar la variable con el mismo nombre
    2. let permiete declarar y no inicializarla y mas tarde en cualquier lugar del codigo volver a inicializarla
    NO USAR VAR

    1. var me permite declarar otra variable con el mismo nombre 
    2. tambien me permite declarar sin inicializar
    USAR VAR CUANDO NUESTRA VARIABLE VAYA A CAMBIAR

    1. const no nos deja declarar una variable sin inicializarla
    2. const no nos deja declarar una variable con el mismo nombre
    USAR CONST CUANDO NUESTRA VARIABLE SEA FIJA
*/

var nombre = "Pedro";
console.log(nombre);

var nombre = "Carlos";
console.log(nombre)

var pajaro;
pajaro = "Loro";
console.log(pajaro);

//variable undefined o variable null

let pez;
console.log(pez);

function saltar() {
    let tiburon = "blanco";
}
//console.log(tiburon);

//estado inicial 

let encendido = null;
console.log(encendido);

//const

const perro = "salchicha";
console.log(perro);

let fuerzaenemigo = 20;

fuerzaenemigo = 30;

console.log(fuerzaenemigo);