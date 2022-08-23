//CONCATENACION TRADICIONAL

let frase = "Me gusta mucho pasear";
let frase2 = ", por la playa ";
let frasetotal = frase + frase2;
console.log(frasetotal);
document.write(frasetotal);

let sitio1 = 'al cine';
let frase4 = 'Me gusta ir mucho '+sitio1+' por la noche';
console.log(frase4);

//CONCATENACION MODERNA

//` ctrl + alt + } para que salga esta comilla ````````````
let sitio = 'el cine';
let frase3 =`Me gusta ir mucho a ${sitio}`;
console.log(frase3);