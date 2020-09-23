"use strict";
// string
var nome = 'João';
console.log(nome);
// nome = 28
// numbers
var age = 27;
// age = 'Ana';
age = 27.5;
console.log(age);
// boolean
var hasHobbies = false;
// hasHobbies = 1;
hasHobbies = true;
console.log(hasHobbies);
// explicit types
var myAge;
// eslint-disable-next-line prefer-const
myAge = 27;
console.log(typeof myAge);
// myAge = 'idade 27';
// array
var hobbies = ['Cozinhar', 'Praticar esportes'];
console.log(hobbies);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100;
console.log(hobbies);
// tupla
var address = ['AV Principal', 99, ''];
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
var myColor = Color.Green;
console.log(myColor);
console.log(Color.Blue);
console.log(Color.Laranja, Color.Red);
// any
var car = 'BMW';
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
var calc;
// calc = sayHello;
// calc();
// eslint-disable-next-line prefer-const
calc = multiply;
console.log(calc(5, 6));
