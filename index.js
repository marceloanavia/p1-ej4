"use strict";

/* TODO */

let confirmar;

let ciudad = "";
let sexo = "";
let edad = 0;

let edadTotal = 0;
let edadTotalMujer = 0;
let edadTotalHombre = 0;
let persona = 0;
let hombre = 0;
let mujer = 0;

let mujerMax = 0;
let hombreMin = 110;

let mujerMenor = 0;
let porcentajeMujer = 0;
let hombreMayor = 0;
let porcentajeHombre = 0;


do {
/* validaciones */
do{
    ciudad = prompt("Ingresar ciudad");
} while (!isNaN(ciudad));

while(!isNaN(sexo) || (sexo !== "M" && sexo !== "H")) {
    sexo = prompt("Ingresar sexo").toUpperCase();
}

do{

    edad = parseInt(prompt("Ingresar edad"));

    /* promedios */
    edadTotal += edad;
    persona++;
    if (sexo == "M"){
        edadTotalMujer += edad;
        mujer++;
    } else{
        edadTotalHombre += edad;
        hombre++;
    }

    /* porcentajes */
    if (sexo == "M" && edad < 21){
        mujerMenor++;
    } else if (sexo == "H" && edad > 21){
        hombreMayor++;
    }

    /* minimos maximos */
    if (sexo == "M" && edad > mujerMax){
        mujerMax = edad;
    } else if (sexo == "H" && edad < hombreMin){
        hombreMin = edad;
    }
    
    /* eliminar 110 minimo */
    if (hombre == 0){
        hombreMin = 0;
    }

    var flagEdad = true;
    if (isNaN(edad)) {
        flagEdad = false;
        alert("Ingresar valor numérico");
    } else if (edad < 0 || edad > 110){
        flagEdad= false;
        alert("Debe estar entre 0 y 110");
    }

} while (!flagEdad);

confirmar = confirm("¿Seguir?");
sexo = "";
} while(confirmar == true);

/* calculo porcentajes */
porcentajeMujer = (mujerMenor * 100) / mujer;
porcentajeHombre = (hombreMayor * 100) / hombre;

alert(`promedio de edad total = ${edadTotal / persona} // promedio de edad de las mujeres = ${edadTotalMujer / mujer} // promedio de edad de los hombres = ${edadTotalHombre / hombre}`);
alert(`el porcentaje de mujeres menores de 21 es = ${porcentajeMujer} // el porcentaje de hombres mayores de 21 es = ${porcentajeHombre}`);
alert(`la mayor edad ingresada de las mujeres es = ${mujerMax} // la menor edad ingresada de los hombres es = ${hombreMin}`);
































/*
let ciudad;
let sexo;
let edad;

let persona = 0;


let hombre = 0;
let mujer = 0;

let edadHombre = 0;
let edadMujer = 0;

let mayorHombre = 0;
let menorMujer = 0;

let promedioHombre = 0;
let promedioMujer = 0;

let minHombre = 110;
let maxMujer = 0;

do {

    ciudad = prompt("Ingresar ciudad");
    sexo = prompt("Ingresar sexo (M o H)").toLowerCase();
    edad = parseInt(prompt("Ingresar edad"));

persona++;

if (sexo == "m" && edad < 21){
    mujer++;
    edadMujer += edad;
    menorMujer++;
} else if (sexo == "m"){
    mujer++;
    edadMujer += edad;
}

if (sexo == "h" && edad >= 21){
    hombre++;
    edadHombre += edad;
    mayorHombre++;
} else if (sexo == "h"){
    hombre++;
    edadHombre += edad;
}

// min y max
if (hombre > 0 && edad < minHombre) {
    minHombre = edad;
} else {
    minHombre = 0;
}

if (mujer > 0 && edad > maxMujer){
    maxMujer = edad;
}

} while (confirm("¿Seguir?"));

//promedios edad
promedioHombre = edadHombre / persona;

promedioMujer = edadMujer / persona;

alert(`Promedio de edad = ${(edadMujer + edadHombre) / persona} // promedio de edad de las mujeres = ${promedioMujer} // promedio de edad de los hombres = ${promedioHombre} // porcentaje de mujeres menores de 21 años = ${(mujer * menorMujer) / 100}% // porcentaje de hombres mayores de 21 años = ${(hombre * mayorHombre) / 100}% // mayor edad ingresada de las mujeres = ${maxMujer} // menor edad ingresada de los hombres = ${minHombre}`);

*/