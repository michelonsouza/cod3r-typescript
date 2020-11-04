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

// Using Classes...

class ClientHuman implements Human {
  public name = '';

  public lastBuy = new Date();

  greeting(surname: string): void {
    console.log(`Olá, meu nome é ${this.name} ${surname}`);
  }
}

const clientHuman = new ClientHuman();
clientHuman.name = 'Han';
sayHello(clientHuman);
clientHuman.greeting('Solo');
console.log(clientHuman.lastBuy);

// Interface function

interface CalcFunction {
  (a: number, b: number): number;
}

const power: CalcFunction = (base: number, exp: number): number => {
  return base ** exp;
};

console.log(power(3, 10));
