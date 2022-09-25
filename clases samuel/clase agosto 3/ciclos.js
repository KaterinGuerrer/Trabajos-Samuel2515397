//ejercicio de ciclos 1
var x = Math.round(Math.random() * 10 + 5)
console.log(x)
for (i = 1; i <= x; i++) {
    var p = ""
    for (j = 0; j < i; j++) {
        p = p + "*"
    }
    console.log(p)
}

//ejercicio de ciclos 2
var x = Math.round(Math.random() * 10 + 5)
console.log(x)
for (i = 1; i > x; i++) {
    var p = ""
    for (j = 15; j > i; j--) {
        p = "*" + p
    }
    console.log(p)
}
var x = 0
var p;
console.log(x)
for (i = Math.round(Math.random() * 10 + 5); i >= 1; i = -2) {
    for (j = 0; j < x; j++) {
        var p = ""
    }
    for (k = 0; k <= i; k++) {
        p = p + "*"
    }
    console.log(p)
}
console.log(x + "" + p)
x++;

/************************************************************ */

/*// primer punto
var n = Math.round(Math.random()*100)
consola.log(n)
para (i = 1 ; i <= n ; i++) {
d = n % yo
si (d == 0) {
consola.log(i+' es divisor de '+n)
}
}

//punto 2
var n =Math.round(Math.random()*20)
varc =0
consola.log(n)
para (x=1; x<=n; x++) {
var d = n % x
si (d==0) {
c = c+1
}
}
si (c==2) {
consola.log(n+" es primo")
}


//punto 3
var n = Math.round(Math.random()*100),
c = 0,
pag = 0
consola.log(n)
para (i = 1 ; i < n ; i++) {
d = n % yo
si (d == 0) {
c = c + yo
}
}
si (c==n) {
consola.log (n+' es un número perfecto')
} más {
consola.log (n+' no es un número perfecto')
}

//punto 4
var n = 1,
c = 0,
pag = 0
consola.log(n)
para (i = 1; i <= 1000; n++) {
mientras (i<n) {
d = n % yo
yo += 1
si (d == 0) {
c = c + yo
consola.log(c)
}
si (c==n) {
consola.log (n+' es un número perfecto')
} más {
consola.log (n+' no es un número perfecto')
}
}
    
}

//punto 5
varx=1
varc =0
para (n=1; n<=10; n++) {
mientras (x<n) {
var d = n % x
x = x + 1
si (d==0) {
c = c+1   
}
}
si (c==2) {
consola.log(n+" es primo")
}
}


// punto 8
var n = Math.round(Math.random()*100)
consola.log(n)
para (i = 1; i < n; i++) {
m = 5 * yo
console.log('los multiplos de 5 son: '+m)
}

//punto 9
var n = Math.round(Math.random()*10),
x = Math.round(Math.random()*50)
consola.log(x+' '+n)
para (i = 1; i <= n; i++) {
x = x * x
}
consola.log(Matemáticas.trunc(x))

//punto 10
var m = Math.round(Math.random()*100),
n = Math.round(Math.random()*100)
consola.log(m+' '+n)
var r1= Math.trunc(m/n),
r2= n * r1,
r3= metro - r2,
r4= n % r3
si (r4==0) {
consola.log('el mcd es'+r3)
}


//punto 11
var n = Math.round(Math.random()*100),
m = Math.round(Math.random()*100)




//punto 12
var x = Math.round(Math.random()*10+5)
consola.log(x)
para (i=1; i<=x; i++) {
varp=""
para (j=0;j<i;j++){
p=p+"*"
}
consola.log(p)
}

//punto 13
var n = 6754
para (i=1; i <=n; i++) {
d = n % 10
n = d / 10
consola.log(d)
 }*/