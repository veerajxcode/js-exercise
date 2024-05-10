const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

//marvel.push(dc)
//const all_heroes = marvel.concat(dc)
//console.log(all_heroes);

const all_new_heros = [...marvel, ...dc] //spread operator
console.log(all_new_heros);

const an_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_an_array = an_array.flat(4)
console.log(real_an_array);

console.log(Array.from({name: "veeraj"}));
