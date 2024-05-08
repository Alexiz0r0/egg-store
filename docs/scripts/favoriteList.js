const getFavoriteList = (favorites) => {
    print(favorites, 'favorite-items');
}

const print = (arrayOfProducts, idSelector) => {
    let productsTemplate = "";
    for (const element of arrayOfProducts) {
        productsTemplate = productsTemplate + createCard(element);
    }
    const productsSelector = document.getElementById(idSelector);
    productsSelector.innerHTML = productsTemplate;
}

const printContainer = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const containerSelector = document.getElementById('favorite');
    if (favorites.length === 0) {
        containerSelector.innerHTML = `
          <div class="details-container">
            <div class="sales-block">
              <h2 class="title"><i class="fa-solid fa-triangle-exclamation"></i> ¡Oops! Parece que aún no has agregado ningún producto a tu lista</h2>
            </div>
          </div>  
        `;
        return
    }
    containerSelector.innerHTML = `
      <div class="details-container">
        <div class="sales-block">
          <div id="favorite-items" class="product-container"> </div>
        </div>
      </div>
    `;
    getFavoriteList(favorites);
}

const printBasket = () => {
    if (isLoggedIn()) {
        getBasketNum();
    }
}

printBasket();

printContainer();
