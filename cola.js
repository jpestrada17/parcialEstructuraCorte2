let cola = [];

// Agregar número
function agregar(numero) {
  cola.push(numero);
  console.log("Agregado:", numero);
}

// Eliminar número
function eliminar() {
  if (cola.length === 0) {
    console.log("La cola está vacía");
    return;
  }

  let eliminado = cola.shift();
  console.log("Eliminado:", eliminado);
}

// Prueba
agregar(10);
agregar(20);
agregar(30);

eliminar();
eliminar();

console.log("Cola actual:", cola);