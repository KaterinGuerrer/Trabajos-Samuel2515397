//primer punto 

function arreglo2() {
    let v = []
    let t = Math.round((Math.random() * 25 - 5) + 5)
    for (let i = 0; i < t; i++) {
        v[i] = Math.round(Math.random(1) * 100)
    }
    console.log(v)
}
arreglo2();



function arreglo1() {
    let v1 = []
    let t1 = Math.round((Math.random() * 25 - 5) + 5)
    for (let i = 0; i < t1; i++) {
        v1[i] = Math.round(Math.random(1) * 100)
    }
    console.log(v1)
}
arreglo1();


//segundo punto 
let v = []
let t = Math.round((Math.random() * 25 - 5) + 5)
for (let j = 0; j < t; j++) {
    v[j] = Math.round(Math.random(1) * 100)
}
v.sort();
console.log(v)
if (v.length % 2 == 0) {
    position = v.length / 2
    Elemento = v[position]
    console.log(Elemento)
} else {
    positionc = v.length / 2 - 0.5
    mele = v[positionc]
    console.log(mele)
}