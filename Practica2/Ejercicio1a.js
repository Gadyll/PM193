//1. Tienes el siguiente objeto persona.
//2. Extrae los valores de nombre, edad y ciudad usando destructuración.
//3. Luego, muestra un mensaje como: "Me llamo Ivan Isay, tengo 37 años y vivo en Qro."
const persona = {
    nombre: "Jhadiel",
    edad: 20,
    direccion: {
        ciudad: "Qro",
        pais: "Mexico"
    }
};

//desestructuracion
const { nombre, edad, direccion } = persona;
//mensaje
const mensaje = `Me llamo ${nombre}, tengo ${edad} años y vivo en ${direccion.ciudad}.`;
console.log(mensaje);


