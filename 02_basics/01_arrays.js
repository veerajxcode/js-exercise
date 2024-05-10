// array

/*
-Javascript arrays are resizable and can contain
mix of different datatypes.
-Javascript are not associative arrays
-Javascript arrays are zero-indexed
-Javascript array-copy operations create 
shallow copies
*/

const myArray = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "Nagraj"]

const myNewArray = new Array(1,2,3,4)
console.log(myArray[1]);

//Array methods

myArray.push(6)
myArray.pop()

myArray.unshift(9)
myArray.shift()


console.log(myArray.includes(9));
console.log(myArray.indexOf(3));
console.log(myArray);

//slice and splice
console.log("A ", myArray);

const myn1 = myArray.slice(1, 3)
console.log("B ", myn1);

const myn2 = myArray.splice(1, 3)
console.log("C ", myn2);