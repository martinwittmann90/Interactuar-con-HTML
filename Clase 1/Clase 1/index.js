// Comentario de linea
/* Comentario de Bloque */
/* Una variable es un espacio en memoria. Es un espacio de la ram (un cajon en la ram), identifica ese espacio, en ese espacio se puede guardar cosas */
/* Declarar una variable, ejemplo donde defino mi primer variable: */
/* let unnombre; */ /* nombre del cajon donde quiero guardar cosas en esa variable */
/* Con Var tambien se puede declarar varibles pero es una mala practica */
/* Constante: algo que durante todo el codigo no va a cambiar. Siempre que asigno una constante la tengo que declarar */
/* const Edad=15; */
/* Asginacion: las asignaciones las ponemos entre comillas,  */

/* nombre = "andres"; */

/* Se puede declarar y asignar a la misma vez */
/* apellido = "andres"; */

/* Hay distintos tipos de valores, ejemplo: number y string*/

/* Para declaracion de variables usamos camel case (es una buena practica de js), la segunda palabra arranca con una mayuscula, si hay mas palabras tmb arranca con mayuscula esas palabras */
/* let numeroUno = 2;
let numeroDos = 10;
const NUMEROTRES = 20;
let suma = numeroUno + numeroDos;

let saludo = "Hola";
let nombre = "Camilo"; */

/* El + lo que hace es unir valores */
/* let mensaje = saludo + " " + nombre; */

/* Comando fundamental, es una funcion de lenguaje que ayuda a trabajar con JS, lo que hace es mostrar por consola lo que tiene una variable en ese momento*/
/* Se encarga de mostrar informacion en pantalla */
/* console.log ("aca vemos un valor", suma) */

/* COMANDO PROMPT, permite crear cuadros de dialogo que se pueden completar desde la pagina */
/* let saludo = "Hola";
let entrada = prompt ("ingrese su nombre");
let salida = entrada + " " + "ingresada";
console.log (saludo + entrada);
alert(salida); */
/* ALERT */

/* ParseInt y ParseFloat dice que lo que ingeso como valor tiene pontencial para ser numero */

/* Ejemplo */
let saludo = "Hola";
let nombre = prompt ("ingrese su nombre")
let apellido = prompt ("ingrese su apellido")
let bienvenido = saludo + " " + nombre +  " " + apellido;
alert (bienvenido);
console.log (nombre + apellido);
/* ` (llamada backtiks) sirve para crear un string que puedo meter dentro variables dentro, ejemplo:
*/
/* let mensaje = `${saludo} */
let salida = `valores ingresados: ${valor1} y ${valor2}`;
