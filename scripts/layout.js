const navSelector = document.getElementById("nav");

const options = [
    { title: "Oferta$", linkTo: "./outlet.html" },
    { title: "Como Comprar", linkTo: "./how.html" },
    { title: "Costos y tarifas", linkTo: "./taxs.html" },
    { title: "Mis pedidos", linkTo: "./orders.html" },
    { title: "Garantia", linkTo: "./warranty.html" },
];


for (let option of options) {
    const anchor = document.createElement("a");
    anchor.className = "nav-a"
    anchor.textContent = option.title
    anchor.href = option.linkTo
    navSelector.appendChild(anchor)
}


const footerSelector = document.querySelector("#footer");

const optionsFooter = [
    { title: "Ofertas", opts: ["Laptops", "Audio", "Auriculares"] },
    { title: "Como Comprar", opts: ["Formas de pago", "Envios", "Devoluciones"] },
    { title: "Costos y tarifas", opts: ["Impuestos", "a"] },
    { title: "Mis pedidos", opts: ["3", "b"] },
    { title: "Garantia", opts: ["r", "g"] },
];

for (let col of optionsFooter) {
    const columnUl = document.createElement("ul");
    columnUl.className = "footer-ul";

    const mainItem = document.createElement("li");
    mainItem.className = "footer-main-item";
    const mainAnchor = document.createElement("a");
    mainAnchor.className = "footer-a";
    mainAnchor.textContent = col.title;

    mainItem.appendChild(mainAnchor);
    columnUl.appendChild(mainItem);

    for (let elem of col.opts) {
        const listItem = document.createElement("li");
        listItem.className = "footer-li";
        const optionAnchor = document.createElement("a");
        optionAnchor.className = "footer-a";
        optionAnchor.textContent = elem;

        listItem.appendChild(optionAnchor);
        columnUl.appendChild(listItem);
    }

    footerSelector.appendChild(columnUl);
}

