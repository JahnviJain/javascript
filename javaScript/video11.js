let name = "Jahnvi"
let repoCount = 22

//console.log(name + repoCount + " Value"); //not a good way of implementing it 

console.log(`name is ${name} and repocount is ${repoCount}`);

const gameName = new String("jahnvi-jain-com")
console.log(gameName.length);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString);

const newString1 = gameName.slice(-5,4)
console.log(newString1);

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'));//string to array