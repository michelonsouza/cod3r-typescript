type Constructor = { new (...args: any[]): {} };

interface Eletrodomestic {
  print?(): void;
}

interface Printable {
  print(): void;
}

function classLog(classConstructor: Constructor) {
  console.log(classConstructor);
}

function emptyDecorator(_: Constructor): void {}

function classLogIf(value: boolean) {
  return value ? classLog : emptyDecorator;
}

function decorator({ a, b }: { a: string; b: number }) {
  return (_: Constructor): void => {
    console.log(`${a} - ${b}`);
  };
}

function objectLog(classConstructor: Constructor) {
  return class extends classConstructor {
    constructor(...args: any[]) {
      console.log('antes');
      super(...args);
      console.log('depois');
    }
  };
}

function printable<T extends Constructor>(constructor: T) {
  return class extends constructor implements Printable {
    print(): void {
      console.log('print');
    }
  };

  // classConstructor.prototype.print = function() {
  //   console.log(this);
  // }
}

@decorator({ a: 'Test', b: 123 })
@objectLog
@printable
class Eletrodomestic {
  constructor() {
    console.log('new');
  }
}

const eletro = new Eletrodomestic();

if (eletro.print) {
  eletro.print();
}

// Chalange
const loggedUser = {
  name: 'Michelon souza',
  email: 'michelon@email.com',
  admin: true,
};

function adminProfile<T extends Constructor>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);

      if (!loggedUser || !loggedUser.admin) {
        throw Error('User is not a admin');
      }
    }
  };
}

@adminProfile
class AdministrativeChange {
  critic() {
    console.log('Algo crítico foi alterado');
  }
}

new AdministrativeChange().critic();

function freeze(
  _target: any,
  _propertyName: string,
  descritor: PropertyDescriptor,
): void {
  descritor.writable = false;
}

function notNegative(target: any, propertyName: string): void {
  delete target[propertyName];

  Object.defineProperty(target, propertyName, {
    get(): number {
      return target[`_${propertyName}`];
    },
    set(value: number): void {
      if (value < 0) {
        throw new Error('Saldo Inválido');
      } else {
        target[`_${propertyName}`] = value;
      }
    },
  });
}

function paramInfo(target: any, methodName: string, paramIndex: number): void {
  console.log('Target:', target.getBalance());
  console.log('Method:', methodName);
  console.log('Index:', paramIndex);
}

class CurrentAccount {
  @notNegative
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  @freeze
  withdraw(@paramInfo value: number) {
    if (value <= this.balance) {
      this.balance -= value;

      return true;
    }

    return false;
  }

  @freeze
  getBalance() {
    return this.balance;
  }
}

const cc = new CurrentAccount(10248.57);
cc.withdraw(5000);
cc.withdraw(5248.57);

// cc.getBalance = function () {
//   return this['balance'] + 7000;
// };

console.log(cc.getBalance());
