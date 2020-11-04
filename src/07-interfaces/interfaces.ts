interface Human {
  name: string;
  age?: number;
  [key: string]: any;
  greeting(surname: string): void;
}

function sayHello(person: Human): void {
  console.log(`Olá ${person.name}`);
}

function changeName(person: Human): void {
  person.name = 'Joana';
}

const person: Human = {
  name: 'Michelon',
  age: 36,
  greeting(surname: string): void {
    console.log(`Olá, meu nome é ${this.name} ${surname}`);
  },
};

sayHello(person);
changeName(person);
sayHello(person);

person.greeting('Skywalker');
