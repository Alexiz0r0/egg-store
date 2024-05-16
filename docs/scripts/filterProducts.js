import {productsPromise} from "./products.js";
import {printCards} from "./productCards.js";

let products = [];
document.addEventListener("DOMContentLoaded", () => {
    productsPromise().then(
        (res) => {
            products = [...res];
        }
    ).catch(console.error);
});


const searchSelector = document.getElementById("search");
let word = '';

const captureText = (event) => {
    const key = event.key;

    if (key === 'Backspace') {
        word = word.slice(0, -1);
    } else {
        word += key;
    }
    generateList(word);
}

searchSelector.addEventListener("keydown", event => captureText(event));

const generateList = (txt) => {
    if (txt.length === 0) {
        printCards(products, "products");
    } else {
        const filteredProducts = products.filter(product => product.title.toLowerCase().includes(txt.toLowerCase()));

        printCards(filteredProducts, "products");
    }
}
