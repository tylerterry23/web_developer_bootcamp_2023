import {add} from js/add.js


let product = 'artichoke';
let price = 3.99;
let qty = 5;

console.log(`you bought ${qty} ${product}s, for $${price} no cap`)

let total = add(17, 4);
console.log(total);

for (let i = 0; i < 10; i++) {
    console.log('hello')
}

const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`

console.log(roll)
