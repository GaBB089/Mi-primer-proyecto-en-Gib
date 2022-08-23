let frase = "Mi perro es un pastor Aleman y es bueno";
let frase2 = " y es muy inteligente";

//ANCHOR: nos devuelve el texto envuelto en un enlace a
//console.log(frase.anchor());

//BIG: nos devuelve el texto en un formato mas grande
//document.write(frase.big());

//BOLD: nos devuelve el texto en negrita
//document.write(frase.bold());

//CHARAT: nos da el caracter que coincida con el numero que le pasemos como argumento
//document.write(frase.charAt(5));

//CHARCODE: nos devuelve el unicode que coincida con el numero que le pasemos por el argumento
//document.write(frase.charCodeAt(15));

//CONCAT: nos concatena o une un string al que ya tenemos y tambien nos permite pasar una variable
//document.write(frase.concat(' y es muy fuerte '+frase2))

//ENDSWIDTH: nos dice si el string acaba en el conjunto de caracteres o caracter que le indiquemos
//document.write(frase.endsWith('Aleman')); 

//FONTCOLOR: nos cambia el color de texto del string
//document.write(frase.fontcolor('red'));

//FONTSIZE: nos cambia el tamaño del texto pasandole un numero por el argumento
//document.write(frase.fontsize(15));

//INCLUDES: nos da true o false en funcion si el caracter o conjunto de caracteres que le indiquemos esta incluido 
//en el texto
//document.write(frase.includes('perro'));

//INDEXOF: si existe el indique le especifiquemos en el argumento nos da su posicion o si no nos da un -1
//document.write(frase.indexOf('pastor'));

//ITALICS: nos convierte el tezto en cursiva o en italica
//document.write(frase.italics());

//LASTINDEXOF: nos va a dar la ultima posicion de un conjunto de caracteres que le pasemos
//por el argumento y si no exitiera nos dara -1
//document.write(frase.lastIndexOf('no'));

//LENGTH: nos da la longitud de un strin incluidos los espacios
//document.write(frase.length);

//LINK: nos devuelve un enlace y le da el atrbuto por defecto href 
//document.write(frase.link('https://www.google.com'));

//MATCH: nos devuelve la coincidencia si existiera o de lo contrario nos devuelve null
//document.write(frase.match('perro'));

//REPEAT: nos devuelve el string repetido las veces que le indiquemos
//document.write(frase.repeat(2));

//REPLACE: nos permite reemplazar una parte del string por otro pasandole por el primer argumento lo que queremos cambiar
//y por el segundo la parte nueva
//document.write(frase.replace('pastor Aleman', 'Boxer'));

//SLICE: nos devuelve una porcion de cadena que le indiquemos entre dos numeros
//document.write(frase.slice(2,12));

//SMALL: hace que el string se vea mas pequeño 
//document.write(frase.small());
//document.write(frase);

//SPLIT: nos divide el string en substring mas pequeños que podemos decidir en cuantas porciones dividimos nuestro codigo
//document.write(frase.split(' ',15));

//STARWIDTH: nos da true o false en funcion si el primer caracter empieza por la letra que le pasemos por el argumento
//y hace distincion entre mayusculas y minisculas
//document.write(frase.startsWith('M'));

//SUB: nos da el string como si fuera un subtitulo
//document.write(frase.sub())

//SUBSTRING: nos devuelve una porcion de cadena entre 2 numeros que pasemos como argumentos incluyendo el primero
//pero no el segundo
//document.write(frase.substring(4,9));

//TOLACALELOWERCASE: covierte los caracteres en minuscula dentro del entorno local
//document.write(frase.toLocaleLowerCase());

//TOLOCALUPPERCASE: convierte los caracteres en mayuscula dentro del entorno local
//document.write(frase.toLocaleUpperCase());

//TOLOWERCASE: convierte la cadena en minuscula
//document.write(frase.toLowerCase());

//TOUPPERCASE: convierte la cadena en mayuscula
document.write(frase.toUpperCase());
