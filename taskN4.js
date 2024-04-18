/*  */
const product = {
    nomi: 'telefon',
    miqdori: 10,
    narxi: 150
};
Object.defineProperty(product, 'productInfo', {
    get: function() {
        return `Nomi: ${this.nomi}, Miqdori: ${this.miqdori}, Narxi: ${this.narxi}`;
    }
});
Object.defineProperty(product, 'setPrice', {
    set: function(newPrice) {
        this.narxi = newPrice;
    }
});
const tovar = Object.assign({}, product);

tovar.setPrice = 200;

console.log("Product ma'lumoti:", product.productInfo);
console.log("Tovar ma'lumoti:", tovar.productInfo);


function FindAllMethods(obj) {
    const methods = [];
    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            methods.push(key);
        }
    }
    return methods;
}
console.log(FindAllMethods(product));

function InvertKeyValue(obj) {
    const invertedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            invertedObj[value] = key;
        }
    }
    return invertedObj;
}
console.log(InvertKeyValue({ red: "qizil", green: "yashil" }));


