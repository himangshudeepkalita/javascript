const accountId = 144553
let accountEmail = "himangshu@google.com"
var accountPassword = "12345"
accountCity = "Bangalore"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hdk@hdk.com"
accountPassword = "2121222122"
accountCity = "Assam"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])