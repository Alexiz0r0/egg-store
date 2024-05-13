import {products} from "./products.js";
import {createCard, getBasketNum, isLoggedIn} from "./util.js";

export const printCards = (arrayOfProducts, idSelector) => {
    let productsTemplate = "";
    for (const element of arrayOfProducts) {
        productsTemplate = productsTemplate + createCard(element);
    }
    const productsSelector = document.getElementById(idSelector);
    productsSelector.innerHTML = productsTemplate;
}
const printBasket = () => {
    if (isLoggedIn()) {
        getBasketNum();
    }
}

printBasket();
printCards(products, "products");

