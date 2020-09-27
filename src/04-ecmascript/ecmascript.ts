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
const somar = function (n1: number, n2: number): number {
  return n1 + n2;
};

console.log(somar(2, 2));

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(subtrair(10, 8));

const saudacao = () => console.log('olá');
saudacao();

const falarCom = (pessoa: string) => console.log(`Olá ${pessoa}`);
falarCom('Michelon');

// this

// function normalComThis() {
//   console.log(this);
// }

// normalComThis();

// const normalComThisEspecial = normalComThis.bind(2);
// normalComThisEspecial();

// const arrowComThis = () => console.log(this);
// arrowComThis();

// const arrowComThisEspecial = arrowComThis.bind({ nome: 'michelon' });
// arrowComThisEspecial();

// parâmetro padrão

function contagemRegressiva(inicio = 5, fim = inicio - 5) {
  console.log(inicio);

  while (inicio > fim) {
    inicio -= 1;
    console.log(inicio);
  }

  console.log('fim');
}

contagemRegressiva();
contagemRegressiva(3);

// rest & spread
const numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max(...numbers));

const turmaA: string[] = ['João', 'Maria', 'Fernanda'];
const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaB);

function returnArray(...args: number[]): number[] {
  return args;
}

const numeros = returnArray(1, 2, 2, 3, 4, 5, 6, 7, 8, 8);
console.log(numeros);
console.log(returnArray(...numbers));

const sumVariableArgs = (...args: number[]): number => {
  return args.reduce((a, b) => a + b, 0);
};

console.log(sumVariableArgs(...numbers));
