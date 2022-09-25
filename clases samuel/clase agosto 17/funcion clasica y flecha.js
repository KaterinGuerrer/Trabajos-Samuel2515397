//mision:
//cinco de cada programas de ciclos y condicionales tener dos funciones clasica y flecha
//CICLOS
/*CONDICIONALES*/

/*1-Pedir 3 numeros e indicar cual de ellos es el valor del medio. 
Ej 11, 2  1000, el  valor del medio es 11. No use operadores lógicos */

//FUNCION CLASICA PUNTO 1 CONDICIONAL
function numero(a, b, c) {
    if (b < a && b < c) {
        console.log('el segundo numero es el menor', b)
    } else if (a < b && a < c) {
        console.log('el primer numero es menor', a)
    } else {
        console.log('el tercer numero es menor')
    }
}
numero(4, 2, 3)


//FUNCION FLECHA PUNTO 1 CONDICIONAL

const numero = (a, b, c) => { if (b < a && b < c) { console.log('el segundo numero es el menor', b) } else if (a < b && a < c) { console.log('el primer numero es menor', a) } else { console.log('el tercer numero es menor', b) } }
numero(2, 3, 4);

/*4-Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien,  etc.
 Use la escala que prefiera, pero cerciórese que tiene 5 valores */

//FUNCION CLASICA PUNTO 4 CONDICIONAL

function notas(n) {
    if (n == 10) {
        return console.log('su nota es la maxima')
    } else if (n > 8) {
        return console.log('su nota es excelente')
    } else if (n > 6) {
        return console.log('su nota es regular')
    } else if (n > 4) {
        return console.log('su nota mala')
    } else {
        return console.log('su nota es baja')
    }
}
notas(10);

//FUNCION FLECHA PUNTO 4 CONDICIONAL

const notas = (n) => { if (n == 10) { console.log('Su nota es excelente') } else if (n > 8) { console.log('Su nota es superior') } else if (n > 6) { console.log('su nota es regular') } else if (n > 4) { console.log('su nota mala') } else { console.log('su nota es baja') } }
console.log(notas(8));

/*2-Escribe un programa que pida tres números y que escriba si son los tres  iguales, 
si hay dos iguales o si son los tres distintos */

//FUNCION CLASICA PUNTO 2 CONDICIONAL

function digitos(a, b, c) {
    if (a == b && a == c) {
        console.log('Los digitos son iguales', [a, b, c])
    } else if (b == a && b == c) {
        console.log('Los digitos son iguales', [a, b, c])
    } else if (c == a && c == b) {
        console.log('Los digitos son iguales')
    } else if (a != b && a != c) {
        console.log('Los digitos son diferentes', [a, b, c])
    } else if (b != a && b != c) {
        console.log('Los digitos son diferentes', [a, b, c])
    } else if (c != a && c != b) { console.log('Los digitos son diferentes', [a, b, c]) }
}
digitos(2, 3, 2);

//FUNCION FLECHA PUNTO 2 CONDICIONAL

const digitos = (a, b, c) => {
    if (a == b && a == c) { console.log('Los digitos son iguales', [a, b, c]) } else if (b == a && b == c) { console.log('Los digitos son iguales', [a, b, c]) } else if (c == a && c == b) {
        console.log('Los digitos son iguales')
    } else if (a != b && a != c) { console.log('Los digitos son diferentes', [a, b, c]) } else if (b != a && b != c) { console.log('Los digitos son diferentes', [a, b, c]) } else if (c != a && c != b) { console.log('Los digitos son diferentes', [a, b, c]) }
}
digitos(2, 1, 3);

//FUNCION CLASICA PUNTO 6 CONDICINAL

/*6. Pida un numero al usuario que representa días del año. Diga a que mes del año 
corresponde así. Si el número es menor o igual a 31 indica que esta en enero, 
Pero si el número por ejemplo es 32 indica que es el 1 de febrero. No tenga en 
cuenta si el año es bisiesto, es decir siempre febrero tiene 28 días.*/

