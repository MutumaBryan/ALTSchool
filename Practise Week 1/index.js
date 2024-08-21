let size = `2000`;
let bool = isNaN(size);
bool; //false

size = "h";
bool = isNaN(size);
bool; //false

let bool1 = Number.isNaN(size);
bool1;
// Data Types: Number BigInt String Boolean Null Undefined Object Symbol
// Numbers Data Type
let size_in_meters = 20; //Interger(Numbers in JS)
let size_in_inches = 2.1024; //Floating point(Also a number type in JS)
let maxSize = Infinity; //largest number in JS
let minSize = -Infinity; //smallest number in JS
let not_a_number = NaN;

// BigInt
// These are numbers larger than
Number.MAX_VALUE;
// Written by writing an 'n' at the end

// Boolean True/False

// undefined
let x;
let type = typeof x;
type; //value has not been assigned so it is

// null
// check for null data type by (x === null)
// a legacy JS quirk cause the typeof operator to view null as an object
// null is not an object but a primitive data type, that is, data types that hold a single value

// object
// It is not a primitive data type, it stores multiple values
// that is, key:value pairs. Thus it holds more complex values
const name = { name: `Tim` }; //this is an object

// visit Objects on mdn to look methods that work on object data type

// Strings
// visit strings on mdn to learn more about escape sequences for strings eg \n
// functions to use for strings:
/*
 * startsWith("Hello") returns boolean
 * indexOf('name') returns the index of the arguement in the string that called the method
 * to access more functions use the dot command
 */

// Conditionals
// let day = `Monday`;

// if (day == `Monday`) {
//   alert("Today is Monday")
// }

// switch case is preferred for those following AirBnB style guide
// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

// Loops
// while
let i = 0;
while (i < 3) {
  // if i is less that 3, code in the curly brackets will run
  i++ ;
  // This increments the value of i with each loop
}
/* 
  * Use while and do...while loops 
  * when the number of iterations is unknown or the loop condition depends on a changing value.
  */

// for loops
const arr = [];
for (let i = 0; i < 10; i++) {
  const element = arr[i];
}
/*
  * Breakdown of the for loop syntax:
  * Initialization: let i = 0; declares and initializes the loop counter i to 0.
  * Condition: i < 10; checks if i is less than 10. If true, the loop continues; otherwise, it terminates.
  * Increment: i++ or ++i increments the value of i by 1.
  * Key points:
  * The increment expression is executed after each iteration of the loop.
  * The value of i is available within the loop body.
  * Both i++ and ++i increment i by 1, but the timing of the increment differs when used independently.
  * for loop si used when you need precise control over the loop counter or when you're dealing with array indices.
  */ 

// for...of
for (const element of arr) {
    // do something to element variable
}
// According to Airbnb's JavaScript Style Guide, 
// the preferred loop for iterating over arrays and iterable objects is for...of

// for... in
for (const key in arr) {
  if (Object.prototype.hasOwnProperty.call(object, key)) {
    const element = arr[key];
  }
}
// It may be most practically used for debugging purposes, being an easy way to check the properties of an object
// Used to grab specific keys of objects to perform special tasks