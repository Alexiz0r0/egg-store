import {productsPromise} from "./products.js";
import {getBasketNum, isLoggedIn, navigateToLoginPage, showToastAlert} from "./util.js";

let products = [];
document.addEventListener("DOMContentLoaded", () => {
    productsPromise().then(
        (res) => {
            products = [...res];
            printDetails(id);
            addEventListeners();
        }
    ).catch(console.error);
});


const query = location.search;
const params = new URLSearchParams(query);
const id = Number(params.get('id'));
console.log(id);

let color = '';
let quantity = 1;

const printDetails = (id) => {
    const product = products.find(product => product.id === id);
    let productsTemplate;
    productsTemplate = createProductImg(product) + createProductDes(product) + createCheckout(product);
    const details = document.getElementById("details");
    details.innerHTML = productsTemplate;
    setDefaultColor(product);
    if (isLoggedIn()) {
        getBasketNum();
    }
    applyFavoriteClass();
}

const applyFavoriteClass = () => {
    const product = products.find(product => product.id === id);
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const pExist = favorites.find(p => p.id === product.id);
    const heartSelector = document.getElementById('fa-heart');
    if (pExist && isLoggedIn()) {
        heartSelector.classList.add('active');
    } else {
        heartSelector.classList.remove('active');
    }
}

const createProductImg = (product) => {
    const miniImagesHTML = createMiniImages(product.images);
    const bigImageHTML = createBigImage(product.images[0]);

    return `<section class="product-images-block">
        <div class="product-images">
          ${miniImagesHTML}
        </div>
        ${bigImageHTML}
      </section>`;
}

const createMiniImages = (images) => {
    return images.map(each => `<img class="mini-img" src="${each}" alt="mini"/>`).join("");
}

const createBigImage = (firstImage) => {
    return `
      <div class="product-box">
        <img class="big-img" id="big-img" src="${firstImage}" alt="MacBook Pro 13'4" />
        <div class="fav-btn">
          <span class="favme" id="fa-heart">
            <i class="fa-solid fa-heart"></i>
          </span>
        </div>
      </div>
    `;
}

const createProductDes = (product) => {
    const colorOptions = createColorOptions(product.color);
    const productTitle = createProductTitle(product.title);
    const productDescription = createProductDescription(product.description);

    return `
        <div class="product-description-block">
            ${productTitle}
            <form class="product-selector">
                <fieldset class="product-fieldset">
                    <label class="product-label" for="color">Color</label>
                    <select class="product-select" id="color">
                        ${colorOptions}
                    </select>
                </fieldset>
            </form>
            ${productDescription}
        </div>`;
}

const createColorOptions = (colors) => {
    return colors.map(color => `<option value="${color}">${color}</option>`).join("");
}

const createProductTitle = (title) => {
    return `<h1 class="product-title">${title}</h1>`;
}

const createProductDescription = (description) => {
    return `
        <div class="product-description">
            <span class="product-label">Descripción</span>
            <p>${description}</p>
        </div>`;
}

const createCheckout = (product) => {
    return `
    <div class="product-checkout-block">
        <div class="checkout-container">
          <span class="checkout-total-label">Total:</span>
          <h2 id="price" class="checkout-total-price">&#36;${product.price * quantity}</h2>
          <p class="checkout-description">
            Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
            50711 haciendo la solicitud en AFIP.
          </p>
          <ul class="checkout-policy-list">
            <li>
                  <span class="policy-icon"
                  ><img src="./assets/truck.png" alt="Truck"
                  /></span>
              <span class="policy-desc"
              >Agrega el producto al carrito para conocer los costos de
                    envío</span
              >
            </li>
            <li>
                  <span class="policy-icon"
                  ><img src="./assets/plane.png" alt="Plane"
                  /></span>
              <span class="policy-desc"
              >Recibí aproximadamente entre 10 y 15 días hábiles,
                    seleccionando envío normal</span
              >
            </li>
          </ul>
          <div class="checkout-process">
            <div class="top">
              <input type="number" min="1" value=${quantity} max="${product.stock}" id="quantityInput"/>
              <button type="button" class="cart-btn">
                Añadir al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>`;

}

const setDefaultColor = (product) => {
    color = product.color[0];
    const colorSelector = document.getElementById('color');
    colorSelector.values = color;
}

