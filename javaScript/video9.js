const id = Symbol("123")
const id1 = Symbol(123)

console.log(typeof id);
console.log(id === id1);
console.log(id);
console.log(id1);

const bidNumber = 1234567899876554322211123n
console.log(typeof bidNumber);

//array
const names = ["jj", "jahnvi", "jain"]

//object
let obj = {
    name: "jahnvi",
    age: 21
}

//function
const myFun = function(){
    console.log("hello");
}
