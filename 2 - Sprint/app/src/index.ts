// POO - Programação orientada a Objetos e tipos derivados
// Classes - encapsula variáveis e métodos (funções)
// Organização de código
// JavaScript / Typescript

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
