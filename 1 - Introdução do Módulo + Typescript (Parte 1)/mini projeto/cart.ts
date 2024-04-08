interface IProduct{
    id: number;
    name: string;
    description?: string;
    price: number;
}

// nome do objeto + colchetes = lista
const productList: IProduct[] = [];

let id = 1; // Id serial

//Parâmetros opcionais precisam ficar por último
// Autocomplete ctrl+space
function addProduct(name: string, price: number, description?: string): IProduct{
    const newProduct: IProduct = {
     id: id,
     name,
     price,
     description
    };

    productList.push(newProduct);

    id++; // o próximo produto terá o id + 1 do anterior

    return newProduct;
}

addProduct("Computador", 3000);
addProduct("Computador", 3000, "Computador gamer");

// Sempre que não quisermos que exista um return, podemos descrever como void
function removeProduct(removingdId: number): void| string{
    const index = productList.findIndex(product => product.id === removingdId);

    if (index >= 0) {
        productList.splice(index, 1);
        return;
    }

    return "Product not found.";
}