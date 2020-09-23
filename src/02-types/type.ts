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
