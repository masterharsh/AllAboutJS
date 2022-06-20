class Person {
    firstName : string;
    lastName : string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }// it constructs the object before it gets assigned;

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

var aPerson : Person = new Person("Yash", "Jain");
aPerson.firstName = "Harsh";
aPerson.lastName = "Jain";

console.log(`${aPerson.firstName} ${aPerson.lastName}`);
console.log(aPerson.getFullName());

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//INHERITANCE & POLYMORPHISM

class Student {
    constructor(private firstName: string, private lastName: string, public age : number, protected city : string){

    }// making private arguments of constructor, declares private member variables, and initializes them by TS.
// Protected member variables are accessible inside the type and anywhere which extends the type, but not outside it, like to any instance it is not accessible.
    greet() {
        console.log("hi there!");
    }

   // getter and setters are methods to access private memebers of the class;
    getFirstName() {
        return this.firstName;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }

    getLastName() {
        return this.lastName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getCity() {
        return this.city;
    }
}// Parent Class

class Programmer extends Student {
    greet() {
        console.log("Helllo World!");
        console.log(this.city);
    }

    greetLikeStudents() {
        super.greet(); // The Super keyword is used to call methods and members of parent class. It can also be used in the constructor 
        //function to call constructor of parent class.
    } 
}


var aProgrammer = new Programmer("harsh", "jain", 28, "Lucknow");
aProgrammer.greet(); // Hello World!
aProgrammer.greetLikeStudents(); // hi there!
// aProgrammer.city => this gives ERROR as city is a restricted variable.


var bProgrammer : Student = new Programmer("harsh", "jain", 28, "Lucknow");
bProgrammer.greet(); // Hello World;
// bProgrammer.greetLikeStudents(); => This gives error as bProgrammer is of type Student and thus can extend only methods and members of Student class. (PoluMorphism)



// If I have a readonly property in a class, it can be assigned value in the constructor or while declaring it in the class.


//NOTE: When using IMPORT feature in TS, it actually executes the file which is imported. SO make sure
// that the files that you export should be stateless, as it executes and loads all the variables as well
// apart from the exported class.