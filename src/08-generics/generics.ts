function echo(obj: any): any {
  return obj;
}

console.log(echo('Michelon'.length));
console.log(echo(36));
console.log(echo({ name: 'João', age: '36' }));

// use generics
function betterEcho<T>(obj: T): T {
  return obj;
}

console.log(betterEcho<string>('Michelon').length);
console.log(betterEcho<number>(36));
console.log(betterEcho({ name: 'João', age: '36' }));

// Generics API

const tests: Array<number> = [10, 9.3, 7.7];
tests.push(8.4);
// tests.push('5.5');
console.log(tests);
