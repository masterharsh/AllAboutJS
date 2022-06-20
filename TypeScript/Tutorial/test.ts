class Person{
    firstName: string;
    lastName: string;
}

////compilation options///////
/// 1=>  tsc test.ts --out output-script.js  This outputs the file to a specified fileName
/// 2=> $ tsc test.ts --out output-script.js --watch   This will continuously create the correcsponding JS file on every save. 
//                                                      It watches for file changes


// We can create a configuration file called tsconfig.json to mention these commands
// => tsc --init  This is used to create the default config JSON file