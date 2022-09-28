//Es una funcion que retorna una promesa
function saySomething(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("something" + x);
        }, 2000);
    });
}
async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
}
talk(2);
talk(4);
talk(8);

function saySomething(x) {
    setTimeout(() => {
        resolve("something" + x)
    }, 2000);
}

/**************************************************** */

let contador = 0 //variable global
function argumento(j) {
    return new Promise(resolve => {
        setTimeout(() => {
            contador++;
            resolve(`x values ${j} contador:${contador}`);
        }, 1000);
    })
}

async function consola(j) {
    console.log(`ready ${j} contador:${contador}`);
    const reso = await argumento(j);
    console.log(reso);
}

for (let x = 0; x < 10; x++) {
    consola(x);
}