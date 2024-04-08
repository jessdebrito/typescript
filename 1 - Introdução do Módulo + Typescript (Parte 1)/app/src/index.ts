import { productList } from "./database/database";
import { IProduct, IProductCreateData, IProductUpdateData } from "./interfaces/product.interface";

let id = 1;

function createProduct(data: IProductCreateData): IProduct{
    const now = new Date();

    const newProduct: IProduct = {
        id,
        ...data,
        created_at: now
    }

    productList.push(newProduct);

    return newProduct;
}

function removeProduct(removingId: number){
    const index = productList.findIndex(product => product.id === removingId);

    if(index !== -1){
        productList.splice(index, 1);
        return;
    }

    return "Product not found."
}

function updateProduct(updatingId: number, data: IProductUpdateData): IProduct | string{
    const currentProduct = productList.find(product => product.id === updatingId);

    if(!currentProduct){
        return "Product not found."
    }

    const updateProduct = {
        ...currentProduct, ...data
    }

    const index = productList.findIndex(product => product.id === updatingId);

    productList.splice(index, 1, updateProduct);
    
    return updateProduct;

}

createProduct({name:"Computador", price: 3000, description: "Computador gamer"});
const update = updateProduct(1,{ name: "Computador bonito!", price: 5000 });
console.log(update);
const remove = removeProduct(1);
if(remove) console.log(remove);