// los objetos son unas de las cosas mas importantes en js ya que permiten referenciar diferentes daos del mismo objeto
let perro = {
    nombre: "Scott",
    color: "Cafe",
    edad: 5,
    macho: true
};
console.log(perro)
console.log(perro.nombre)

//añadir columnas
perro.tamaño = "Grande"
console.log(perro)

//reescribir dato
perro.edad = 8;
console.log(perro);

//eliminar columnas
delete perro.color;
console.log(perro);

//añadiendo fuction
let perro1 = {
    nombre: "Keyla",
    color: "Blanco y cafe",
    edad: 2,
    macho: true,
    ladrar: function() {
        return ('no le gusta ladrar')
    }
};
console.log(perro1)
perro1.ladrar()