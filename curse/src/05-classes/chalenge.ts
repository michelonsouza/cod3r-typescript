/* eslint-disable max-classes-per-file */
// Exercício 1 - Classe
class Motorcycle {
  public velocity = 0;

  constructor(public name: string) {}

  buzinar(): void {
    console.log('Toooooooooot!');
  }

  acelerate(delta: number): void {
    this.velocity += delta;
  }
}

const motorcycle = new Motorcycle('Ducati');
motorcycle.buzinar();
console.log(motorcycle.velocity);
motorcycle.acelerate(30);
console.log(motorcycle.velocity);

// Exercício 2 - Herança
abstract class Object2D {
  constructor(public base = 0, public height = 0) {}

  abstract area(): number;
}

class Rect extends Object2D {
  area() {
    return this.base * this.height;
  }
}

const rect = new Rect();
rect.base = 5;
rect.height = 7;
console.log(rect.area());

// Exercício 3 - Getters & Setters
class Intern {
  private _firstName = '';

  get firstName(): string {
    return this._firstName;
  }

  set firstName(name: string) {
    if (name.length >= 3) {
      this._firstName = name;
    } else {
      this._firstName = '';
    }
  }
}

const estagiario = new Intern();

console.log(estagiario.firstName);
estagiario.firstName = 'Le';
console.log(estagiario.firstName);
estagiario.firstName = 'Leonardo';
console.log(estagiario.firstName);
