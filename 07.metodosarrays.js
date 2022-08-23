//METODOS DE LOS ARRAYS

const frutas = ['banana',
    'manzana',
    'pera',
    'melon',
    'uva',
    'sandia'
]

const verduras = ['lechuga',
    'pepino',
    'tomate'
]

const empresa = [
    {
        id: 0,
        nombre: "Javier",
        apellidos: "Garcia Gutierrez",
        edad: 34
    },
    {
        id: 1,
        nombre: "Pedro",
        apellidos: "Perez Gomez",
        edad: 34
    },
    {
        id: 2,
        nombre: "Andres",
        apellidos: "Segovia Lopez",
        edad: 34
    },
    {
        id: 3,
        nombre: "Gabriel",
        apellidos: "Gonzalez Cruz",
        edad: 33
    }
]

//CONCAT : Nos une dos arrays o añade elementos al array
//console.log(frutas.concat('limon'));

//EVERY : nos obliha a que todos los elemento del array cumplan una determinada condicion
/*frutas.every(fruta => {
    console.log(fruta=='sandia');
})*/

//SOME : nos devuelve elemento por elemento si son true o false

/*frutas.some(fruta => {
    console.log(fruta==='sandia')
})*/

//FILTER: nos filtra el array y nos devuelve otro array con las condiciones que le indiquemos
//si fruta tiene mas de 5 caracteres
/*frutas.filter(fruta =>{
    if(fruta.length>5){
        console.log(`${fruta} tiene mas de 5 caracteres`);
    }else{
        console.log(`${fruta} tiene menos de 5 caracteres`);
    }
});

//FIND : nos busca las coincidencias que le digamos

frutas.find(fruta => {
    if(fruta === 'sandia'){
        console.log(fruta);
    }
});*/

//FOREACH : por cada elemento nos recorre el array

/*frutas.forEach(fruta => {
    if (fruta.length >= 5) {
        console.log(fruta);
    }
});*/

//INCLUDES : nos da true o false en funcion si existe ese elemento del array
//console.log(frutas.includes('banana'));

//INDEXOF: nos devuelve un numero negativo si no encuntra el elemento en el array y si lo encuentra no sdice la
//posicion que ocupa
//console.log(frutas.indexOf('uva'));

//JOIN : nos sepera los elementos del array segun le indiquemos
//console.log(frutas.join('/'));

//LASTINDEXOF : nos devuelve el ultimo valor
//INDEXOF: nos devuelve el primer valor
//console.log(frutas.lastindexOf('uva'));

//LENGTH(propiedad) : mide la longitud del array
//console.log(frutas.length);

//MAP : nos itera los arrray y arrays de objetos y nos devuelve un array
/*empresa.map(em => {
    document.body.innerHTML += `
    
<ul>
    <li>
        Id:${em.id}<br>
        Nombre:${em.nombre}<br>
        Apellidos:${em.apellidos}<br>
        Edad:${em.edad}<br>
    </li>
</ul>
    `
});*/

//POP : elimina el ulitmo elemento de un array y nos lo devuelve
//console.log(frutas.pop());
//console.log(frutas);

//PUSH; agrega al final del array y el nuevo elemento que le indiquemos y nos devuelve la longitud del array 
//con el nuevo elemento
//console.log(frutas.push('fresa'));
//console.log(frutas);

//REDUCE: reduce el arrray a un solo elemento
/*frutas.reduce(fruta => {
    console.log(fruta);
});*/

//REVERSE: nos devuelve el array invertido
//console.log(frutas.reverse());

//SLICE: nos devuelve los indices comprendidos entre el primer indice que le indiquemos y el segundo y no los incluye
//console.log(frutas.slice(1,4));

//SORT: Nos ordena el array alfabeticamente
//console.log(frutas.sort());

//UNSHIFT: nos agrega al principio del array el elemento que le indiquemos
//console.log(frutas.unshift('mango'));
//console.log(frutas);

//SHIFT: nos elimina el primer elemento del array 
//console.log(frutas.shift());
//console.log(frutas);

//SPLICE: nos da los elementos entre 2 indices
//1.ponemos desde donde queremos que empiece a contar
//2.cuantos elementos va a eliminar 
//3.y si va a añadir mas elementos los incerta al inicio del array
frutas.splice(0, 0, 'aguacate', 'kiwi');
console.log(frutas);    
