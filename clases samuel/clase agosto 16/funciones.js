//funciones
//es un cnjunto de lineas de codigo que pueden retornar algo, nos ayuda para no repetir codigo
//sintaxis 
/* function nombrefuncion () {}
/*  las parametros (nombre)*/
/*function sumar (a,b) {
    return a + b
}
let total = sumar (10,20)
comsole.log */
function sumar(a, b) {
    return a + b
}
let total = sumar(10, 20)
console.log(total)

function saludar() {
    console.log("hola soacha")
}
saludar()

let nom = ["Vane", "Juan", "Johan", "Maicol", "Ana", "Alfonso", "Beos"]
t3 = Math.round(Math.random() * nom.length)

function saludar1() {
    console.log("hola " + nom[t3])
}
saludar1()