const accountId = 303
let accountEmail = "skadnaan@google.com"
var accountPassword = "6303"
accountCity = "Hyderabad"
let accountState

// accountId = 302 not allowed
/*
prefer not to use var 
because of the issue of block(Scope) in functional scope
* you can also declare variable without defining syntax(accountCity),eventually not be used 
* the value of state is undefined by default as js is dynamic PL
*/

accountEmail = "skady@gmail.com"
accountPassword = "2020220"
accountCity = "mumbai"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

