//Obejcts can be declared as:
//literals
//constructor (singleton) ---- Object.create

const mySym = Symbol("key1")

const jsUser = {
    name: "Veeraj",
    "fullName": "Veeraj Yadav",
    [mySym]: "myKey1",
    age:31,
    location: "Indore",
    email: "veeraj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);

jsUser.email = "veeraj@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "veeraj@fb.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Veeraj");
}

jsUser.greetingTwo = function(){
    console.log(`Hello there!!, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
