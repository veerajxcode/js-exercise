const  myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num) => {
    return num > 4
})
//console.log(newNums);

const secondNums = []
myNums.forEach( (num) => {
    if (num > 4) {
        secondNums.push(num)
    }
} )

//console.log(secondNums);

const thirdNums = myNums.map( (num) => num + 10 )
//console.log(thirdNums);

const fourthNums = myNums.map( (num) => num * 10 ).map( (num) => num + 1 )
//console.log(fourthNums);

//reduce
const fifthNums = myNums.reduce( function (acc, currval) {
    return acc + currval
}, 0 )
//console.log(fifthNums);

const sixthNums = myNums.reduce( (acc, currval) => {
    return acc + currval
}, 0)
console.log(sixthNums);