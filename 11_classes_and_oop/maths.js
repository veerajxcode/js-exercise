const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

//example to set your own variable value
const chai = {
    name: 'chai',
    price: 230,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));