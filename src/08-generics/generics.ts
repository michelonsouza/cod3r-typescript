class AltData {
  public day: number;

  public month: number;

  public year: number;

  constructor(day = 1, month = 1, year = 1970) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

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

// Generics Type
const callEcho: <T>(data: T) => T = betterEcho;

console.log(callEcho<string>('alguma coisa'));

// Classes with generics
abstract class BinaryOperation<T, R> {
  constructor(public operator1: T, public operator2: T) {}

  abstract execute(): R;
}

// console.log(new BinaryOperation('Bom ', 'Dia').execute());
// console.log(new BinaryOperation(3, 7).execute());
// console.log(new BinaryOperation(3, 'Opa').execute());

class BinarySum extends BinaryOperation<number, number> {
  execute(): number {
    return this.operator1 + this.operator2;
  }
}

console.log(new BinarySum(3, 4).execute());
console.log(new BinarySum(30, 434).execute());

class DateDiff extends BinaryOperation<AltData, string> {
  getTime(date: Data): number {
    const { day, month, year } = date;

    return new Date(`${month}/${day}/${year}`).getTime();
  }

  execute(): string {
    const t1 = this.getTime(this.operator1);
    const t2 = this.getTime(this.operator2);
    const diff = Math.abs(t1 - t2);
    const day = 1000 * 60 * 60 * 24;

    return `${Math.ceil(diff / day)} dia(s)`;
  }
}

const d1 = new AltData(1, 2, 2020);
const d2 = new AltData(5, 2, 2020);
console.log(new DateDiff(d1, d2).execute());

class Queue<T extends number | string> {
  private queue: T[];

  constructor(...args: T[]) {
    this.queue = args;
  }

  enter(elemnt: T): void {
    this.queue.push(elemnt);
  }

  next(): T | null {
    if (this.queue.length && this.queue[0]) {
      const [first] = this.queue;
      this.queue.splice(0, 1);

      return first;
    }

    return null;
  }

  printer(): void {
    console.log(this.queue);
  }
}

const queue = new Queue<string>('Michelon', 'Lilian', 'Júlia');
queue.printer();
queue.enter('rafa');
queue.printer();
console.log(queue.next());
console.log(queue.next());
console.log(queue.next());
queue.printer();

const newQueue = new Queue<number>(1, 2, 3);
newQueue.printer();
