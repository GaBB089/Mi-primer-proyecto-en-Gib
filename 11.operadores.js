//OPERADORES DE COMPARACION

//1.< menor que
//2.> mayor que
//3.>=  mayor o igual que
//4.<= menor o igual que
//5.== igual que (igual valor)
//6.=== estrictamente igual que (igual el valor y el tipo de dato)
//7.!=  diferente que   (distinto valor)
//8.!== estrictamente diferente que (distinto valor y tipo de dato)

let edadMaria = 37;
let edadJose = '37';
let edadAntoni = 14;
let edadCarmen = 15;
let edadCasimiro = 36;

if(edadMaria===edadJose){
    console.log('Tenemos la misma edad')
}else{
    console.log('no tenemos la misma edad')
}

//OPERADORES ARITMETICOS
console.log(3+50); //suma
console.log(56-34); //resta
console.log(3*56); //multiplicacion
console.log(5/2); //division
console.log(10%9); //operador de modulo o residuo

//OPERADORES LOGICOS
//! operador de negacion
//&& operador and o y
//|| operador or o o

let nombre = "Maria";
let nombreMascota = "Firulais";
if(nombreMascota){
    console.log('la mascota tiene nombre y es '+nombreMascota);
}else{
    console.log('la mascota no tiene nombre');
}

let nombreMujer = "Carla";
let edadMujer = '27';
let estadoMujer = 'soltera';
let isMujer = true;

if(nombreMujer=='Carla' || edadMujer == '28'){
    console.log('se cumple la condicion');
}else{
    console.log('no se cumple la condicion');
}