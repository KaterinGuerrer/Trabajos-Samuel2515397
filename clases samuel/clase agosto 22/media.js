/*Escriba una funcion que llene un array con n numeros(n debe ser minimo 5 y maximo 25)*/

function arreglos(n) {
    let t = Math.round((Math.random() * 25 - 5) + 5)
    for (let i = 0; i < t; i++) {
        n[i] = Math.round(Math.random(1) * 100)
    }
    return n
}
var j = []
arreglos(j);
console.log(j);

/*Escriba una funcion que reciba el array lleno lleno y retorne otro arreglo con la diferencia que hay entre el valor de cada elemento y la media del arreglo*/

function media(array) {
    var i = 0,
        summ = 0,
        array2 = array.length;
    while (i < array2) {
        summ = summ + array[i++];
    }
    return summ / array2;
}
var array = [1, 5, 7, 3, 7];
var a = media(array);
console.log(a)


function retorne(array1) {
    var n1 = []
    for (let i = 0; i < array1.length; i++) {
        n1[i] = array1[i] - media(array1)

    }
    return n1
}
var diferencia = retorne(j)
console.log(diferencia)

/*Escriba una funcion que reciba el arreglo con las diferencias del punto anterior y diga de cada uno cuanto le falta o cuanto le sobra segun el caso con referencia a la media*/

function recibe(array3) {
    var n1 = media(array3)
    for (let j = 0; j < array3.length; j++) {
        if (array3[j] > n1) {
            console.log(array3[j], 'le sobra')
        } else if (array3[j] < n1) {
            console.log(array3[j], 'le falta')
        }
    }
}
recibe(diferencia)