//FUNCION CLASICA PUNTO 6 CONDICINAL
function numero(n) {
    if (n <= 0) {
        console.log(" Mes no valido")
    } else if (n <= 31) { console.log("PERTENECE A ENERO") } else if (n < 59) { console.log("PERTENECE A FEBRERO") } else if (n < 90) { console.log("PERTENECE A MARZO") } else if (n < 120) { console.log("PERTENECE A ABRIL") } else if (n < 151) { console.log("PERTENECE A MAYO") } else if (n < 181) { console.log("PERTENECE A JUNIO") } else if (n < 212) { console.log("PERTENECE A JULIO") } else if (n < 243) { console.log("PERTENECE A AGOSTO") } else if (n < 270) { console.log("PERTENECE A SEPTIEMBRE") } else if (n < 304) { console.log("PERTENECE A OCTUBRE") } else if (n < 334) { console.log("PERTENECE A NOVIEMBRE") } else { console.log("PERTENECE A DICIEMBRE") }
}
numero(10);

//FUNCION FLECHA PUNTO 6 CONDICIONAL

const numero = (n) => {
    if (n <= 0) { console.log(" Mes no valido") } else if (n <= 31) { console.log("PERTENECE A ENERO") } else if (n < 59) { console.log("PERTENECE A FEBRERO") } else if (n < 90) {
        console.log("PERTENECE A MARZO")
    } else if (n < 120) { console.log("PERTENECE A ABRIL") } else if (n < 151) { console.log("PERTENECE A MAYO") } else if (n < 181) { console.log("PERTENECE A JUNIO") } else if (n < 212) { console.log("PERTENECE A JULIO") } else if (n < 243) {
        console.log("PERTENECE A AGOSTO")
    } else if (n < 270) { console.log("PERTENECE A SEPTIEMBRE") } else if (n < 304) { console.log("PERTENECE A OCTUBRE") } else if (n < 334) { console.log("PERTENECE A NOVIEMBRE") } else { console.log("PERTENECE A DICIEMBRE") }
}
numero(10);


/*3. Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el número 
exceda los límites emita un mensaje y finalice el programa*/

//FUNCION CLASICA PUNTO 3 CONDICIONAL

function numero(n) {
    if (n < 10) {
        console.log("tiene 1 cifra");
    } else if (n < 100) {
        console.log("tiene 2 cifras");
    } else if (n < 1000) {
        console.log("tiene 3 cifras");
    } else if (n < 10000) {
        console.log("tiene 4 cifras");
    }
}
numero(245);

//FUNCION FLECHA PUNTO 3 CONDICIONAL

const numero = (n) => { if (n < 10) { console.log("tiene 1 cifra"); } else if (n < 100) { console.log("tiene 2 cifras"); } else if (n < 1000) { console.log("tiene 3 cifras"); } else if (n < 10000) { console.log("tiene 4 cifras"); } }
numero(245);


/*CICLOS */

//FUNCION CLASICA PUNTO 1 CICLOS 

/*1-Determinar los divisores de un  número introducido por 
teclado */

//FUNCION CLASICA PUNTO 1 CICLO

function divisor(n) {
    let d = 0
    for (i = 1; i <= n; i++) {
        if (n % i == 0) {
            console.log(i)
        }
    }
}
(divisor(10))


//FUNCION FLECHA PUNTO 1 CICLO

const divisor = (n) => {
        let d = 0
        for (i = 1; i <= n; i++) { if (n % i == 0) { console.log(i) } }
    }
    (divisor(10))


/*5-¿Cuáles y cuántos son los números primos comprendidos 
entre 1 y 1000? */

//FUNCION CLASICA PUNTO 5 CICLO

function numeros_primos(c, x) {
    var c = 0
    for (n = 0; n <= 1000; n++) {
        x = 0
        c = 0
        while (x < n) {
            x = x + 1
            if (n % x == 0) {
                c++
            }
        }

        if (c == 2) {
            console.log(n + " es primo")
        }
    }
}
(numeros_primos(20));

//FUNCION FLECHA PUNTO 5 CICLO

const numeros_primos = (c, x) => {
        var c = 0
        for (n = 0; n <= 1000; n++) {
            x = 0, c = 0
            while (x < n) {
                x = x + 1
                if (n % x == 0) { c++ }
            }
            if (c == 2) { console.log(n + " es primo") }
        }
    }
    (numeros_primos(20));

/*2-Determinar si un numero es o no es primo */

//FUNCION CLASICA PUNTO 2 CICLO

