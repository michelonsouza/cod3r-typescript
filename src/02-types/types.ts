// string
const nome = 'João';
console.log(nome);
// nome = 28

// numbers
let age: any = 27;
// age = 'Ana';
age = 27.5;
console.log(age);

// boolean
let hasHobbies = false;
// hasHobbies = 1;
hasHobbies = true;
console.log(hasHobbies);

// explicit types
let myAge: number;
// eslint-disable-next-line prefer-const
myAge = 27;
console.log(typeof myAge);
// myAge = 'idade 27';

// array
let hobbies: any[] = ['Cozinhar', 'Praticar esportes'];
console.log(hobbies);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
// hobbies = 100;
console.log(hobbies);

// tupla
let address: [string, number, string] = ['AV Principal', 99, ''];
console.log(address);

address = ['Rua Importante', 1260, 'casa 1'];
console.log(address);

// enums
// eslint-disable-next-line no-shadow
enum Color {
  Gray, // 0
  Green = 100,
  Blue = 10,
  Laranja,
  Yellow,
  Red = 100,
}

const myColor: Color = Color.Green;

console.log(myColor);
console.log(Color.Blue);
console.log(Color.Laranja, Color.Red);

// any
let car: any = 'BMW';
console.log(car);
car = { brand: 'BMW', year: 2019 };
console.log(car);

// functions
function returnMyName(): string {
  // return myAge;
  // eslint-disable-next-line no-restricted-globals
  return name;
}

console.log(returnMyName());

function sayHello(): void {
  console.log('Hello');
}

sayHello();

function multiply(numA: number, numB: number): number {
  return numA * numB;
}

// console.log(multiply(2, 'ana'));
console.log(multiply(4, 9));

// function type

let calc: (a: number, b: number) => number;
// calc = sayHello;
// calc();

// eslint-disable-next-line prefer-const
calc = multiply;
console.log(calc(5, 6));

// objects
let user: { name: string; age: number } = {
  name: 'Michelon',
  age: 36,
};

console.log(user);
// user = {};
// user = {
//   nome: 'maria',
//   idade: 30.
// }

user = {
  name: 'maria',
  age: 31,
};
console.log(user);

// chalenge
type IEmployee = {
  names: string[];
  hitPoint(hour: number): string;
};

const employee: IEmployee = {
  names: ['Lilian', 'Júlia', 'Rejane'],
  hitPoint(hour: number): string {
    return hour <= 8 ? 'Ponto normal' : 'Fora do horário';
  },
};

const employee2: IEmployee = {
  names: ['Michelon', 'Marcelo', 'Rafael', 'Well'],
  hitPoint(hour: number): string {
    return hour <= 8 ? 'Ponto normal' : 'Fora do horário';
  },
};

console.log(employee.names);
console.log(employee.hitPoint(8));
console.log(employee.hitPoint(9));

console.log(employee2.names);
