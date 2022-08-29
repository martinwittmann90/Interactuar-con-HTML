/* Estrucutra del For 

for(desde; hasta; actualizacion) {
    codigo a repetir
}
*/

//i++ es igual a i=i+1

/*  CONTADOR DE HOLAS REPETIDOS
for (let i = 0; i < 100; i++) { 
    //el let puede empezar en 1,2 etc, si pongo let i=2. Tambien podria ser, en vez de i++, i = i + 2, y asi va de dos en dos. 
console.log ("hola",i);
}
console.log ("terminamos"); */

/* CARTEL GENERICO CON REPETICION Y FINAL
for (let i = 0; i < 3; i++){
    alert ("hola");
}
alert ("terminamos"); */


/* TABLA DE MATEMATICA
let numero = parseInt(prompt("ingresar un numero"));
for(let i = 0; i <=10;i++){
    let resultado = numero * i;
    let mensaje = `${numero} * ${i} = ${resultado}`;
    alert (mensaje);
} */

/* SISTEMA DE TURNOS
for (let i = 0; i <= 10; i++) {
    let nombre = prompt ("ingrese su nombre");
    let mensaje = `Turno #${i} Nombre: ${nombre}`;
    alert(mensaje);
}
 */

//BREAK
/* SIRVE PARA ARMAR UNA LISTA Y QUE CORTE CUANDO ENCUENTRA EL DATO BUSCADO
for (let i=0; i <=10; i++) {
    if (i == 5) {
        break;
    }
    console.log ("hola");
}
console.log ("terminamos"); */

//CONTINUE
/* BUSCA EL NUMERO HASTA ENCONTRARLO, CUANDO LO ENCUENTRA LO SALTEA. DEJA DE ACTUALIZAR Y LUEGO INCREMENTA
for (let i=0; i <=10; i++) {
    if (i == 5) {
        continue;
}
console.log ("i");
}
console.log ("terminamos"); */

/* BUCLE INFINITO, USA TODA LA MEMORAIA DE LA PC, ES PELIGROSO
let repetir = true;
while (repetir) {
    console.log ("hola");
} */


/* SIMULAR INGRESO USUARIO
let usuario = prompt("ingrese usuario");
while(usuario != "andres"){
    alert("usuario incorrecto");
    usuario = prompt("ingrese el usuario");
}
alert("bienvenido"); */

/* DO...WHILE, NO ES MUY USADO EN LA VIDA REAL
do {
    let numero = parseInt(prompt ("ingrese un numero"));
} while (numero !=5) */

/* Estructura del SWITCH
switch(valor){
    case value1:
        codigo a ejecutar
        break;
    case value2:
        codigo a ejecutar
        break;
    default
        codigo a ejecutar
        break;
}
*/
/* DETECTOR DE MONEDAS CON SWITCH
let moneda = "usd";
switch(moneda) {
    case "cop":
    console.log ("es de colombia");
    break;
    
    case "ars":
    console.log ("es de argentina");
    break;

    case "clp":
    console.log ("es de chile");
    break;

    default:
        console.log ("ingresaste una moneda diferente");
        break;
} */
/* SALUDA POR NOMBRE PRESTABLECIDO HASTA QUE TIPEO ESC
let entrada = prompt ("ingresar un nombre");
while (entrada !="ESC") {
    switch (entrada) {
    case "ANA":
        alert ("HOLA ANA");
        break;

        case "JUAN":
            alert ("HOLA JUAN");
            break;

            case "LOLA":
                alert ("HOLA LOLA");
                break;
    default:
        alert ("¿QUIEN SOS?");
        break;
}
entrada = prompt ("ingresar un nombre");
} */