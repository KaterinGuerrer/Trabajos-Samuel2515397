//generar un numero aleatorio entre 1000 y 10000 y luego hacer un calculo de la poblacion en 20 años tasa de crecimiento .3
/*
function poblacion(t, r) {
    let pi = Math.round(Math.random(1000) * 10000)
    let nt = 0
    let nacimientos = 0
    let poblacion = 0
    for (let i = 0; i < pi.length; i++) {
        nt = pi(1 + r) ** t
        r = nacimientos(nacimientos - nt) / t
    }
    console.log(pi)
}
poblacion(20, 0, 3)
nacimientos(20, 0, 10)*/

//nacimientos numero aleatorio maximo el 10% del periodo y maximo el 3% de la poblacion

function poblacion1() {
    let Pi = Math.trunc((Math.random() * 10000 - 1000) + 1000);
    let nacimiento = 0
    let muerte = 0
    let r = 0
    let nt = 0
    for (let i = 0; i < 20; i++) {
        muerte = Math.round((Math.random() * 3 - 1) + 1)
        muerte = (Pi * muerte) / 100
        r = (nacimiento - muerte) / Pi
        nt = Pi * (1 + r) ** i
        console.log(`Total de la poblacion ${Math.trunc(nt)}`)
        console.log(`Crecimiento ${r}`)
    }
}
poblacion1(20);

//poblacion final entregar una casa calcule promesa la cantidad de personas que se le dara una casa, imprimir 5 segundos despues. async y await
function poblacion1() {
    let Pi = Math.trunc((Math.random() * 10000 - 1000) + 1000);
    let nacimiento = 0
    let muerte = 0
    let r = 0
    let nt = 0
    for (let i = 0; i < 20; i++) {
        muerte = Math.round((Math.random() * 3 - 1) + 1)
        muerte = (Pi * muerte) / 100
        r = (nacimiento - muerte) / Pi
        nt = Pi * (1 + r) ** i
        console.log(`Total de la poblacion ${Math.trunc(nt)}`)
        console.log(`Crecimiento ${r}`)
    }
}
poblacion1(20);

function Casas() {
    return new Promise((resolve, reject) => {
        if (true) {
            let c
            for (let i = 0; i < c; i++) {
                c = (pi * (Math.round(Math.random() * 10 - 1) + 1)) / 100
            }
            resolve(c)
        } else {
            reject()
        }
    })
}

function crecimientoNeto(params) {
    return new Promise((resolve, reject) => {

    })
}
async function totalCasas() {
    try {
        const c = await Casas()
        setTimeout(() => {

        }, 5000);
    } catch (error) {

    }
}

/*Calcular el crecimiento neto de la poblacion en los 10 periodos poblacion inicial y poblacion final calcular el final*/