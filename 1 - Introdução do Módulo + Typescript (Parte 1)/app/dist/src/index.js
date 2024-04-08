"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database/database");
let id = 1;
function createProduct(data) {
    const now = new Date();
    const newProduct = Object.assign(Object.assign({ id }, data), { created_at: now });
    database_1.productList.push(newProduct);
}
function removeProduct(removingId) {
    const index = database_1.productList.findIndex(product => product.id === removingId);
    if (index !== -1) {
        database_1.productList.splice(index, 1);
        return;
    }
    return "Product not found.";
}
createProduct({ name: "Computador", price: 3000, description: "Computador gamer" });
const remove = removeProduct(3);
if (remove)
    console.log(remove);
