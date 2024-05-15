const user = {
    username: "veeraj",
    price: 999,

    welcomeMessage: function(){
      console.log(`${this.username}, welcome here!!`)  
      console.log(this);
    }
}

//user.welcomeMessage();
user.username = "sam"

//console.log(this);

function chai(){
    let username = "veeraj"
    console.log(this.username); // inside function this will not provide the current context
}

//chai()

const chai02 = function(){
    let username = "veeraj"
    console.log(this.username);
}

//chai02()

const chai03 = () =>{
    let username = "veeraj"
    console.log(this);
}

//chai03()

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 5)); 

//implicit return
const addThree = (num3, num4) => num3 + num4

const user01 = () => ({username: "veeraj"})

console.log(user01());