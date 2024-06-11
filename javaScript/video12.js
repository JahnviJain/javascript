const score = 12
console.log(score);
const num = new Number(122)
console.log(num);
console.log(num.toString().length);

console.log(num.toFixed(2)); //122.00
console.log(num.toPrecision(4)); //returns string

const hun = 10000000
console.log(hun.toLocaleString());
console.log(hun.toLocaleString('en-IN'));

console.log(Number.MIN_VALUE);

//math
console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(2.3));
console.log((Math.floor(4.5)));
console.log(Math.ceil(4.4));
console.log(Math.min(2, 5, -2, 1));
console.log(Math.max(4, 6, -2, 8));
console.log(Math.random()); //value b/w 0-1

console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random()*10) + 1));

const min = 10
const max = 20

console.log(Math.floor(((Math.random() * (max - min + 1)) + min)));