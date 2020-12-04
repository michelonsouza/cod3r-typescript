/* eslint-disable @typescript-eslint/no-namespace */
export namespace Geometric {
  export namespace Area {
    const PI = 3.14;

    export function circle(radius: number): number {
      return PI * radius ** 2;
    }
  }
}
