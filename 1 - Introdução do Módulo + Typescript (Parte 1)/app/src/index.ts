import { productList } from "./database/database";
import { IProduct, IProductCreateData, IProductUpdateData } from "./interfaces/product.interface";

let id = 1;

function createProduct(data: IProductCreateData){
    const now = new Date();

    const newProduct: IProduct = {
        id,
        ...data,
        created_at: now
    }

    productList.push(newProduct);
}

function removeProduct(removingId: number){
    const index = productList.findIndex(product => product.id === removingId);

    if(index !== -1){
        productList.splice(index, 1);
        return;
    }

    return "Product not found."
}

function updateProduct(updatingId: number, data: IProductUpdateData){
    const currentProduct = productList.find(product => product.id === updatingId);

    if(!currentProduct){
        return "Product not found."
    }

    const updateProduct = {
        ...currentProduct, ...data
    }
    console.log(updateProduct)
}

createProduct({name:"Computador", price: 3000, description: "Computador gamer"});
updateProduct(1,{ name: "Computador bonito!", price: 5000 })
const remove = removeProduct(1);
if(remove) console.log(remove);