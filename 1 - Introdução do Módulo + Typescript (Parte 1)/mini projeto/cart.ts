interface IProduct{
    id: number;
    name: string;
    description?: string;
    price: number;
}

// nome do objeto + colchetes = lista
const productList: IProduct[] = [];

let id = 1;

//Parâmetros opcionais precisam ficar por último
// Autocomplete ctrl+space
function addProduct(name: string, price: number, description?: string){
    const newProduct: IProduct = {
     id: id,
     name,
     price,
     description
    };

    productList.push(newProduct);
    return newProduct;
}

addProduct("Computador", 3000);
addProduct("Computador", 3000, "Computador gamer");