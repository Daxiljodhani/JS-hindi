const accountId = 12445
let accountEmial = "daxil@gmail.com"
var accountPassword = "12345"
accountCity = "surat"

// accountId = 2

console.log(accountId);
accountEmial = "dj@gmail.com"
accountPassword = "67890"
accountCity = "baroda"
console.table([accountEmial, accountPassword, accountCity]);

// not to use var
// because of its function scope and hoisting issues. 
// prefer to use const and let.