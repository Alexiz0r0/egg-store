const getBasketNum = () => {
    let basket = 0;
    const basketSelector = document.getElementById('basket');
    if (localStorage.getItem('cart')) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        basket = cart.length;

        const cartImgSelector = document.getElementById("cart-img");
        cartImgSelector.className = "header-social-img cart-img";
    }
    basketSelector.innerHTML = `${basket}`;
}

window.getBasketNum = getBasketNum;