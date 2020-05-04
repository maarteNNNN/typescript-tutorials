"use strict";
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    Student.prototype.displayName = function () {
        return this.fullName;
    };
    return Student;
}());
var user4 = new Student('Maarten', 'R. N.', 'Coppens');
console.log(user4.displayName());
