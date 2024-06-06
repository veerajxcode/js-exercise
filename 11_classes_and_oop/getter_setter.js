class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get password(){
        return this.password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const veeraj = new User("veer@example.com", "123")
console.log(veeraj.password);