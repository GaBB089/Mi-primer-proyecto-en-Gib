//Ambito superglobal
//tenemos acceso desde cualquier archivo

//ambito global **************************************************************
//es el contexto que engloba un mismo archivo
//VAR
var perro = "lucas";
console.log(perro);
//LET
let pez = "Tiburon";
console.log(pez);

//CONST
//const se comporta igual que let


//ambito local ***************************************************************
//es el contexto que engloba una funcion
//VAR (su ambito es local)
function saltar(){
    var gato = "felino";
    
}
saltar()
//LET
//nos respeta el ambito local
function gritar(){
    let dinosaurio = "Spinosaurio";
    
}
gritar()

//console.log(dinosaurio);
//console.log(gato);

//CONST
//const se comporta igual que let

//ambito de bloque ***********************************************************
//es el contexto que esta englobado dentro de un bucle o un condicional if
//VAR
//CONST
//const se comporta igual que let
let nombre = "Maria"
if(nombre=="Maria"){
    var apellido = "Gonzalez";
    let mascota = "gato";
    //console.log(pez);
}
//console.log(apellido);
//console.log(mascota);