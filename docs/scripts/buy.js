
const buySelector  = document.getElementById('end-shopping');

buySelector.addEventListener('click', () => endShopping());

const endShopping = () => {
    if (localStorage.getItem('cart')) {
        localStorage.removeItem('cart');
        const cartSelector = document.getElementById("cart-items");
        cartSelector.innerHTML = "Sin productos";
        const subtotalSelector = document.getElementById('total-price');
        subtotalSelector.innerHTML = `&#36;0`;
        const basketSelector = document.getElementById('basket');
        basketSelector.innerHTML = `0`;
    }
}