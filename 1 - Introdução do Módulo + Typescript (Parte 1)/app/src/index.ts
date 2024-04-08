import { IProductCreateData } from "./interfaces/product.interface";

let id = 1;
function createProduct(data: IProductCreateData){
    console.log(data)
}

createProduct({name:"Computador", price: 3000, description: "Computador gamer"});