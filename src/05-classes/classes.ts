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

  private changeVelocity(delta: number): number {
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
