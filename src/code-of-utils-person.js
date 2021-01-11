//Validator Example
import validator from 'validator';
console.log(validator.isEmail('Dipit@ '));

import subtract, {square, add} from './utils.js';

console.log("app is running");
console.log(square(8));
console.log("Add->",add(8,1));
console.log("subtract->",subtract(8,1));

//person

import senior,{isAdult, canDrink} from './person.js';
console.log(isAdult(22));
console.log(canDrink(2));
console.log(`Senior->${senior(98)}`);
