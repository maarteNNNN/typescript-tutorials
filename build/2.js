"use strict";
function greeter(person) {
    return 'Hello, ' + person;
}
var user = 'Jane User';
// Throws error because it's not a string
// let user = [0, 1, 2]
console.log(greeter(user));
