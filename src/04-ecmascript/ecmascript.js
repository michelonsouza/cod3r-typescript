"use strict";
// let & const
const seraQuePode = '?'; // hoisting -> let
console.log(seraQuePode);
const estaFrio = true;
if (estaFrio) {
    const acao = 'Colocar o casaco'; // escopo de bloco do let -> let
    console.log(acao);
}
const cpf = '123.456.000-09';
// cpf = '789.456.123-0';
console.log(cpf);
// escopo de função
// const segredo = 'externo';
function revelar() {
    const segredo = 'interno';
    console.log(segredo);
}
revelar();
// console.log(segredo); // não acessa a variável
// arrow function
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(10, 8));
const saudacao = () => console.log('olá');
saudacao();
const falarCom = (pessoa) => console.log(`Olá ${pessoa}`);
falarCom('Michelon');
// this
function normalComThis() {
    console.log(this);
}
normalComThis();
const normalComThisEspecial = normalComThis.bind(2);
normalComThisEspecial();
const arrowComThis = () => console.log(this);
arrowComThis();
const arrowComThisEspecial = arrowComThis.bind({ nome: 'michelon' });
arrowComThisEspecial();
//# sourceMappingURL=ecmascript.js.map