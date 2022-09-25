// Úselo if para especificar un bloque de código que se ejecutará, si una condición especificada es verdadera
var x = Math.round(Math.random() * 100)
if (x < 50) {
    console.log("su numero " + x + " es menor a 50")
}
//Se usa else para especificar un bloque de código a ejecutar, si la misma condición es falsa
var x = Math.round(Math.random() * 100)
if (x < 50) {
    console.log("su numero " + x + " es menor a 50")
} else {
    console.log("su numero " + x + " es mayor a 50")
}
//Úselo else if para especificar una nueva condición para probar, si la primera condición es falsa
var x = Math.round(Math.random() * 100)
if (x < 50) {
    console.log("el numero " + x + " es menor a 50")
} else if (x = 50) {
    console.log("su numero es igual a 50")

} else {
    console.log("su numero " + x + " es mayor a 50")
}
//Úselo switchpara especificar muchos bloques alternativos de código para ejecutar
var x = Math.round(Math.random() * 100)
if (x < 50) {
    console.log("el numero " + x + " es menor a 50")
} else if (x = 50) {
    console.log("su numero es igual a 50")

} else {
    console.log("su numero " + x + " es mayor a 50")
}

/****************************************************/

/*Utilice la switchinstrucción para seleccionar uno de los muchos bloques de código que se ejecutarán
- case se usa para comprar el valor de la variable con otra valor y si es esa varriable sigue
- break permite salirse del switch
- selectores JavaScript permite encontrar y seleccionar elementos del DOM ( estructura, que podemos modificar 
de forma dinámica desde Javascript, añadiendo nuevas etiquetas, modificando o eliminando otras, cambiando sus
atributos HTML) bien sea para extraer información de cada nodo o para manipularlos de ser necesario*/
var dia = Math.round(Math.random() * 6)
switch (dia) {
    case 0:
        dia = "Lunes";
        break;
    case 1:
        dia = "Martes";
        break;
    case 2:
        dia = "Miercoles";
        break;
    case 3:
        dia = "Jueves";
        break;
    case 4:
        dia = "Viernes";
        break;
    case 5:
        dia = "Sabado";
        break;
    case 6:
        dia = "Domingo";
}
console.log(dia)