// llenar tres arreglos con numeros aleatorios
//el tamaño de los arreglos estara entre min 5 y max 20
/*1 cual de los tres arreglos es el mas grande 
  2 de cada uno diga que cantidad de numeros pares y que cantidad de numeros impares tiene
  3 rellenar los dos arreglos mas pequeños con los datos que el arreglos mas grande tiene de mas  */

let v = []
t = Math.round((Math.random() * 20 - 5) + 5)
console.log(t)
for (let i = 0; i < t; i++) {
    v[i] = Math.round(Math.random() * 100)
    if (v[i] % 2 == 0) {
        console.log('son pares', v[i])
    } else {
        console.log('son impares', v[i])
    }
}
console.log(v)



let a = []
t1 = Math.round((Math.random() * 20 - 5) + 5)
console.log(t1)
for (let i = 0; i < t1; i++) {
    a[i] = Math.round(Math.random() * 100)
    if (a[i] % 2 == 0) {
        console.log('son pares', a[i])
    } else {
        console.log('son impares', a[i])
    }
}
console.log(a)



let b = []
t2 = Math.round((Math.random() * 20) + 5)
console.log(t2)
for (let i = 0; i < t2; i++) {
    b[i] = Math.round(Math.random() * 100)
    if (b[i] % 2 == 0) {
        console.log('es par', b[i])
    } else {
        console.log('es impar', b[i])
    }
}
console.log(b)


//primero
console.log(v.length)
console.log(a.length)
console.log(b.length)
if (v.length > a.length) {
    console.log(v.length)
} else if (a.length > b.length) {
    console.log(a.length)
} else if (b.length > a.length) {
    console.log(b.length)
} else if (b.length > v.length) {
    console.log(b.length)
} else if (a.length > v.length) {
    console.log(a.length)
}