function n_primo(n) {
    var c = 0
    console.log
    for (x = 1; x <= n; x++) {
        var d = n % x
        if (d == 0) {
            c = c + 1
        }
    }
    if (c == 2) {
        console.log(n + " es primo")
    } else console.log('no es primo')
}
(n_primo(3));

//FUNCION FLECHA PUNTO 2 CICLO

const n_primo = (n) => {
        var c = console.log
        for (x = 1; x <= n; x++) {
            var d = n % x
            if (d == 0) { c = c + 1 }
        }
        if (c == 2) { console.log(n + " es primo") } else console.log('no es primo')
    }
    (n_primo(3));


/*8. Determinar cuales son los múltiplos de 5 comprendidos entre 
1 y N.*/

//FUNCION CLASICA PUNTO 8 CICLO
function multiplos(n) {
    var n = Math.round(Math.random() * 100)
    for (i = 1; i < n; i++) {
        m = 5 * i
        console.log('los multiplos de 5 son: ' + m)
    }
}
multiplos(25);

//FUNCION FLECHA PUNTO 8 CICLO

const multiplos = (n) => {
    var n = Math.round(Math.random() * 100)
    for (i = 1; i < n; i++) {
        m = 5 * i
        console.log('los multiplos de 5 son: ' + m)
    }
}
multiplos(25);

/*4-Determinar cuales y cuantos números perfectos hay entre 1 y 1000? */

//FUNCION CLASICA PUNTO 4 CICLO

function n_perfectos(n, c, p) {
    var n = 1,
        c = 0,
        p = 0
    console.log
    for (i = 1; i <= 1000; n++) {
        while (i < n) {
            d = n % i
            i += 1
            if (d == 0) {
                c = c + i
                console.log(c)
            }
            if (c == n) {
                console.log(n + ' es un numero perfecto')
            } else {
                console.log(n + ' no es un numero perfecto')
            }
        }
    }
}
(n_perfectos(3));

//FUNCION FLECHA PUNTO 4 CICLO

const n_perfectos = (n, c, p) => {
        var n = 1,
            c = 0,
            p = 0
        console.log
        for (i = 1; i <= 1000; n++) {
            while (i < n) {
                d = n % i, i += 1
                if (d == 0) {
                    c = c + i
                    console.log(c)
                }
                if (c == n) { console.log(n + ' es un numero perfecto') } else { console.log(n + ' no es un numero perfecto') }
            }
        }
    }
    (n_perfectos(3));



/*DESVIACION ESTANDAR*/

function desviacion(t) {
    let v = []
    let sum = 0
    for (let i = 0; i < t; i++) {
        v[i] = Math.round(Math.random() * 20)
        sum = sum + v[i]
    }
    var prom = sum / 5
    let oper1 = ((v[0] - prom) * 2) + ((v[1] - prom) ** 2) + ((v[2] - prom) ** 2) + ((v[3] - prom) ** 2) + ((v[4] - prom) * 2)
    let opr2 = oper1 / 5
    let ope3 = Math.trunc(opr2)
    v.sort();
    console.log('el arreglo es', v)
    console.log('La suma de todo es', sum)
    console.log('El promedio es', prom)
    console.log('la suma es ', oper1)
    console.log('dividido por los valores es', opr2)
    console.log('al final la desviacion estandar', ope3)
}
desviacion(5)

/*MODA numero que mas se repite*/

const numeros = [1, 2, 2, 3, 4, 4, 5];
let duplicados = [];

const tamArray = [...numeros].sort();

for (let i = 0; i < tamArray.length; i++) {
    if (tamArray[i + 1] === tamArray[i]) {
        duplicados.push(tamArray[i]);
    }
}

console.log(duplicados);


/*MEDIANA numero del centro*/

function medianaArr(arr1) {
    var concat = arr1;
    concat = concat.sort(
        function(a, b) { return a - b });

    console.log(concat);
    var length = concat.length;

    if (length % 2 == 1) {

        console.log(concat[(length / 2) - .5])
        return concat[(length / 2) - .5]
    } else {
        console.log((concat[length / 2] +
            concat[(length / 2) - 1]) / 2);

        return (concat[length / 2] +
            concat[(length / 2) - 1]) / 2;
    }
}
arr1 = [1, 4, 5, 7, 9, 10, 11]

medianaArr(arr1)