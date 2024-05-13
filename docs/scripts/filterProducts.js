import {products} from "./products.js";
import {printCards} from "./productCards.js";

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

const list = [...products];

const generateList = (txt) => {
    console.log(txt);
    if (txt.length === 0) {
        printCards(products, "products");
    } else {
        const filteredProducts = list.filter(product => product.title.toLowerCase().includes(txt.toLowerCase()));

        printCards(filteredProducts, "products");
    }
}
