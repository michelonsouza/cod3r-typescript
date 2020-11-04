interface Human {
  name: string;
}

function sayHello(person: Human): void {
  console.log(`Olá ${person.name}`);
}

function changeName(person: Human): void {
  person.name = 'Joana';
}

const person = {
  name: 'Michelon',
  age: 36,
};

sayHello(person);
changeName(person);
sayHello(person);
