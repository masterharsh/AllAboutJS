import { Person } from "./person";
import * as _ from 'lodash'; // need to install type definiton as well; npm install @types/lodash --save-dev

let hoo = new Person();
hoo.firstName = "Test";
hoo.lasName = "TS";

console.log(hoo);

var array = [1,2,3,4,5];
_.reverse(array);
console.log(array);