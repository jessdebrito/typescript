// POO - Programação orientada a Objetos e tipos derivados
// Classes - encapsula variáveis e métodos (funções)
// Organização de código
// JavaScript / Typescript

import { IRecipe, TRecipeCreateData, TRecipeUpdateData } from "./omitpickpartial";

// Toda classe também inicie com uma letra maiúscula
// PascalCase

/* --------------

let firstName = "Jéssica";
function sayHello (name: string){
    console.log(firstName);
} 

-------------- */ 

// this - é utilizado para se referir a própria classe e consegue acessar varicáveis e métodos

// Planta de um "objeto"
// a classe deve ser escalável

/* --------------

class Person {
    name = "Jéssica"; // qualquer nome
    age = 29; // qualquer idade

    sayHello() {
        console.log(`Olá, meu nome é ${this.name}!`);
    }
}

-------------- */ 

// Método construtor:

class Person {
    name: string; // qualquer nome
    age: number; // qualquer idade

    //método que executa na inicialização de uma classe
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;

    }

    sayHello() {
        console.log(`Olá, meu nome é ${this.name}!`);
    }
}

// A classe aceita múltiplas instâncias
const personA = new Person("Jéssica", 29);
const personB = new Person("Alex", 33);


class RecipeService{
    // Caso o valor deva ser o mesmo em todas as instâncias, atribuir valor dentro da classe
    recipeList: IRecipe[] = [];
    id = 1; // id começa em 1

    //Método executado na inicialização da classe (instância)
    constructor(recipeList: IRecipe[] = []){
        this.recipeList = recipeList;
    }

    create(data: TRecipeCreateData){
        const now = new Date();


        const newRecipe: IRecipe = {
            id: this.id,
            ...data,
            created_at: now
        }

        //this usado para algo no escopo da classe
        this.recipeList.push(newRecipe);

        this.id++; // para próxima receita ter id diferente

        return newRecipe;
    }

    remove(removingId: number){
        const index = this.recipeList.findIndex(recipe => recipe.id === removingId);

        if(index !== -1){
            this.recipeList.splice(index, 1);
            return "Recipe deleted successfully.";
        }

        return "Recipe not found."
    }

    update(updatingId: number, data: TRecipeUpdateData){
        const currentRecipe = this.recipeList.find(recipe => recipe.id === updatingId);

        if(!currentRecipe){
            return "Recipe not found."
        }
        const now = new Date();

        const updateRecipe: IRecipe ={
            ...currentRecipe,
            ...data,
            uppdated_at: now // o momento da att // a nova data 
        };

        const index = this.recipeList.findIndex((recipe) => recipe.id == updatingId);

        this.recipeList.splice(index, 1, updateRecipe);
        return updateRecipe;

    }
}