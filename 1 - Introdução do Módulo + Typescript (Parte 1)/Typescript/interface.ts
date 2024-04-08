// interface = recurso para criação de tipos de objetos;
// interface é um tipo/type;
// A interface por der exportada e importada;
interface IPet {
    id: number;
    name: string;
    species: string;
}

// I para indicar que é uma interface;
export interface IPerson {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    pet?: IPet;
};
// Uso de "?" para indicar que a chave pode ou não estar definida no objeto

const person: IPerson = {
    id: 1,
    firstName: "Jéssica",
    lastName: "de Brito",
    age: 29,
    pet: {id: 1, name: "Blue", species:"Cachorro"},
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
};

function returnPerson():  IPerson {
    return person;
};