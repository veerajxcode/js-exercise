const promiseOne = new Promise(function(resolve,reject){
    //Do an Async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log(`Async task is complete`);
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

//other way
new promiseOne(function(resolve,reject){
    setTimeout(function(){
        console.log(`Async task2`);
        resolve()
    },100)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,rejet){
    setTimeout(function(){
        resolve({username: "veeraj", email: "veeraj11yadav@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"hitesh", password:"123"})
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)

})

promisefour.then((user) => {
console.log(user);
return user.username

}).then((username) =>{
    console.log(username);

}).catch(function(error){
    console.log(error);
}).finally(() => console.log("promise is either resolve or rejected"))


const promiseFive = new Promise((resolve,reject) =>{
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"javascript", password:"123"})
        }else{
            reject('ERROR:JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try{const response = await promiseFive
    console.log(response);
    }catch (error){
        console.log(error);
    }
}

consumePromiseFive()

/*async function getAllUsers(){
    try {
    const response = await fetch('https://jsonplaceholder.typecode.com/users')
    const data = await response.json()
    console.log(data);    
    } catch (error) {
       console.log("E:", error); 
    }
    
}*/
//getAllUsers()

fetch('https://jsonplaceholder.typecode.com/users')
.then((response) => {
    return response.json()
})
.then( (data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})