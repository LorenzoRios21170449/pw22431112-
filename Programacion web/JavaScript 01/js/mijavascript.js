document.write("<h1>Hola</h1>");
console.log("Consola desde JS");

//variables
let x=1;
console.log(typeof(x));
let esPW=false;
console.log(typeof(esPW));

if(esPW){
console.log("estamos en clase");
}else{
console.log("no estamos en clase");
}

let numero= -2324.2323232;
console.log(numero);

let cadena="una cadena 'comillas'"
console.log(cadena);

let cadena2='Otra cadena'
console.log(cadena2);

let cadena3=`Otra cadena
incluso puedo tener renglones
y variables ${numero}`;
console.log(cadena3);

let id1=Symbol("id");
let id2=Symbol("id");
console.log(id1);
let usuario={nombre:"Lorenzo",[id1]:123};
console.log(usuario.nombre+" "+usuario[id1]);

let variablenula=null;
console.log(variablenula);

const PI=3.1416;
console.log(PI);

let arreglo=[];
console.log(arreglo);
arreglo=[1,2,3];
console.log(arreglo);
arreglo.push(4);
console.log(arreglo);
arreglo.pop();
console.log(arreglo);
arreglo.shift();
console.log(arreglo);
arreglo.unshift(10);
console.log(arreglo);

let objeto ={nombre:"Lorenzo",edad:21}
console.log(Object.keys(objeto));
console.log(Object.values(objeto));
console.log(Object.entries(objeto));

alert("alerta en pantalla");

let edad=prompt("dame la edad",0);
console.log(edad);