// Exercicio 1
const dobro = (valor: number): number => {
  return valor * 2;
};
console.log(dobro(10));

// Exercicio 2
const dizerOla = (nome = 'Pessoa'): void => {
  console.log(`Ola, ${nome}`);
};

dizerOla();
dizerOla('Anna');

// Exercicio 3
const nums = [-3, 33, 38, 5];
// Imprimir o menor valor
console.log(Math.min(...nums));

// Exercicio 4
const array = [55, 20, ...nums];

console.log(array);

// Exercicio 5
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);

// Exercicio 6
const cientista = { primeiroNome: 'Will', experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
