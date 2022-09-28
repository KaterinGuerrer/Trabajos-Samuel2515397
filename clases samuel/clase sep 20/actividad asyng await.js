function arreglo() {
    let limite = 100
    return new Promise((resolve, reject) => {
        if (limite === 0) {
            reject(new Error('no se definió '))
        }
        var vec = []
        setTimeout(() => {
            for (let i = 0; i < 10; i++) {
                vec[i] = Math.round(Math.random() * 100)
            }

        }, 0);
        resolve(vec)
    })
}
arreglo()
    .then((vec) => {
        setTimeout(() => {
            let suma = 0
            for (let i = 0; i < vec.length; i++) {
                suma += vec[i];
            }
            console.log(vec)
            console.log(suma);
        }, 0);
    })
    .catch((error) => { console.log(error.mensaje) })
arreglo = () => {
    let limite = 100
    return new Promise((resolve, reject) => {
        if (limite === 0) {
            reject(new Error('no se definió '))
        }
        var vec = []
        setTimeout(() => {

            for (let i = 0; i < 10; i++) {
                vec[i] = Math.round(Math.random() * 100)
            }
        }, 0);
        //console.log(vec)
        resolve(vec)
    })
}
async function sumar() {
    try {
        const vec = await arreglo()
            //console.log(vec)
        setTimeout(() => {
            let suma = 0
            for (let i = 0; i < vec.length; i++) {
                suma += vec[i];
            }
            console.log(vec)
            console.log(suma);
        }, 0)
    } catch (error) {
        console.log(error.mensaje)
    }
}
sumar()

/******************************************************* */
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



async function letras(texto, cb1, cb2, cb3) {
    const resultado = await imprimirgeneral(texto, cb1, cb2, cb3)
    console.log(resultado)
}
/************************************************************ */