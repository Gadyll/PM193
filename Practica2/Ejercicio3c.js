//Ahora con un arreglo de personas, realiza lo siguiente:
//1. Usa .find() para buscar a la persona con nombre "Luis".
//2. Usa .forEach() para imprimir el nombre de cada persona con su edad.
//3. Usa .reduce() para sumar todas las edades y obtener un total.

const personas = [
    { nombre: "Jhadiel", edad: 20 },
    { nombre: "Luis", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Pedro", edad: 22 }
];

//buscar a Luis
const personaLuis = personas.find(persona => persona.nombre === "Luis");
console.log(`La persona encontrada es: ${personaLuis.nombre}, edad: ${personaLuis.edad}`);
//imprimir el nombre de cada persona con su edad
personas.forEach(persona => {
    console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
});
//3. Sumar todas las edades
const totalEdad = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log(`Suma total de edades es: ${totalEdad}`);


