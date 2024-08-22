let names = ["Mutuma", " Mark", "Jason"];

// to destructure you unpack array data to the variable on the left hand side of the = sign
let [firstname] = names;
firstname;
// This passes obly the first value in the names array is mapped into the firstname array

let [first, second, third] = names;
first;
second;
third;
// all array values have been mapped one to one to each variable

let [, , name3] = names;
name3;
// This skips the first and second values in the array
// the number of empty comma spaces are counted during the mapping

// rest operator ...
let [name1, ...restOfTheArray] = names;
restOfTheArray;
// restOfTheArray takes on all other values and becomes a new array subset of names
// Uisng the rest operator '...variable' you can create a copy or get the subset of an array into a new array

// Destructuiring an Object
let settings = {
  theme: "dark",
  fontSize: 20,
  fullScreen: true,
};

let { theme, fullScreen } = settings;
theme;
fullScreen;
// destructuring is most commonly used for objects
// by using the keys, you can pass the values into the variables

// this is useful in large objects where you onlywant a sinlge value
// you call the specific value with the key in destructuring, the key then becomes a primitive data stype
let { fontSize } = settings;
fontSize;

// to assign a new name to the variable
let { theme: myTheme } = settings;
myTheme;

// This comes in handy when you want to create many variables with the same value
// Otheriwse the interpreter will gve an error that the variable has already been initialized
let { theme: newTheme } = settings;
let { theme: userTheme } = settings;
let { theme: lightTheme } = settings;
let { theme: darkTheme } = settings;
newTheme;
userTheme;
lightTheme;
darkTheme;

// rest operator also works for objects in the same way
let { theme: webTheme, ...restOfSettings } = settings;
restOfSettings;

// destructurin in functions
function getUserInfo({ name, age }) {
  console.log(name);
  console.log(age);
}

const user = {
  name: "John",
  age: 23,
};

getUserInfo(user);
