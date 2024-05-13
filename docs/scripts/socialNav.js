class Social {
    constructor(name, nameID, url, icon, target, id, style) {
        this.name = name;
        this.nameID = nameID;
        this.url = url;
        this.icon = icon;
        this.target = target;
        this.id = id;
        this.style = style;
    }
}

const social1 = new Social("facebook", "fb-ico", "https://www.facebook.com/", "fa-brands fa-facebook", "_blank", 1, "");
const social2 = new Social("instagram", "ist-ico", "https://www.instagram.com/", "fa-brands fa-instagram", "_blank", 2, "");
const social3 = new Social("user-login", "login-ico", "#", "fa-solid fa-user-xmark", "_self", 3, "");
const social4 = new Social("user-logged", "login-ico", "#", "fa-solid fa-user-check", "_self", 4, "");
const social5 = new Social("cart", "cart-img", "./cart.html", "fa-solid fa-cart-shopping", "_self", 5, "nav-cart");
const social6 = new Social("heart", "heart-ico", "./favorite.html", "fa-solid fa-heart", "_self", 6, "");

export const login = [social1, social2, social3];
export const logged = [social1, social2, social5, social6, social4];