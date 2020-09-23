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
