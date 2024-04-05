// Tipos primitivos
// valores primitivos: string, number, boolean, undefined, null

// Podemos apontar um tipo, devemos apontar um tipo:
// PODEMOS apontar tipos em instâncias de variável e constantes
 // let firstName: string = 123; // erro!!! 
let firstName2: string = "Jéssica"; // certo!
let firstName3: boolean = true;  // certo!


let firstName4 = 123; // certo!!! 
let firstName5 = "Jéssica"; // certo!
let firstName6 = true;  // certo!

// typescript não quer deixar o codigo muito verboso,
// por isso há uma inteligência.
// Inferência - tenta deduzir, de forma expontânea o "tipo".

// DEVEMOS  apontar tipos para os parâmetros das nossas funções. exemplo:
 function sub(a: number, b: number){
    return a - b;
 };

 function sayMyName(name: string){
    console.log(name);
 };

 // PODEMOS apontar o tipo, mas é opcional

 function sub2(a: number, b: number): number{
    return a - b;
 };

// Listas (arrays)
// []
// Poremos apontar tipo em listar que temos valores preenchidos(Opcional)
let nameList: string[] = ["Jéssica", "Amaro", "Patricia", "Victor"];

// DEVEMOS apontar tipo em listas vazias. Exempli do typescript falhando em idenficiar o tipo:
let petList = [];
