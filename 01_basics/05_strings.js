const name = "veeraj"
const repoCount = 50
console.log(name + repoCount + " Value");

//String Interpolation:  ``
console.log(`My name is ${name} and my repocount is ${repoCount}`)

const gameName = new String('Veeraj-yadav')

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(0, 4)
console.log(anotherString);

const newStringOne = "  veeraj  "
console.log(newStringOne.trim());

const url = "https://test.com/veeraj%20yadav"

console.log(url.replace('%20', '-'))
console.log(url.includes('trip'))
