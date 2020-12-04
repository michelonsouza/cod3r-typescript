/* eslint-disable @typescript-eslint/no-namespace */
export namespace Geometric {
  export namespace Area {
    export function rect(base: number, height: number): number {
      return base * height;
    }
  }
}

console.log(Geometric.Area.rect(10, 20));
