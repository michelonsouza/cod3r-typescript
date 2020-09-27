"use strict";
// string
const nome = 'João';
console.log(nome);
// nome = 28
// numbers
let age = 27;
// age = 'Ana';
age = 27.5;
console.log(age);
// boolean
let hasHobbies = false;
// hasHobbies = 1;
hasHobbies = true;
console.log(hasHobbies);
// explicit types
let myAge;
// eslint-disable-next-line prefer-const
myAge = 27;
console.log(typeof myAge);
// myAge = 'idade 27';
// array
let hobbies = ['Cozinhar', 'Praticar esportes'];
console.log(hobbies);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100;
console.log(hobbies);
// tupla
let address = ['AV Principal', 99, ''];
console.log(address);
address = ['Rua Importante', 1260, 'casa 1'];
console.log(address);
// enums
// eslint-disable-next-line no-shadow
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 10] = "Blue";
    Color[Color["Laranja"] = 11] = "Laranja";
    Color[Color["Yellow"] = 12] = "Yellow";
    Color[Color["Red"] = 100] = "Red";
})(Color || (Color = {}));
const myColor = Color.Green;
console.log(myColor);
console.log(Color.Blue);
console.log(Color.Laranja, Color.Red);
// any
let car = 'BMW';
console.log(car);
car = { brand: 'BMW', year: 2019 };
console.log(car);
// functions
function returnMyName() {
    // return myAge;
    // eslint-disable-next-line no-restricted-globals
    return name;
}
console.log(returnMyName());
function sayHello() {
    console.log('Hello');
}
sayHello();
function multiply(numA, numB) {
    return numA * numB;
}
// console.log(multiply(2, 'ana'));
console.log(multiply(4, 9));
// function type
let calc;
// calc = sayHello;
// calc();
// eslint-disable-next-line prefer-const
calc = multiply;
console.log(calc(5, 6));
// objects
let user = {
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
const employee = {
    names: ['Lilian', 'Júlia', 'Rejane'],
    hitPoint(hour) {
        return hour <= 8 ? 'Ponto normal' : 'Fora do horário';
    },
};
const employee2 = {
    names: ['Michelon', 'Marcelo', 'Rafael', 'Well'],
    hitPoint(hour) {
        return hour <= 8 ? 'Ponto normal' : 'Fora do horário';
    },
};
console.log(employee.names);
console.log(employee.hitPoint(8));
console.log(employee.hitPoint(9));
console.log(employee2.names);
// union types
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '100';
console.log(`Minha nota é ${nota}`);
// manual type checking
const value = 30;
if (typeof value === 'number') {
    console.log('É um valor number');
}
else {
    console.log(typeof value);
}
// type never
function error(msg) {
    throw new Error(msg);
}
const product = {
    name: 'Sabão',
    price: 8,
    productValidate() {
        if (!this.name || !this.name.trim().length) {
            error('Precisa ter um nome');
        }
        if (this.price <= 0) {
            error('Preço inválido');
        }
    },
};
product.productValidate();
// strictNullChecks
const height = 12;
// height = null;
let optionalHeight = 12;
optionalHeight = null;
console.log(height, optionalHeight);
const contact1 = {
    name: 'Filano',
    tel1: '987654321',
};
console.log(contact1.name);
console.log(contact1.tel1);
console.log(contact1.tel2);
let nullable = null; // any
nullable = 12;
nullable = 'abc';
console.log(nullable);
const bankAccount = {
    balance: 3456,
    deposit(depositValue) {
        this.balance += depositValue;
    },
};
const client = {
    name: 'Michelon Souza',
    bankAccount,
    contacts: ['987654321', '912345678'],
};
client.bankAccount.deposit(3000);
console.log(client);
//# sourceMappingURL=types.js.map