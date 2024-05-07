const accountId = 144553
let accountEmail = "veeraj11yadav@gmail.com"
var accountPassword = "12345"
accountCity = "Indore"

//accountID = 2  //not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "kanpur"

/*
Prefer not to use var
because of issue in block scope and funtional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);