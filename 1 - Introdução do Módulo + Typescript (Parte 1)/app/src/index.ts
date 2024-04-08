import { IProduct, IProductCreateData } from "./interfaces/product.interface";

let id = 1;
function createProduct(data: IProductCreateData){
    const now = new Date();

    const newProduct: IProduct = {
        id,
        ...data,
        created_at: now
    }

    console.log(newProduct)
}

createProduct({name:"Computador", price: 3000, description: "Computador gamer"});