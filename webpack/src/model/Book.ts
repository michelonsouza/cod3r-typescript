import Salable from './Salable';

export default class Book implements Salable {
  constructor(public name: string, public readonly price: number, public readonly discount: number) {}

  priceWithDiscount(): number {
    return this.price * (1 - this.discount);
  }
}