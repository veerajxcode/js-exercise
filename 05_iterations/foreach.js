const coding = ["js", "rubby", "java", "python", "cpp"]
//callback function don't have name
coding.forEach( (value) => {
console.log(`Language is ${value}`);
})

function printMe(coding){
    console.log(coding)
}

coding.forEach(printMe)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (language) => {
console.log(language.languageName);
})