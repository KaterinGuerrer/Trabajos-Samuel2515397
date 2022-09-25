//Determinar si un numero es primo o no

function primo(num) {
    var cont = 0;
    for (let i = 1; i < num; i++) {
        num % i == 0 ? cont++ : cont = cont
    }
    //return cont>2? 'no primo': 'no primo';
    if (cont > 2) {
        return 'no primo'
    } else {
        return 'primo'
    }
}
console.log(primo(101))

var x = 10
x % 2 == 0 ? console.log('par') : console.log('impar')
    //condicion?valor si verdadero: valor si falso
    //Escriba una funcion que lea una cadena de texto y diga cuantas vocales tiene, cuantas consonantes y cuantas que no son ni vocales ni consonantes

function cadena(texto) {
    let a = vocales
    let b = consonantes
    if (a < b) { // true
        console.log(a + ' sus vocales son ' + b)
    } else if (a > b) {
        console.log(a + ' sus consonantes son ' + b)
    } else {
        console.log(a + ' y ' + b + ' ninguna es consonante ni vocal')
    }

}


//PROGRAMACION ORIENTADA A OBJETOS
//OBJETOS LITERALES
//JS=Es un lenguaje tipado
//JAVA= Es un lenguaje fuertemente tipado


class producto {

}
var producto1 = new producto();
var producto2 = new producto();
var producto3 = new producto();
var producto4 = new producto();
console.log(typeof(producto1))

//INSTANCIA = No son creados a partir de una clase

//OBJETOS LITERALES 
const x = [];
var a = {}
console.log(typeof(a));

var persona = {
    nombre: 'pedro perez',
    identificacion: 102354,
    datoscompletos: () => console.log(`${persona.nombre} ${persona.identificacion}`),
    //datoscompletos: ()=>console.log(`${this.nombre} ${this.idenficicacion}`),
}
console.log(persona.nombre);
console.log(persona['identificacion']);
persona.datoscompletos();
persona.direccion = 'cra con kra';
console.log(persona);
//CAMBIAR ATRIBUTO 
persona.nombre = 'Juan Ramirez';
console.log(persona);
//ELIMINAR OBJETOS
delete persona.identificacion;
console.log(persona);


//generar objetos literales para 4 figuras geometricas y hallarle el area y el perimetro

//OBJETO 1

var cuadraro = {
    arriba: 5,
    derecho: 5,
    abajo: 5,
    izquierda: 5,
    perimetro: () => {
        (console.log('el perimetro es ' + (cuadraro.arriba + cuadraro.derecho + cuadraro.abajo + cuadraro.izquierda)))
    },
    area: () => {
        (console.log('el area es ' + (cuadraro.derecho * cuadraro.izquierda)))
    }
}
cuadraro.perimetro();
cuadraro.area();

// OBJETO 2

var triangulo = {
    lado1: 16,
    lado2: 16,
    base: 12,
    perimetro: () => {
        (console.log('el perimetro es ' + (triangulo.lado1 + triangulo.lado2 + triangulo.base)))
    },
    area: () => {
        (console.log('el area es ' + (triangulo.base * triangulo.lado1)))
    }
}
triangulo.perimetro();
triangulo.area();

//OBJETO 3 

var rectangulo = {
    lado1: 20,
    lado2: 10,
    lado3: 20,
    lado4: 10,
    altura: 10,
    perimetro: () => {
        (console.log('el perimetro es ' + (rectangulo.lado1 + rectangulo.lado2 + rectangulo.lado3 + rectangulo.lado4)))
    },
    area: () => {
        (console.log('el area es ' + (rectangulo.lado3 * rectangulo.altura)))
    }
}
rectangulo.perimetro();
rectangulo.area();

//OBJETO 4

var circulo = {
    radio: 15,
    pi: 3.1416,
    perimetro: () => {
        (console.log('el perimetro es ' + (2 * circulo.pi * circulo.radio)))
    },
    area: () => {
        (console.log('el area es ' + (circulo.pi * circulo.radio ** 2)))
    }
}
circulo.perimetro();
circulo.area();

//funcion que recibe como parametro un objeto y decir si tiene la circinsferencia