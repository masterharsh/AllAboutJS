var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    } // it constructs the object before it gets assigned;
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var aPerson = new Person("Yash", "Jain");
aPerson.firstName = "Harsh";
aPerson.lastName = "Jain";
console.log("".concat(aPerson.firstName, " ").concat(aPerson.lastName));
console.log(aPerson.getFullName());
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//INHERITANCE & POLYMORPHISM
var Student = /** @class */ (function () {
    function Student(firstName, lastName, age, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.city = city;
    } // making private arguments of constructor, declares private member variables, and initializes them by TS.
    // Protected member variables are accessible inside the type and anywhere which extends the type, but not outside it, like to any instance it is not accessible.
    Student.prototype.greet = function () {
        console.log("hi there!");
    };
    // getter and setters are methods to access private memebers of the class;
    Student.prototype.getFirstName = function () {
        return this.firstName;
    };
    Student.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Student.prototype.getLastName = function () {
        return this.lastName;
    };
    Student.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Student.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Student.prototype.getCity = function () {
        return this.city;
    };
    return Student;
}()); // Parent Class
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log("Helllo World!");
        console.log(this.city);
    };
    Programmer.prototype.greetLikeStudents = function () {
        _super.prototype.greet.call(this); // The Super keyword is used to call methods and members of parent class. It can also be used in the constructor 
        //function to call constructor of parent class.
    };
    return Programmer;
}(Student));
var aProgrammer = new Programmer("harsh", "jain", 28, "Lucknow");
aProgrammer.greet(); // Hello World!
aProgrammer.greetLikeStudents(); // hi there!
// aProgrammer.city => this gives ERROR as city is a restricted variable.
var bProgrammer = new Programmer("harsh", "jain", 28, "Lucknow");
bProgrammer.greet(); // Hello World;
// bProgrammer.greetLikeStudents(); => This gives error as bProgrammer is of type Student and thus can extend only methods and members of Student class. (PoluMorphism)
