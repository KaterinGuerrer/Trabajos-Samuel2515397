function externa() {
    console.log('Funcion externa al setTimeout')
}
const funcionExt = () => {
    console.log('Funcion externa flecha')
}
setTimeout(() => {
    console.log('yo amo soacha');
}, 2000);

setTimeout(function() {
    console.log('funcion clasica')
}, 3000);

setTimeout(externa, 5000);
setTimeout(funcionExt, 6000);

setInterval(() => {
    console.log('se repita')
}, 3000);

let timerId = setInterval(() => console.log('Amo el SENA'), 2000);

//despues de 5 segundos parar
setTimeout(() => {
    clearInterval(timerId);
    //console.log('stop')
}, 7000);

//escriba un programa que muestre un contador que muestre de 1 hasta 10 donde cada numero se muestre cada 2 segundos

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, (i * 2000));
}

//callback se utilizan para hacer una funcion que trabajan al tiempo
function receptora(callback) {
    callback()
    setTimeout(() => {
        console.log('Dentro de la funcion receptora')
    }, 2000);
}

function funcionArgumento() {
    console.log('Impresion de la funcion argumentos')
}

receptora(funcionArgumento)


/************************************ */
function receptora(cb1, cb2, parametro) {
    cb1();
    setTimeout(() => {
        console.log('Dentro de la funcion receptora')
    }, 0);
    cb2(parametro)
}

function funcionArgumento(parametro) {
    console.log(`${parametro} de la funcion argumentos`)
}

receptora(() => console.log('Funcion Anonima'), funcionArgumento, 100);

/******************************************* */

//funcion que llene un arreglo

function trabajoArreglos(cb1, cb2) { //vec no es necesario en este programa
    let vec1 = []
    setTimeout(() => {
        console.log(vec1)
    }, 1000);
    vec = cb1(vec1);
    console.log(cb2(vec1));
}

function llenarArreglo(vec) {
    for (let i = 0; i < 10; i++) {
        vec[i] = Math.round(Math.random() * 100)
    }
    return vec;
}

function sumarArreglo(vec) {
    let suma = 0
    for (let i = 0; i < vec.length; i++) {
        suma += vec[i];
    }
    return suma;
}
trabajoArreglos(llenarArreglo, sumarArreglo)

//ejercicio 
//funcion general. Tiene dos callback. Uno que cuenta letras mayusculas de un string y otro que cuenta minusculas. La cadena de texto se debe ingresar como parametro a la misma funcion general. La funcion general imprime la cadena de texto en minuscula y en mayuscula. Tenga cuidado de no perder la conformacion original de la cadena.
// 114/09/2022
function general(cal1, cal2, cal3, texto) {
    let textomin = texto.toLowerCase(); //pasar de minusculas a mayusculas
    let textomay = texto.toUpperCase(); //pasar de mayusculas a minusculas
    console.log(`el texto original es ${texto}\nen minuscula es ${textomin}\nen mayuscula es ${textomay}`)
    cal1(texto)
    cal2(texto)
    cal3(texto)
}

function mayusculas(texto) {
    let contar = 0;
    var mayusculas = 'JQWHDBUEWHRUWQ0WJWEIJDIFNUFH'
    for (let a = 0; a < mayusculas.length; a++) {
        for (let x = 0; x < texto.length; x++) {
            if (mayusculas[a] == texto[x]) {
                contar = contar + 1
            }
        }
    }
    console.log(`el total de mayusculas ${contar}`)
}

function minusculas(texto) {
    let contar = 0;
    var minusculas = 'qwertyuiopasdfghjklñzxcvbnméíóáú'
    for (let i = 0; i < minusculas.length; i++) {
        for (let x = 0; x < texto.length; x++) {
            if (minusculas[i] == texto[x]) {
                contar = contar + 1
            }
        }
    }
    console.log(`el total de minusculas ${contar}`)
}

function tildes(texto) {
    let contar = 0;
    var tildes = 'óáéúí'
    for (let j = 0; j < tildes.length; j++) {
        for (let s = 0; s < texto.length; s++) {
            if (tildes[j] == texto[s]) {
                contar = contar + 1
            }
        }
    }
    console.log(`el total de tildes es ${contar}`)
}

general(minusculas, mayusculas, tildes, 'Káterín Guerrero')