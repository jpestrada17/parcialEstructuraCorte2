let pila = [];

// Agregar objeto
pila.push({ nombre: "Orlando", edad: 30 });

// Agregar otro
pila.push({ nombre: "Ana", edad: 25 });

// Mostrar pila
console.log(pila);

// Eliminar último
let eliminado = pila.pop();
console.log("Eliminado:", eliminado);

// Ver pila final
console.log(pila);