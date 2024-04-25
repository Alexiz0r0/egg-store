const query = location.search;
const params = new URLSearchParams(query);
const id = Number(params.get('id'));
console.log(id);


const printDetails = (id) => {
    const product = products.find(product => product.id === id);
    console.log(product);
    let productsTemplate = "";
    productsTemplate = createProductImg(product) + createProductDes(product) + createCheckout(product);
    const details = document.getElementById("details");
    details.innerHTML = productsTemplate;
}

const createProductImg = (product) => {
    const [, ...miniList] =  product.images;
    const miniImagesHTML = createMiniImages(miniList);
    const bigImageHTML = createBigImage(product.images[0]);

    return `<section class="product-images-block">
        <div class="product-images">
          ${miniImagesHTML}
        </div>
        ${bigImageHTML}
      </section>`;
}

const createMiniImages = (images) => {
    return images.map(each => `<img class="mini-img" src="${each}" alt="mini" />`).join("");
}

const createBigImage = (firstImage) => {
    return `<img class="big-img" id="big-img" src="${firstImage}" alt="MacBook Pro 13'4" />`;
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
          <h2 id="price" class="checkout-total-price">${product.price}</h2>
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
              <input type="number" min="1" value="1"/>
              <button type="button" class="cart-btn">
                Añadir al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>`
}

printDetails(id);

/*
Experience the power of creativity with the MacBook Pro 13'4.
Featuring 8GB of RAM and 512GB of storage, this laptop provides
the performance and storage capacity needed for demanding tasks.
    The sleek design in silver and space gray adds a touch of
sophistication. The high-resolution Retina display brings your
visuals to life, whether you're editing photos, creating videos,
or simply browsing the web. With the latest technology and a
lightweight build, the MacBook Pro 13'4 is the perfect companion
for professionals and creative individuals alike.*/
