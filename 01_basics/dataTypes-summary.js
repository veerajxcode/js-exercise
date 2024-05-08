//Data Types divided into two parts

// (Value) Primitive data type
// 7 types
// String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId)

// (Reference) Non primitive
// Array, Objects, Functions


// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)


// Stack gets the copy of the original value. So original value will remain same .
let nameOne = "Veeraj"
let nameTwo = nameOne
nameTwo = "Yadav"
console.log(nameOne)
console.log(nameTwo)

//Heap gets the reference from the original value. Original value can get change.
let userOne = {
    email: "xyz@g.com",
    upi: "ade@ybl"
}

let userTwo = userOne
userTwo.email = "abc@g.com"

console.log(userOne.email)
console.log(userTwo.email)
