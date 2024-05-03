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

const printCards = (arrayOfProducts, idSelector) => {
    let productsTemplate = "";
    for (const element of arrayOfProducts) {
        productsTemplate = productsTemplate + createCard(element);
    }
    const productsSelector = document.getElementById(idSelector);
    productsSelector.innerHTML = productsTemplate;
}

getBasketNum();
printCards(products, "products");
