const accountId = 122445
let accountEmail = "jahnvi@google.com"
var accountPassword = "12233"
accountCity = "jaipur"
let accountState;

accountEmail = "jj@hotmail.com"
accountPassword = "2334"
accountCity = "banglore"

/*
prefer not to use var 
because of its issue in block and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])