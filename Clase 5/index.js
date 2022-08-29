/* let nombre = "pepito";
let edad = 23;
let direccion = "av"; */

/* estructura objeto
{key1: value1, key2: value2, keyN: valueN}

 */

/* let persona = {
    nombre: "pepito",
    edad: 23,
    direccion: "AV"
};
console.log (persona.nombre);
console.log (persona.edad);
console.log (persona.direccion);
console.log (persona ["nombre"]);

let lugar ="direccion";
console.log (persona [lugar]);

persona ["nombre"] = "Juan";
persona.edad = 67;

console.log (persona); */

//FUNCIONES CONSTRUCTORAS - las funciones constructoras por buena practica llevan mayuscula en la variable


/* function Persona(nombre, edad, direccion){
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
}

const persona1 = new Persona ("pepito", 23, "AV");
const persona2 = new Persona ("Mariana", 22, "AV");
console.log (persona1.nombre);
console.log (persona2.nombre); */

/* function Persona (info){
    this.nombre = info.nombre;
    this.edad = info.edad;
    this.direccion = info.direccion;
    this.colorcabello = info.colorcabello;
    this.colorojos = info.colorojos;
}
let persona = new Persona ({
    nombre: "Damian",
    edad: 34,
    direccion: "AV",
    colorcabello: "Negro",
    colorojos: "Azul"
});
console.log (persona.edad); */

//LOS CUADRITOS DE MERCADO LIBRE QUE TIENEN LOS PRODUCTOS SE PUEDEN CREAR ASI
/* function Producto (img, precio, nombre){
    this.img = table.img;
    this.precio = tabla.precio;
    this.nombre = tabla.nombre;
}
let producto1 = new Producto({
    nombre: "Monitos Samsung",
    img: "https...",
    precio: 46000,
}) */

/* function Persona(nombre, edad, direccion){
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
    this.hablar = function() {console.log ("Hola soy + this.nombre")}
}
let persona1 = new Persona ("Maria", 45, "AV");
persona1.hablar (); */

/* let persona = {
    nombre: "pepito",
    edad: 23,
    direccion: "AV"
};
for(const propiedad in persona) {
    console.log(propiedad);
    console.log (persona [propiedad]);
} */

/* class Persona {
    constructor (nombre, edad, direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
    hablar (){
        console.log ("Hola soy + this.nombre");
    }
}
let persona1 = new Persona ("maria", 34, "AV");
console.log (persona1.edad); */

class Producto {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }
    vender (){
        this.vendido = true;
    }
}
let producto1 = new Producto("Televisor",10000);
let producto2 = new Producto("Plancha",10000);
console.log (producto1);
console.log (producto2);
producto1.vender ();
producto2.vender ();
console.log (producto1);
console.log (producto2);