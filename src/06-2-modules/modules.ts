import { reactArea } from './rect';
// import reactArea from './rect';
// import { circleArea } from './circle';
import { circleArea as circ } from './circle';

const { sayHello } = require('./new');

console.log('Modulo carregado...');

console.log(reactArea(7, 8));
console.log(circ(2));

console.log(sayHello('Michelon'));
