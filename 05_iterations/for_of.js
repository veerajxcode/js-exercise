//for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

//Map object holds key-value pair
const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map);

for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}

const myObject ={
    'game1': 'NFS',
    'game2': 'Spiderman'
}
/*for (const [key,value] of myObject) {
console.log(`${key} :- ${value}`);
}*/