import { productList } from "./database/database";
import { IProduct, IProductCreateData } from "./interfaces/product.interface";

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
    console.log(index);
}


createProduct({name:"Computador", price: 3000, description: "Computador gamer"});

removeProduct(1);