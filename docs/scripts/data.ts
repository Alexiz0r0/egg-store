import {ProductI} from "./productNew";

class Product implements ProductI {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public stock: number,
        public images: string[],
        public onSale: boolean,
        public color: string[],
        public description: string) {
    }
}

const prod1: Product = new Product(1, "ipad 9", 440, 10, ["https://i.postimg.cc/kX8PKZpq/ipad2.jpg", "https://i.postimg.cc/pX8xCK4t/41184zi-Iy-NL-AC.jpg", "https://i.postimg.cc/jSHMMjR5/41-Cx6-Qow-O-L-AC.jpg",], true, ["red", "green", "purple", "black"], "great smartphones");
const prod2: Product = new Product(2, "laptop 9.1", 441, 11, ["https://i.postimg.cc/ZYrkGJbG/s-l1600.jpg", "https://i.postimg.cc/L66yxSnB/s-l1600.jpg", "https://i.postimg.cc/wTZhDYJB/s-l1600.jpg", "https://i.postimg.cc/G3FqtddZ/product-110150-mirakl-image-1-large.jpg"], true, ["red", "green", "purple", "black"], "great smartphones");
const prod3: Product = new Product(3, "mac 9.2", 442, 12, ["https://i.postimg.cc/j2CMdQV3/31-Qq6z-Ad-Sq-L-AC.jpg", "https://i.postimg.cc/3wKCxCmj/314j-Y1-Ha-PBL-AC.jpg", "https://i.postimg.cc/1zkFNGNY/41-VQv-Y74ti-L-AC.jpg"], true, ["red", "green", "purple", "black"], "great smartphones");
const prod4: Product = new Product(4, "dell 9.3", 443, 13, ["https://i.postimg.cc/cJNdMRpg/41-Ps8oc-YQAL-AC.jpg", "https://i.postimg.cc/TYyg5xj7/31-Wc-Gpdmfu-L-AC.jpg", "https://i.postimg.cc/g0r1hnJX/21g-Km-vjev-L-AC.jpg"], true, ["red", "green", "purple", "black"], "great smartphones");
const prod5: Product = new Product(5, "iphone 9.4", 444, 14, ["https://i.postimg.cc/XqcnPp9N/31-B0p-Y3ww-L-AC.jpg", "https://i.postimg.cc/jdPMGyW4/31-II9-RZQ5-HL-AC.jpg", "https://i.postimg.cc/jjmNxkmw/31-N3t-E667-L-AC.jpg"], true, ["red", "green", "purple", "black"], "great smartphones");
const prod6: Product = new Product(6, "phone 9.5", 445, 15, ["https://i.postimg.cc/CLsQRjFL/41-Wbrxb5-NWL-AC.jpg", "https://i.postimg.cc/jdPMGyW4/31-II9-RZQ5-HL-AC.jpg", "https://i.postimg.cc/C108nfMS/31-TGkmy-JHCL-AC.jpg"], true, ["red", "green", "purple", "black"], "great smartphones");

const prod7: Product = new Product(7, "ipad 9.5", 446, 16, ["https://i.postimg.cc/MTfGG3w4/51p-Gt-RLfa-ZL-AC.jpg", "https://i.postimg.cc/3wSBhNr1/415-n36-L8-L-AC.jpg", "https://i.postimg.cc/h4w5xyBs/41y-Mdn-Go6o-L-AC.jpg"], true, ["red", "green", "purple", "black"], "great smartphones");
const prod8: Product = new Product(8, "laptop 9.5", 447, 17, ["https://i.postimg.cc/DZt1fYWp/31-Rnp-Vs-Qw-OL-AC.jpg", "https://i.postimg.cc/RZ69KsqL/31z-R12n-u-CL-AC.jpg", "https://i.postimg.cc/bYxRNpTQ/414k6-Bniv-LL-AC.jpg"], true, ["red", "green", "purple", "black"], "great smartphones");
const prod9: Product = new Product(9, "mac 9.5", 448, 18, ["https://i.postimg.cc/MHq3KTfF/41-Plp-J2-I5b-L-AC.jpg", "https://i.postimg.cc/TYyg5xj7/31-Wc-Gpdmfu-L-AC.jpg", "https://i.postimg.cc/9Fn31d7X/31t-Lkc-Bo-UUL-AC.jpg"], true, ["red", "green", "purple", "black"], "great smartphones");

export const productsTS:ProductI[] = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9];

export const productsPromise = () => {
    const responsePromise = fetch("./json/products.json");
    return responsePromise
        .then(resp => resp.json())
        .then(data => data)
        .catch(console.warn);
}
/*
https://i.postimg.cc/MTfGG3w4/51p-Gt-RLfa-ZL-AC.jpg
https://i.postimg.cc/3wSBhNr1/415-n36-L8-L-AC.jpg
https://i.postimg.cc/h4w5xyBs/41y-Mdn-Go6o-L-AC.jpg

https://i.postimg.cc/DZt1fYWp/31-Rnp-Vs-Qw-OL-AC.jpg
https://i.postimg.cc/RZ69KsqL/31z-R12n-u-CL-AC.jpg
https://i.postimg.cc/bYxRNpTQ/414k6-Bniv-LL-AC.jpg

https://i.postimg.cc/MHq3KTfF/41-Plp-J2-I5b-L-AC.jpg
https://i.postimg.cc/TYyg5xj7/31-Wc-Gpdmfu-L-AC.jpg
https://i.postimg.cc/9Fn31d7X/31t-Lkc-Bo-UUL-AC.jpg

https://i.postimg.cc/cJNdMRpg/41-Ps8oc-YQAL-AC.jpg
https://i.postimg.cc/vHVRq1LW/31-YP1s-Im-PL-AC.jpg
https://i.postimg.cc/g0r1hnJX/21g-Km-vjev-L-AC.jpg

https://i.postimg.cc/XqcnPp9N/31-B0p-Y3ww-L-AC.jpg
https://i.postimg.cc/jdPMGyW4/31-II9-RZQ5-HL-AC.jpg
https://i.postimg.cc/jjmNxkmw/31-N3t-E667-L-AC.jpg

https://i.postimg.cc/CLsQRjFL/41-Wbrxb5-NWL-AC.jpg
https://i.postimg.cc/J0mQ82H3/41xs0-Kjo-PRL-AC.jpg
https://i.postimg.cc/C108nfMS/31-TGkmy-JHCL-AC.jpg
*/
