let cartList = [];
const getCartList = () => {
    getBasketNum();
    if (localStorage.getItem('cart')) {
        cartList = JSON.parse(localStorage.getItem('cart'));
        printCart(cartList);
    } else {
        cartList = [];
        const cartSelector = document.getElementById("cart-items");
        cartSelector.innerHTML = "Sin productos";
    }
    printSummary(cartList);
    return cartList;
}

const printCart = (list) => {
    let cartTemplate = "";
    for (const element of list) {
        cartTemplate = cartTemplate + createCart(element);
    }
    const cartSelector = document.getElementById("cart-items");
    cartSelector.innerHTML = cartTemplate;
}

const createCart = (item) => {
    return `
    <div class="item-box">
    
      <div class="item-img">
          <div class="circular--portrait"> 
              <img src="${item.image}" alt="${item.title}" /> 
          </div>
      </div>
      <div class="item-info">
        <div class="items-info-col">
          <span class="items-title">${item.title}</span>
            <span class="items-color">Color: ${item.color}</span>
          </div>
          <div class="items-info-block">
            <input class="item-input" data-id="${item.id}" type="number" min="1" value=${item.quantity} max="${item.stock}" id="quantityInput"/>
          </div>
        </div>
        <div class="item-price">
          <span id="price" class="item-price">&#36;${item.price}</span>
        </div>
    </div>
    `
}

const createSummary = (list) => {
    const total = calculateTotal(list);
    return `
      <div class="summary-title">
        <h2 class="summary-total-price">Resume del pedido</h2>
      </div>
      <div class="summary-total">
        <span class="summary-total-label">Total:</span>
        <span id="total-price" class="summary-total-price">&#36;${total}</span>
      </div>
      <p class="summary-description">
        Incluye impuesto PAIS y percepción AFIP.
      </p>
      <div class="summary-btn">
        <button type="button" class="cart-btn" id="end-shopping">
          Comprar
        </button>
      </div>
   `
}

const printSummary = (list) => {
    const summarySelector = document.getElementById("cart-summary");
    summarySelector.innerHTML = createSummary(list);
}

const calculateTotal = (list) => {
    let total = 0;
    for (const element of list) {
        total = total + (element.price * element.quantity);
    }
    return total;
}


getCartList();

const quantityInputs = document.querySelectorAll('.item-input');

quantityInputs.forEach(input => {
    input.addEventListener('input', (event) => {
        const inputId = event.target.getAttribute('data-id');
        const inputValue = event.target.value;
        console.log(`Input con id ${inputId} cambiado a ${inputValue}`);
        changeQyt(inputValue, inputId);
    });
});


const changeQyt = (quantity, id) => {
    const newItems = cartList.map(producto => {
        if (producto.id === Number(id)) {
            return {...producto, quantity: Number(quantity)};
        }
        return producto;
    });
    cartList = newItems;
    console.log(newItems);
    saveOnLocal(newItems);

}

const saveOnLocal = (items) => {
    localStorage.setItem("cart", JSON.stringify(items));
    let newTotal = calculateTotal(items);
    console.log(newTotal);
    const subtotalSelector = document.getElementById('total-price');
    subtotalSelector.innerHTML = `&#36;${newTotal}`;
}