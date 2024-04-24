class Product {
    constructor(id, title, price, stock, images, onSale, color, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onSale;
        this.color = color;
        this.description = description;
    }

    get getSupplier() {
        return this._supplier;
    }

    set setSupplier(newName) {
        this._supplier = newName;
    }
}

const prod1 = new Product(1, "ipad 9", 440, 10, ["https://i.postimg.cc/kX8PKZpq/ipad2.jpg", "https://i.postimg.cc/63FH2Pbg/product-107184-mirakl-image-4-large.jpg", "https://i.postimg.cc/rmmjYjWg/product-22014-mirakl-image-1.jpg"], true, ["red", "green", "purple", "black"], "great smartphones");
const prod2 = new Product(2, "laptop 9.1", 441, 11, ["https://i.postimg.cc/Qxkc7M6h/product-2456-mirakl-image-4-large.jpg", "https://i.postimg.cc/W4GZskmr/product-72551-mirakl-image-1-medium.jpg", "https://i.postimg.cc/rmmjYjWg/product-22014-mirakl-image-1.jpg"], true, ["red", "green", "purple", "black"], "great smartphones");
const prod3 = new Product(3, "mac 9.2", 442, 12, ["https://i.postimg.cc/63FH2Pbg/product-107184-mirakl-image-4-large.jpg", "https://i.postimg.cc/rmmjYjWg/product-22014-mirakl-image-1.jpg"], true, ["red", "green", "purple", "black"], "great smartphones");
const prod4 = new Product(4, "iphone 9.3", 443, 13, ["https://i.postimg.cc/W4GZskmr/product-72551-mirakl-image-1-medium.jpg", "https://i.postimg.cc/rmmjYjWg/product-22014-mirakl-image-1.jpg", "https://i.postimg.cc/kX8PKZpq/ipad2.jpg"], true, ["red", "green", "purple", "black"], "great smartphones");
const prod5 = new Product(5, "dell 9.4", 444, 14, ["https://i.postimg.cc/5NCbKYcW/product-108645-mirakl-image-4-large.jpg","https://i.postimg.cc/Qxkc7M6h/product-2456-mirakl-image-4-large.jpg", "https://i.postimg.cc/63FH2Pbg/product-107184-mirakl-image-4-large.jpg", "https://i.postimg.cc/rmmjYjWg/product-22014-mirakl-image-1.jpg"], true, ["red", "green", "purple", "black"], "great smartphones");
const prod6 = new Product(6, "phone 9.5", 445, 15, ["https://i.postimg.cc/g24z39Fx/product-72566-mirakl-image-1-large.jpg","https://i.postimg.cc/W4GZskmr/product-72551-mirakl-image-1-medium.jpg", "https://i.postimg.cc/rmmjYjWg/product-22014-mirakl-image-1.jpg", "https://i.postimg.cc/kX8PKZpq/ipad2.jpg"], true, ["red", "green", "purple", "black"], "great smartphones");

const products = [prod1, prod2, prod3, prod4, prod5, prod6];

window.products = products;
