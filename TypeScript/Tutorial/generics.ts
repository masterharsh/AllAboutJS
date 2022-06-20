////////////Assigning types to functions without generics, can lead to issues /////////////////
function echo (arg: any): any {
    return arg;
}

var myStr: string = echo(1); // This should throw erroe, as this is wrong. 
//But it does not, as type of function is "any".



///////////////////Fix with generics////////////////
//// Generics lets you create placeholders for Types
function echoNew<T>(arg: T): T {
    return arg;
}

// var myStr: string = echoNew(1); // Now this returns an error
var myStrr: number = echoNew(1); 
//////////////////////////////////////////////////////////////////////////////
////////////////////APPLICATION OF GENERICS//////////
class PersonNew {
    firstName : string;
    lastName: string;

    constructor( firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

class Admin extends PersonNew {

}

class Manager extends PersonNew {

}

let admin = new Admin ('a', 'a');
let manager = new Manager('b','b');

function personEcho<T extends Person>(person: T) : T {
    console.log(person.firstName);
    return person;
}// now if you pass admin or manager, the foo will have respective type, and not Person.

var foo = personEcho(admin);
