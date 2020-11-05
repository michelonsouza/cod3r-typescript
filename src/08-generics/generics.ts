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

// Array
function printer<T>(args: T[]): void {
  args.forEach(element => console.log(element));
}

printer([1, 2, 3]);
printer<number>([1, 2, 3]);
printer<string>(['michelon', 'lilian', 'julia']);
printer<{ name: string; age: number }>([
  { name: 'michelon', age: 36 },
  { name: 'lilian', age: 32 },
]);

interface Student {
  name: string;
  age: number;
}

printer<Student>([
  { name: 'michelon', age: 36 },
  { name: 'lilian', age: 32 },
]);
