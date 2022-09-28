//PROMESAS

// Esencialmente, una promesa es un objeto devuelto al cual se adjuntan funciones callback, en lugar de pasar callbacks a una función.
//Las promesas en Javascript se representan a través de un objeto y cada promesa estará en un estado concreto: pendiente, aceptada o rechazada. 

//se puede cambiar el nombre del resolve y el reject pero no se pueden colocar mas de 2
//then(). se trata del mensaje que lo mostraremos usando un console.log() //Ejecuta la función callback resolve cuando la promesa se cumple.  
//catch captura el resultado fallido o reject de la promesa //Ejecuta la función callback reject cuando la promesa se rechaza.
//Las promesas se crean usando un constructor llamado Promise y pasándole una función que recibe dos parámetros, resolve y reject, que nos permiten indicarle a esta que se resolvió o se rechazó.

//ejemplo 1
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('este es el valor que eventualmente devolverá la promesa');
    }, 300);
});
console.log(miPromesa);
const otraPromesa = Promise.resolve("este es el valor que eventualmente devolverá la promesa")
console.log(otraPromesa);

/************************************************** */

const promesa = new Promise((resolve, reject) => {
    const num = Math.round(Math.random() * 12);
    console.log(num)
    setTimeout(() => num > 4 ?
        resolve(num) :
        reject(new Error('Menor a 4')), 4000
    );
});
promesa
    .then(num => console.log(num))
    .catch(error => console.error(error));


/********************************************* */

function base() {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve();
            setTimeout(() => {
                console.log('Linea de codigo dentro de la funcion promesa')
            }, 500);
        } else {
            reject()
        }
    });
}
base()
    .then(() => {
        console.log('En el .then');
        return 1000;
    })
    .then((dato) => {
        console.log('En el then 2 recibo=', dato)
    })
    .catch(error => console.log('.....,error'))

function auxiliar() {
    console.log('Funcion Auxiliar');

}
/************************************************** */
const mifuncion = new Promise((resolve, reject) => {
    resolve();
    setTimeout(() => {
        console.log('Linea de codigo dentro de la funcion promesa')
    }, 500);
});
base()
    .then(() => {
        console.log('En el .then');
    })
    .then(auxiliar) //hoisting
    .catch(error => console.log('.....,error'))

function auxiliar() {
    console.log('Funcion Auxiliar');
}

/********************************************************* */





//libro leer promesas ASYNG Y AWAIT y terminar los ejercicios de las sumas y la tarea con then y catch, ademas de ASYNG Y AWAIT


/***************************************************** */
/*
function trabajoArreglos(cb1, ) {
    return new Promise((resolve, reject) => {
        let vec1 = []
        if (cb1) {
            resolve();
            setTimeout(() => {
                console.log(vec1)
            }, 1000);
        }

        vec1 = cb1(vec1);
        console.log(cb2(vec1));
    });
}

llenarArreglo(vec)
    .then(() => {
        for (let i = 0; i < 10; i++) {
            vec[i] = Math.round(Math.random() * 100)
        }
        return vec;
    })



sumarArreglo(vec)
    let suma = 0
    for (let i = 0; i < vec.length; i++) {
        suma += vec[i];
        return suma;

    }
console.log(suma)

trabajoArreglos()
    .then(() => {
})

llenarArreglo()
    .then(() => {
        console.log(vec)
})
*/
let vector = []

function llenarArreglo() {
    {
        return new Promise((resolve, reject) => {
            resolve()
            reject(new Error('No sirvio'))
            let aleatorio = Math.round(Math.random() * 100)
            for (let i = 0; i < aleatorio; i++) {
                vector[i] = Math.round(Math.random() * 100)
            }
            console.log(vector)
        })
    }
}


llenarArreglo()
    .then(sumarArreglo)
    .then(promedioArreglo)
let suma = 0

function sumarArreglo() {
    for (let j = 0; j < vector.length; j++) {
        suma += vector[j]
    }
    console.log(`la suma del arreglo es: `, suma)
}

function promedioArreglo() {
    suma = 0
    for (let x = 0; x < vector.length; x++) {
        suma += vector[x]
    }

    let promedio = suma / vector.length
    console.log(`El valor del promedio es: `, promedio)
}


/*****************************************/

//promesas .then .catch
function mayusculas(texto) {
    let contarma = 0;
    var mayusculas = 'QWEÉRTYUÚIÍOÓPAÁSDFGHJKLÑZXCVBNM'
    for (let i = 0; i < mayusculas.length; i++) {
        for (let x = 0; x < texto.length; x++) {
            if (mayusculas[i] == texto[x]) {
                contarma = contarma + 1
            }
        }
    }
    console.log(`la cantidad de mayusculas es ${contarma}`)
}

function minusculas(texto) {
    let contarmi = 0;
    var minusculas = 'qwertyuiopasdfghjklñzxcvbnméíóáú'
    for (let i = 0; i < minusculas.length; i++) {
        for (let x = 0; x < texto.length; x++) {
            if (minusculas[i] == texto[x]) {
                contarmi = contarmi + 1
            }
        }
    }
    console.log(`la cantidad de minusculas es ${contarmi}`)
}

function numeros(texto) {
    let contarnu = 0;
    var numeros = '1234567890'
    for (let i = 0; i < numeros.length; i++) {
        for (let x = 0; x < texto.length; x++) {
            if (numeros[i] == texto[x]) {
                contarnu = contarnu + 1
            }
        }
    }
    console.log(`la cantidad de numeros es ${contarnu}`)
}
const imprimirgeneral = (texto, cb1, cb2, cb3) => {
    let textomi = texto.toLowerCase();
    let textoma = texto.toUpperCase();
    setTimeout(() => {
        cb1(texto)
        cb2(texto)
        cb3(texto)
    }, 2000);
    return new Promise((resolve, reject) => {
        resolve(`el texto es ${texto}\nel texto en mayuscula ${textoma}\nel texto en minuscula ${textomi}`)
    })
}
imprimirgeneral('Katerin Guerrero', mayusculas, minusculas, numeros)
    .then(res => {
        console.log(res)
    })


/********************************************* */

//ASYNG Y AWAIT
//La palabra “async” ante una función significa que la función siempre devolverá una promesa. Otros valores serán envueltos y resueltos en una promesa automáticamente.
//await hace que JavaScript espere hasta que la promesa responda y devuelve su resultado.
/*async se asegura de que la función devuelva una promesa, o envuelve las no promesas y las transforma en una. Bastante simple, ¿correcto? Pero no solo eso. Hay otra palabra, await, que solo trabaja dentro de funciones async y es muy interesante.*/