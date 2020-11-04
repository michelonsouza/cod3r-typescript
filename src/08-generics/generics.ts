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
