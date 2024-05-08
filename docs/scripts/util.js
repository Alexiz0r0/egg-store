/*
<li id="cart" className="header-li">
    <a className="icon-a" href="./cart.html" id="cart-img">
          <span className="nav-cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span id="basket" className="cart-basket">
              0
            </span>
          </span>
    </a>
</li>
*/

const getBasketNum = () => {
    let basket = 0;
    const cartImg = document.getElementById("cart-img");
    const basketSpan = document.createElement("span");
    basketSpan.id = "basket";
    basketSpan.className = "cart-basket";
    basketSpan.textContent = "0";

    const navCartSpan = cartImg.querySelector(".nav-cart");
    navCartSpan.appendChild(basketSpan);
    const basketSelector = document.getElementById('basket');
    if (localStorage.getItem('cart')) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        basket = cart.length;

        const cartImgSelector = document.getElementById("cart-img");
        cartImgSelector.classList.add("cart-img");
    }
    basketSelector.innerHTML = `${basket}`;
}

window.getBasketNum = getBasketNum;

const createCard = (product) => {
    return `<a class="product-card" href="./details.html?id=${product.id}">
      <img
          class="product-img"
          src="${product.images[0]}"
          alt="iPad Pro 12.9"
      />
      <div class="product-info">
        <span class="product-title">${product.title}</span>
        <span class="product-description">${product.description}</span>
        <div class="product-price-block">
          <span class="product-price">&#36;${product.price}</span>
          <span class="product-discount">50% Off</span>
        </div>
        <div class="product-tax-policy">
          Incluye impuesto País y percepción AFIP
        </div>
      </div>
    </a>`;
}

window.createCard = createCard;

const createSocial = (list) => {
    return `
    <li id="${list.name}" class="header-li">
      <a class="icon-a" href="${list.url}" id="${list.nameID}" target="${list.target}">
        <span class="${list.style}">
          <i class="${list.icon}"></i>
        </span>
      </a>
    </li> `;
}

window.createSocial = createSocial;

const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    return !!token
}

window.isLoggedIn = isLoggedIn;


/*
<li id="facebook" className="header-li">
    <a className="icon-a" href="https://facebook.com" target="_blank">
          <span>
            <i className="fa-brands fa-facebook"></i>
          </span>
    </a>
</li>*/
