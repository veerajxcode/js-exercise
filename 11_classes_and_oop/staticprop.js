class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createID(){
        return `123`
    }
}

const veer = new User("Veeraj")
//console.log(veer.createID())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }

}

const chai = new Teacher("veer", "veer@gmail.com");