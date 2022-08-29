// SIMULADOR PARA CALCULAR PROMEDIO DE DOS PARCIALES Y SABER SI EL ALUMNO APROBO O NO
let nombre = "Juan";
let apellido = "Rodriguez";

function sumar (primerParcial, segundoParcial) {
    return (primerParcial + segundoParcial) / 2;
}

let notafinal = sumar (5,7) // Reemplazar esta variable para obtener promedios
console.log ("La nota de" + " " + nombre + " " + apellido + " " + "es:" + notafinal);
if (notafinal < 7) {
    console.log (nombre + " " + apellido + " " + "ha desaprobado");
}
else { 
    console.log (nombre + " " + apellido + " " + "ha aprobado");
}