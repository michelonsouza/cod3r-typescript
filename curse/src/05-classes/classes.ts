// eslint-disable-next-line max-classes-per-file
class Data {
  public day: number;

  public month: number;

  public year: number;

  constructor(day = 1, month = 1, year = 1970) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

const birth = new Data(23, 7, 1984);
birth.day = 4;
console.log(birth.day);
console.log(birth);

const marriage = new Data(); // posso omitir os parentses
marriage.year = 2017;
console.log(marriage);

class ExpertData {
  constructor(
    public day: number = 1,
    public month: number = 1,
    public year: number = 1970,
  ) {}
}

const expertBirth = new ExpertData(23, 7, 1984);
expertBirth.day = 4;
console.log(expertBirth.day);
console.log(expertBirth);

const expertMarriage = new ExpertData(); // posso omitir os parentses
expertMarriage.year = 2017;
console.log(expertMarriage);

// Desafio Produto
// Atributos: name, price e discount
// Criar construtor
// OBS 1: Desconto é opcional (valor padrão 0)
// OBS 2: Criar dois produtos: passando dois e três parâmetros

class Product {
  constructor(
    public name: string,
    public price: number,
    public discount: number = 0,
  ) {}

  public resume(): string {
    return `${this.name} custa R$${this.priceWithDiscount()} (${
      this.discount * 100
    }% off)`;
  }

  public priceWithDiscount(): number {
    return this.price * (1 - this.discount);
  }
}

const product1 = new Product('Caneta Azul', 2.76);
const product2 = new Product('Computador', 4000, 0.1);

product1.discount = 0.06;

console.log(product1.resume());
console.log(product2.resume());

// modifiers
class Car {
  private velocity = 0;

  constructor(
    public brand: string,
    public model: string,
    private maxVelocity: number = 200,
  ) {}

  protected changeVelocity(delta: number): number {
    const newVelocity = this.velocity + delta;
    const validVelocity = newVelocity >= 0 && newVelocity <= this.maxVelocity;

    if (validVelocity) {
      this.velocity = newVelocity;
    } else {
      this.velocity = delta > 0 ? this.maxVelocity : 0;
    }

    return this.velocity;
  }

  public acelerate(): number {
    return this.changeVelocity(5);
  }

  public stop(): number {
    return this.changeVelocity(-5);
  }
}

const car1 = new Car('Ford', 'Ka', 185);

Array(50)
  .fill(0)
  .forEach(() => car1.acelerate());

console.log(car1.acelerate());

Array(40)
  .fill(0)
  .forEach(() => car1.stop());

console.log(car1.stop());

// simular "erros"
// car1.velocity = 300;
// console.log(`atual -> ${car1.velocity}`);

// car1.maxVelocity = 500;
// console.log(`máxima -> ${car1.maxVelocity}`);

// car1.changeVelocity(150);
// console.log(`atual -> ${car1.velocity}`);

class Ferari extends Car {
  constructor(model: string, maxVelocity: number) {
    super('Ferrari', model, maxVelocity);
  }

  public acelerate(): number {
    return this.changeVelocity(20);
  }

  public stop(): number {
    return this.changeVelocity(-15);
  }
}

const f40 = new Ferari('F40', 324);
console.log(`${f40.brand} ${f40.model}`);
console.log(f40.acelerate());
console.log(f40.acelerate());
console.log(f40.acelerate());
console.log(f40.stop());
console.log(f40.stop());

// getters and setters
class Person {
  private _age = 0;

  get age() {
    return this._age;
  }

  set age(newAge: number) {
    if (newAge >= 0 && newAge <= 120) {
      this._age = newAge;
    }
  }
}

const person1 = new Person();
person1.age = 10;
console.log(person1.age);

// Static atributes
class Mathematic {
  static PI = 3.1415;

  static circleArea(radius: number): number {
    return Mathematic.PI * radius ** 2;
  }
}

// const m1 = new Mathematic();
// m1.PI = 4.2;
// console.log(m1.circleArea(4));

console.log(Mathematic.circleArea(4));

// Abstract class
abstract class Calc {
  protected result = 0;

  abstract execute(...numbers: number[]): void;

  getResult(): number {
    return this.result;
  }
}

class Sum extends Calc {
  execute(...numbers: number[]): void {
    this.result = numbers.reduce((accumulator, value) => accumulator + value);
  }
}

class Multiply extends Calc {
  execute(...numbers: number[]): void {
    this.result = numbers.reduce((accumulator, value) => accumulator * value);
  }
}

let c1 = new Sum();
c1.execute(1, 2, 3, 4, 5);
console.log(c1.getResult());

c1 = new Multiply();
c1.execute(1, 2, 3, 4, 5);
console.log(c1.getResult());

// Singloton pattern
class Unic {
  private static instance = new Unic();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static getInstance(): Unic {
    return Unic.instance;
  }

  now(): Date {
    return new Date();
  }
}

// const error = new Unic();
console.log(Unic.getInstance().now());

// Read only
class Airplane {
  public readonly model: string;

  constructor(model: string, public readonly prefix: string) {
    this.model = model;
  }
}

const turboHelice = new Airplane('TU-114', 'PT-ABC');
// turboHelice.model = 'DC-8';
// turboHelice.prefix = 'PT-DEF';

console.log(turboHelice);
