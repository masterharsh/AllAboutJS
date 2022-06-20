// primitive data types
var a: number;
var b: boolean;
var c: string;
var foo: undefined; //this type can only have value as "undefined"
var fooo: null; // this variable can only have value as "null"

a = 10;
b = true;
c = "hello";

var myArr: number[];
myArr = []; 
myArr = [1, 2, 3]; // myArr is an Array of numbers or empty array


// Tuples- lets you create arrays containing different types of elements

var newArr : [number, boolean] = [1, true];

function addition(a: number, b:number, c: number = 1, d?: number) : number {// d is an optional argument. Optional argument are added at the last
    return a + b + c;
}

var sum = addition(1, 2);
console.log(sum); // 4

console.log(addition(1,2,3)); // 6 

// If you dont explicitly declare a variable type, but you assign
//a value with the declaration. TS implicitely assigns the type
// from the value being assigned Implicitely typing only wrks if the value is
//assigned in the declaration line.

var x : number | boolean; // this means "x" can have a number or boolean types, this is called union symbol  

