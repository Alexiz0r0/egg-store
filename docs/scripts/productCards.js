import {productsPromise} from "./products.js";
import {createCard, getBasketNum, isLoggedIn} from "./util.js";
import {productsTS} from "./data.js";

let products = [];
document.addEventListener("DOMContentLoaded", () => {
    productsPromise().then(
        (res) => {

            printCards(res, "products");
        }
    ).catch(console.error);
    console.info(productsTS)
});

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


