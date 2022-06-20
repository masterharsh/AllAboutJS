 interface Person {
     firstName: string;
     lastName: string;
     getFullName(): string;
}

class Foo implements Person {
    firstName: string;
    lastName: string;
    getFullName(): string {
        return this.firstName + this.lastName;
    }
}

let aPerson: Person = new Foo(); // PolyMorphism

let someObj = {
    firstName: "Test",
    lastName: "test",
    getFullName: () => "test"
};

aPerson = someObj; // Duck Typing, even though someObj is not of Type Person interface, 
//vit structures matches and thus can be assigned to aPerson.