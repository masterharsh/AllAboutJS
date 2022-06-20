// primitive data types
var a;
var b;
var c;
var foo; //this type can only have value as "undefined"
var fooo; // this variable can only have value as "null"
a = 10;
b = true;
c = "hello";
var myArr;
myArr = [];
myArr = [1, 2, 3]; // myArr is an Array of numbers or empty array
// Tuples- lets you create arrays containing different types of elements
var newArr = [1, true];
function addition(a, b, c, d) {
    if (c === void 0) { c = 1; }
    return a + b + c;
}
var sum = addition(1, 2);
console.log(sum); // 4
console.log(addition(1, 2, 3)); // 7 
