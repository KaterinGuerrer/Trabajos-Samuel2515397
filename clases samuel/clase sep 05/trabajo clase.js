//Escribir una funcion que reciba el carrito de compras y registrar el precio de la compra dependiendo de la cantidad de productos

/*function factura(carrito){
    total=0
    for (let i = 0; i < carrito.productos.length; i++) {
        total+=carrito.productos[i]._precio
        
    }
    console.log(`El precio de la compra es ${total}`)
}

factura(carritocliente)*/

//Funcion que otorgue un descuento a la cateoria, calcular el precio de descuento
//totalprecio=0
function descuentopremium(Producto) {
    descuento = 0.10
    totalprecio = (Producto._precio - (Producto._precio * descuento))
    if (Producto._categoria == 'premium') {
        console.log(`El descuento es del 5% total a pagar ${totalprecio}`)
    } else {
        console.log(`No optiene ningun descuento ${Producto._precio}`)
    }

}

descuentopremium(cervesa1)

//Funcion que permita saber si la plata alcanza para lo que requiere comprar. Calcular el precio de la compra y decir si alcanza o sobra y decir cuanto carrito cantidad que quiere

function factura(carrito) {
    total = 0
    for (let i = 0; i < carrito.productos.length; i++) {
        total += carrito.productos[i]._precio

    }
    console.log(`El precio de la compra es ${total}`)
}

factura(carritocliente)

function calcular_plata(cant_plata) {
    diferencia = cant_plata - total
    if (cant_plata > total) {
        diferencia = cant_plata - total
        console.log(`Le sobran ${diferencia}`)
    } else {
        diferencia = total - cant_plata
        console.log(`Le falta ${diferencia}`)
    }
}

calcular_plata(8000)

//Beos
//Funcion que otorgue un descuento a la cateoria, calcular el precio de descuento
//totalprecio=0

function preciocondescuento(categoria, descuento, carrito) {
    total = 0
    for (let i = 0; i < carrito.productos.length; i++) {
        if (carrito.productos[i]._categoria == categoria) {
            total += ((carrito.productos[i]._precio) - (carrito.productos[i]._precio * descuento))
        } else {
            total += carrito.productos[i]._precio
        }
    }
    return total
}
console.log(preciocondescuento('lata', 0.20, carritocliente))
console.log(preciocondescuento('botella', 0.20, carritocliente))
    //Funcion que permita saber si la plata alcanza para lo que requiere comprar. Calcular el precio de la compra y decir si alcanza o sobra y decir cuanto carrito cantidad que quiere

function mealcanza(presupuesto, precio) {
    if (presupuesto >= precio) {
        console.log(`me alcanza para la compra y me sobra ${presupuesto-precio}`)
    } else {
        console.log(`no me alcanza para la compra y falta ${precio-presupuesto}`)
    }
}

mealcanza(5000, preciocarrito)
mealcanza(10000, preciocarrito)