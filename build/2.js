"use strict";
function greeter2(person) {
    return 'Hello, ' + person;
}
var user1 = 'Jane User';
// Throws error because it's not a string
// let user = [0, 1, 2]
console.log(greeter2(user1));
