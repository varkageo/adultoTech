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

const buttonContact = document.getElementById('contactUs');

buttonContact.addEventListener("click",()=>{
    const message = document.getElementById('message');
    setTimeout(()=>{
        message.style.visibility = "visible";
    },500)
    setTimeout(()=>{
        message.style.visibility = "hidden";
    },6000)
    console.log("hola funciona el click")
    setTimeout(()=>{
        location.reload();
    },6001)
})

function compraste(){
    const message = document.getElementById('message');
    setTimeout(()=>{
        message.style.visibility = "visible";
    },500)

    setTimeout(()=>{
        message.style.visibility = "hidden";
    },6000)
}