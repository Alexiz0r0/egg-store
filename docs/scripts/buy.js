const buySelector = document.getElementById('end-shopping');

buySelector.addEventListener('click', () => endShopping());

const endShopping = () => {
    if (localStorage.getItem('cart')) {
        Swal.fire({
            title: "¿Desea finalizar la compra?",
            showDenyButton: true,
            confirmButtonText: "Sí, comprar",
            denyButtonText: `No`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                resetView();
                Swal.fire("Su compra ha sido finalizada con éxito.", "¡Gracias por su compra!", "success");
            } else if (result.isDenied) {
                Swal.fire("La compra ha sido cancelada.", "", "info");
            }
        });
    }
}

const resetView = () => {
    localStorage.removeItem('cart');
    const cartSelector = document.getElementById("cart-items");
    cartSelector.innerHTML = "Sin productos";
    const subtotalSelector = document.getElementById('total-price');
    subtotalSelector.innerHTML = `&#36;0`;
    const basketSelector = document.getElementById('basket');
    basketSelector.innerHTML = `0`;
}