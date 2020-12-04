/* eslint-disable @typescript-eslint/no-namespace */
namespace Geometric {
  export namespace Area {
    const PI = 3.14;

    export function circle(radius: number): number {
      return PI * radius ** 2;
    }

    export function rect(base: number, height: number): number {
      return base * height;
    }
  }
}

console.log(Geometric.Area.circle(10));
console.log(Geometric.Area.rect(10, 20));
