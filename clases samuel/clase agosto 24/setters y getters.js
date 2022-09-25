/*MISION: Escriba métodos para suma, promedio, mayor, menor. 

/*METODOS PARA SUMAR CON FUNCION*/
function sumar(a, b, c) {
    return a + b + c;
}
let total = sumar(30, 50, 60)
console.log(total);

/*SUMAR UN ARRAY CON CICLO FOR*/

const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];

}
console.log(sum);



/*SACAR EL PROMEDIO */

function ArrayAvg(myArray) {
    var i = 0,
        sum = 0,
        ArrayLen = myArray.length;
    while (i < ArrayLen) {
        sum = sum + myArray[i++];
    }
    return sum / ArrayLen;
}
var myArray = [1, 9, 6, 3, 2];
var a = ArrayAvg(myArray);
console.log(a);

/*SACAR EL MAXIMO CON UN ARREGLO*/
//NULL para quitar el infinito 

function max(t) {
    v = []
    suma = 0
    for (let i = 0; i < t; i++) {
        v[i] = Math.round(Math.random() * 100)
    }
    console.log(v)
    console.log(Math.max.apply(null, v))
}
max(10)

/*SACAR EL MINIMO CON UN ARREGLO*/

function min(t) {
    v = []
    suma1 = 0
    for (let i = 0; i < t; i++) {
        v[i] = Math.round(Math.random() * 100)
    }
    console.log(v)
    console.log(Math.min.apply(null, v))
}
min(10)

/*Escriba una clase que represente un producto comercial de cualquier área. Debe tener constructor, setters, getters y un método para calcular el valor despues de IVA*/

/*Una función que obtiene un valor de una propiedad se llama getter y una que establece el valor de una propiedad se llama setter.*/

/*********************************** */
class carro {
    constructor(nombre, peso, color, precio) {
        this.nombre = nombre;
        this.peso = peso;
        this.color = color;
        this.precio = precio;
    }
    get iva() {
            return this._iva
        }
        // Setter
    set iva(iva) {
        let pv = this.precio * iva
        console.log('El iva es', pv)
        let total = this.precio + pv
        console.log('El precio total es', total)
    }
}

let carro1 = new carro("LOGAN", 3.4, "gris", 80000000)
console.log(carro)
carro1.iva = (0.19);



/*EJERCICIOS DEL LIBRO*/
//EJERCICIO 1
class persona {
    constructor(primernombre, apellido) {
        this.primernombre = primernombre;
        this.apellido = apellido;
    }
}

let pe = new persona('Johan', 'Marquez')
console.log('hola', pe.primernombre, pe.apellido)

let p1 = new persona('Katerin', 'Guerrero')
console.log('Hola ', p1.primernombre, p1.apellido)

//EJECICIO 2

class persona {
    constructor(primernombre, apellido) {
        this.primernombre = primernombre;
        this.apellido = apellido;
        this.nombre = this.primernombre + ' ' + this.apellido
    }
}

let per = new persona('Johan', 'Marquez')
console.log(per.nombre)

let p2 = new persona('Katerin', 'Guerrero')
console.log(p2.nombre)