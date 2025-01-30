// Lista para almacenar los nombres de los amigos
let amigos = [];
// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Captura el input
    const nombre = input.value.trim(); // Obtiene el valor sin espacios extras

    // Validación: No permitir nombres vacíos
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar nombre a la lista si no está repetido
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre); // Agregar a la lista

    actualizarLista(); // Refrescar la lista en pantalla

    input.value = ""; // Limpiar el campo de texto
}
// Función para actualizar la lista en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botón para eliminar un amigo de la lista
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.style.marginLeft = "10px";
        btnEliminar.style.cursor = "pointer";
        btnEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}
// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Elimina el nombre del array
    actualizarLista(); // Refrescar lista en pantalla
}
// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos en la lista para realizar el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}

