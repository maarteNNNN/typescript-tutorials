"use strict";
function greeter3(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user3 = { firstName: 'Maarten', lastName: 'Coppens' };
console.log(greeter3(user3));
