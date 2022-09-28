//ASINCRONISMO
//Js es asincrono y no bloqueante, con un bucle de eventos (con concurrencia) implementado con un unico hilo para sus interfaces de entrada y salida.

//Esta función ejecuta el callback despúes de esperar cierto tiempo el cual también le pasamos como parámetro.
setTimeout(function() { //es usada para retrasar la ejecución de la función pasada como argumento por un periodo de tiempo determinado.
    console.log('Hola')
}, 5000);

// Usando función anonima
console.log('A')
setTimeout(function() {
    console.log('B')
}, 2000)
console.log('C')
    /* Resultado del código anterior
     A
     C
     B  Despues de 2 segundo*/


//PROMESAS
let x = 11
const p = new Promise((resolve, reject) => {
    if (x == 11) {
        resolve('La variable es igual a 11');
    } else {
        reject('La variable no es igual a 11');
    }
});

//OTRO EJEMPLO 
let mensaje = new Promise((resolve, reject) => { //se puede cambiar el nombre del resolve y el reject pero no se pueden colocar mas de 2
    setTimeout(function() {
        resolve('Este es el mensaje');
    }, 2000);
})

p.then(m => { //then(). se trata del mensaje que lo mostraremos usando un console.log()
    console.log(m)
}).catch(function(n) { //catch captura el resultado fallido o reject de la promesa
    console.log('error');
})

//EJEMPLO DIVERTIDO

console.log('mesa')
setTimeout(function() {
    console.log('mesa')
}, 500)
setTimeout(function() {
    console.log('mesa que mas aplauda')
}, 1000)
setTimeout(function() {
    console.log('mesa que mas aplauda')
}, 1500)
setTimeout(function() {
    console.log('mesa que mas aplauda')
}, 2000)
setTimeout(function() {
    console.log('le mando')
}, 2500)
setTimeout(function() {
    console.log('le mando')
}, 3000)
setTimeout(function() {
    console.log('le manda la niña')
}, 3500)
setTimeout(function() {
    console.log('ZA')
}, 4000)
setTimeout(function() {
    console.log('ZA')
}, 4500)
setTimeout(function() {
    console.log('ZA')
}, 5000)
setTimeout(function() {
    console.log('YA CU ZA')
}, 5500)
setTimeout(function() {
    console.log('YA CU ZA')
}, 6000)
setTimeout(function() {
    console.log('ZA')
}, 6500)
setTimeout(function() {
    console.log('ZA')
}, 7000)
setTimeout(function() {
    console.log('ZA')
}, 7500)
setTimeout(function() {
    console.log('YA CU ZA')
}, 8000)



//metodo clear()


//SETINTERVAL

setInterval(repetir, 1000);

function repetir() {
    console.log("Ha pasado 1 segundo")
}
//setinterval correra la funcion cada segundo despues que se haya designado en el parametro


let identificadorDeTemporizador;

function temporizadorDeRetraso() {
    identificadorDeTemporizador = setTimeout(funcionConRetraso, 3000);
}

function funcionConRetraso() {
    alert("Three seconds have elapsed.");
}

function borrarAlerta() {
    clearTimeout(identificadorDeTemporizador);
}

/*********************************************************** */

const repetir = setInterval(() => {
    console.log('han pasado dos segundos')
}, 2000);

setTimeout(() => {
    clearInterval(repetir);
    console.log('se acabo')
}, 7000)