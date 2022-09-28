//publicacion

class publicacion {
    constructor(titulo, precio) {
        this._titulo = titulo;
        this._precio = precio;
    }
    set titulo(titulo) {
        this._titulo = titulo;
    }
    get titulo() {
        return this._titulo;
    }
    set precio(precio) {
        this._precio = precio;
    }
    get precio() {
        return this._precio;
    }
}
let ej = new publicacion('El Señor de los Anillos', 10000);
console.log(ej)
class libro extends publicacion {
    constructor(titulo, precio, nropaginas) {
        super(titulo, precio);
        this._nropaginas = nropaginas
    }
    set nropaginas(nropaginas) {
        this._nropaginas = nropaginas;
    }
    get nropaginas() {
        return this._nropaginas
    }
}

let li = new libro('Harry Potter', 20000, 200)
console.log(li)
class CD extends publicacion {
    constructor(titulo, precio, tiempoduracion) {
        super(titulo, precio);
        this._tiempoduracion = tiempoduracion;
    }
    set tiempoduracion(tiempoduracion) {
        this._tiempoduracion = tiempoduracion;
    }
    get tiempoduracion() {
        return this._tiempoduracion
    }
}
let cd1 = new CD('La odisea', 50000, '40:00')
console.log(cd1)


//Agencia de autos

class Agencia {
    constructor(nit, nombreagencia) {
        this._nit = nit;
        this._nombreagencia = nombreagencia;

    }
    set nit(nit) {
        this._nit = nit;
    }
    set nombreagencia(nombreagencia) {
        this._nombreagencia = nombreagencia;
    }
    get nit() {
        return this._nit;
    }
    get nombreagencia() {
        return this._nombreagencia;
    }

}

let ag = new Agencia(256349, 'Renault')
console.log(ag)

class vehiculo extends Agencia {
    constructor(nit, nombreagencia, nroserie, marca, año, precio, cantidadpasajeros, tipovehiculo) {
        super(nit, nombreagencia)
        this._nroserie = nroserie;
        this._marca = marca;
        this._año = año;
        this._precio = precio;
        this._cantidadpasajeros = cantidadpasajeros;
        this._tipovehiculo = tipovehiculo;
    }
    set nroserie(nroserie) {
        this._nroserie = nroserie;
    }
    set marca(marca) {
        this._marca = marca;
    }
    set año(año) {
        this._año = año;
    }
    set precio(precio) {
        this._precio = precio;
    }
    set tipovehiculo(tipovehiculo) {
        this._tipovehiculo = tipovehiculo;
    }
    get tipovehiculo() {
        return this._tipovehiculo
    }
    get nroserie() {
        return this.nroserie;
    }
    get marca() {
        return this._marca;
    }
    get año() {
        return this._año;
    }
    get precio() {
        return this._precio
    }
}
let v = new vehiculo(256349, 'Renault', '4s5s9s', 'Chevrolet', 2021, 89000000, 4, 'vehiculo')
console.log(v)






class auto_compacto extends vehiculo {
    constructor(nit, nombreagencia, nroserie, marca, año, precio, cantidadpasajeros, tipovehiculo, nropuertas) {
        super(nit, nombreagencia, nroserie, marca, año, precio, cantidadpasajeros, tipovehiculo)

        this._nropuertas = nropuertas;
    }
    set nropuertas(nropuertas) {
        this._nropuertas = nropuertas;
    }
    get nropuertas() {
        return this._nropuertas;
    }
}
let twingo = new auto_compacto(256349, 'Renault', '414512gyu', 'Toyota', 2022, 12000000, 4, 'Compacto', 2)
console.log(twingo)



class auto_lujo extends vehiculo {
    constructor(nit, nombreagencia, nroserie, marca, año, cantidadpasajeros, precio, tipovehiculo, sistema_tecnologico) {
        super(nit, nombreagencia, nroserie, marca, año, cantidadpasajeros, precio, tipovehiculo)
        this._sistema_tecnologico = sistema_tecnologico;
    }
    set sistema_tecnologico(sistema_tecnologico) {
        this._sistema_tecnologico = sistema_tecnologico;
    }
    get sistema_tecnologico() {
        return this._sistema_tecnologico;
    }
}


let lamborgini = new auto_lujo(862656, 'Renault', '2156256gy', 'Ferrari', 2022, 2, 80000000, 'Lujoso', 'moderno 2022')
console.log(lamborgini)

class camionetas extends vehiculo {
    constructor(nit, nombreagencia, nroserie, marca, año, cantidadpasajeros, precio, tipovehiculo, cargamax) {
        super(nit, nombreagencia, nroserie, marca, año, cantidadpasajeros, precio, tipovehiculo)
        this._cargamax = cargamax;
    }
    set cargamax(cargamax) {
        this._cargamax = cargamax;
    }
    get cargamax() {
        return this._cargamax;
    }
}

let Toyota = new camionetas(862656, 'Renault', '262167tf', 'Toyota', 2022, 80000000, 6, 'Camioneta', '400kg')
console.log(Toyota)

class vagoneta extends vehiculo {
    constructor(nit, nombreagencia, nroserie, marca, año, cantidadpasajeros, precio, tipovehiculo, nroejes) {
        super(nit, nombreagencia, nroserie, marca, año, cantidadpasajeros, precio, tipovehiculo)
        this._nroejes = nroejes;
    }
    set nroejes(nroejes) {
        this._nroejes = nroejes;
    }
    get nroejes() {
        return this._nroejes;
    }
}

let ban = new vagoneta(862656, 'Renault', '236326gyu', 'Volsvagen', 1998, 8, 19000000, 'vagoneta', 3)
console.log(ban)