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

// Heritage
interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a(): void {
    console.log('method a');
  }
}

class RealAB implements A, B {
  a(): void {
    console.log('method A');
  }

  b(): void {
    console.log('method A');
  }
}

class RealABC implements ABC {
  a(): void {
    console.log('method A');
  }

  b(): void {
    console.log('method A');
  }

  c(): void {
    console.log('method A');
  }
}

function test(b: B): void {
  console.log(b);
}

test(new RealABC());

abstract class AbstractABD implements A, B {
  a(): void {
    console.log('method A');
  }

  b(): void {
    console.log('method A');
  }

  abstract d(): void;
}

interface Object {
  log(): void;
}

Object.prototype.log = function () {
  console.log(this.toString());
};

const ax = 2;
const ay = 3;
const az = 4;

const cli = {
  name: 'Michelon',
  toString() {
    return this.name;
  },
};

ax.log();
ay.log();
az.log();

cli.log();
