//Object literal example
function User(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedin = signedIn;

    this.getUserDetails = function(){
        console.log(`Get user details ${this.username}`);
    }
    return this
}
const userOne = new User("Veeraj", 12, true)
const userTwo = new User("Monika", 11, false)
console.log(userOne);