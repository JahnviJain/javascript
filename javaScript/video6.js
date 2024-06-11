let num = 33

console.log(typeof(num));

let num1 = "33abc"
let n = null
let n1 = undefined
let n2 = true
console.log(typeof num1);

let num2 = Number(num1)
console.log(typeof num2);
console.log(num2); //type issue, that is why ppl shifted to typescript

num2 = Number(n)
console.log(num2);

num2 = Number(n1)
console.log(num2);

num2 = Number(n2)
console.log(num2);

//for number
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

//for boolean
// 1 => true; 0 => false
// "" => false
// "hitesh" => true