const addEventListeners = () => {
    const productImages = document.querySelector('.product-images');

    productImages.addEventListener('click', (event) => {
        if (event.target.classList.contains('mini-img')) {
            changeMini(event);
        }
    });

    const quantityInput = document.getElementById('quantityInput');

    quantityInput.addEventListener('input', (event) => {
        const newQuantity = event.target.value;

        quantity = Number(newQuantity);
        changeSubtotal(newQuantity);
    });

    const colorSelector = document.getElementById('color');

    colorSelector.addEventListener('change', (event) => {
        color = event.target.value;

    });

    const addBtn = document.querySelector('.cart-btn');
    addBtn.addEventListener('click', () => saveProduct());
    const heartSelector = document.getElementById('fa-heart');

    heartSelector.addEventListener('click', () => {

        addToFavorites();
    });
};

const changeMini = (event) => {
    const selectedSrc = event.target.src;
    const bigSelector = document.getElementById("big-img");
    bigSelector.src = selectedSrc;
}


const changeSubtotal = (quantity) => {
    const product = products.find(product => product.id === id);
    const subtotal = product.price * quantity;
    const subtotalSelector = document.getElementById('price');
    subtotalSelector.innerHTML = `&#36;${subtotal}`;
}


const saveProduct = () => {
    const logged = navigateToLoginPage();
    if (logged) return;

    const product = products.find(product => product.id === id);

    const selectedProduct = {
        id: id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        stock: product.stock,
        color,
        quantity,
    };

    saveOnLocal(selectedProduct);
}


const saveOnLocal = (item) => {

    if (localStorage.getItem('cart')) {
        let cart = JSON.parse(localStorage.getItem('cart'));

        const pExist = cart.find(p => p.id === item.id && p.color === item.color);
        console.log(pExist);
        if (pExist) {
            Swal.fire({
                title: "El producto ya se encuentra en el carrito",
                showDenyButton: true,
                confirmButtonText: "Añadir el producto",
                denyButtonText: `No añadir el producto`
            }).then((result) => {
                if (result.isConfirmed) {
                    item.quantity += pExist.quantity;
                    cart = cart.filter(p => !(p.id === item.id && p.color === item.color));
                    console.log(cart);
                    cart.push(item);
                    updateBasket(cart);
                    setItemsOnLocalStorage("cart", cart);
                    /*localStorage.setItem("cart", JSON.stringify(cart));*/
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                    showToastAlert({
                        position: "bottom-end",
                        icon: "info",
                        title: "El producto No se agregó al carrito.",
                        timer: 2000
                    })
                }
            });
        } else {
            console.log(cart);
            cart.push(item);
            updateBasket(cart);
            setItemsOnLocalStorage("cart", cart);
            /*localStorage.setItem("cart", JSON.stringify(cart));*/
        }
    } else {
        const cart = [item]
        setItemsOnLocalStorage("cart", cart);
        /*localStorage.setItem("cart", JSON.stringify(cart));*/
        updateBasket(cart);
    }
}

const setItemsOnLocalStorage = (key, items) => {
    localStorage.setItem(key, JSON.stringify(items));
    showToastAlert({
        position: "top-end",
        icon: "success",
        title: "El producto se agregó correctamente al carrito.",
        timer: 3000
    })
    /*Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "El producto se agregó correctamente al carrito.",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000
    });*/
}


const updateBasket = (cart) => {
    if (isLoggedIn()) {
        const basket = cart.length;
        const basketSelector = document.getElementById('basket');
        basketSelector.innerHTML = `${basket}`;
    }
}

const addToFavorites = () => {
    const logged = navigateToLoginPage();
    if (logged) return;
    const heartSelector = document.getElementById('fa-heart');
    heartSelector.classList.toggle('active');
    const product = products.find(product => product.id === id);
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const pExist = favorites.find(p => p.id === product.id);
    if (pExist) {
        favorites = favorites.filter(p => p.id !== product.id);
    } else {
        favorites.push(product);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

/*

Experience the power of creativity with the MacBook Pro 13'4.
Featuring 8GB of RAM and 512GB of storage, this laptop provides
the performance and storage capacity needed for demanding tasks.
    The sleek design in silver and space gray adds a touch of
sophistication. The high-resolution Retina display brings your
visuals to life, whether you're editing photos, creating videos,
or simply browsing the web. With the latest technology and a
lightweight build, the MacBook Pro 13'4 is the perfect companion
for professionals and creative individuals alike.*
 */