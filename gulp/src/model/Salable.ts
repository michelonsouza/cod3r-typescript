export default interface Slable {
  name: string;
  price: number;
  discount: number;
  priceWithDiscount(): number;
}