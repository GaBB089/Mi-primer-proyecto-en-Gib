//funciones declaradas //
//funciones expresadas
//funciones flecha
//funciones autoejecutables anonimas

//estas funciones anonimas autoejecutables se tienen que poner antes de otras funciones
//funcion clasica anonima autoejecutable
/*(function(){
    console.log('buenas madrugadas');
})()*/

//funcion moderna anonima autoejecutable
(()=>{
    console.log('bien');
})()

//FUNCION DECLARADA
//en la funciones declaradas existe el efecto hoisting o elevacion por ello nos permite llamar a la funcion
//antes de declararla
//parametros
function saludo(nombre, apellido) {

    console.log(`Mi nombre es ${nombre} ${apellido}`);
}
//le damos argumentos
saludo('Gabriel', 'Alejandro');


//FUNCION EXPRESADA
//no existe el efecto hoistin o elevacion por lo que debo llamar a la funcion despues de declararla
const saltar = function () {
    console.log('Estoy saltando');
}
saltar();

//FUNCIONES FLECHA
const suma = (numero1, numero2)=>{
    console.log(numero1+numero2);
}
suma(9,3);

//FUNCIONES AUTOEJECUTABLES 
//funcion autoejecutable claaica
const saludo2 = (function(){
    console.log('Buenas noches');
})() //encapsulamos y con los parentisis se autoejecuta

//FUNCIONES ANONIMAS AUTOEJECUTABLES

//funcion moderna autoejecutable
//quitar funcion y poner flecha
const saludo3 = (()=>{
    console.log('Buenas Tardes');
})()

