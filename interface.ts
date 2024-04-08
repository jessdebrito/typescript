// interface = recurso para criação de tipos de objetos;
// I para indicar que é uma interface;
// interface é um tipo/type;
// A interface por der exportada e importada;

interface IPerson {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}


const person: IPerson = {
    id: 1,
    firstName: "Jéssica",
    lastName: "de Brito",
    age: 29,
};
/* 
function printPersonData(person: IPerson) {
    console.log(`Meu nome é ${person.firstName}`);
    console.log(`Eu tenho ${person.age} anos.`); 
}
*/
function printPersonData({ firstName, age }: IPerson) {
    console.log(`Meu nome é ${firstName}`);
    console.log(`Eu tenho ${age} anos.`); 
}

function returnPerson():  IPerson {
    return person;
}