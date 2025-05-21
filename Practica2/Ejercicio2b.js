//Con el siguiente arreglo de productos, realiza lo siguiente:
//1. Filtra los productos cuyo precio sea mayor a 1000.
//2. Usa .map() para convertir el resultado en un nuevo arreglo con solo los nombres de
//esos productos.

const productos = [
    { nombre: "Laptop", precio: 12000 },
    { nombre: "Celular", precio: 250},
    { nombre: "Tablet", precio: 750 },
    { nombre: "Monitor", precio: 3000 }
];

// productos con precio mayor a 1000
const productosFiltrados = productos.filter(producto => producto.precio > 1000);   
// nombres de los productos filtrados
const nombresProductos = productosFiltrados.map(producto => producto.nombre);

console.log(nombresProductos); 
