let totalCarrito = 0;

function addCarrito(nombreProducto, precioProducto) {

    const nuevoProducto = document.createElement('li');
    nuevoProducto.textContent = nuevoProducto.textContent = `${nombreProducto} - $${precioProducto.toFixed(2)}`;


    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.appendChild(nuevoProducto);

    totalCarrito += precioProducto;
    document.getElementById('total').textContent = totalCarrito.toFixed(2);
    
}

function toggleCarrito() {
    const carritoSection = document.getElementById('carritoSection');
    

    if (carritoSection.style.display === "none" || carritoSection.style.display === "") {
        carritoSection.style.display = "flex";
        carritoSection.style.visibility = "visible";
    } else {
        carritoSection.style.display = "none";
        carritoSection.style.visibility = "hidden";
    }
}