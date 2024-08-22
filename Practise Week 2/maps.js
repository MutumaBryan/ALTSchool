// creating a map data structure using the Map class
let myFirstMap = new Map();

// In Objects, only string types can be used as keys.
// Map data structures can accept any type of key: object, number, array, string etc
// If you wish to keep the keys in their respective data types, use Map.
// Objects automatically change all keys into strings

// Adding values to a map
myFirstMap.set("key", "value");
myFirstMap.set(true, "This has a boolean key & string value");
myFirstMap.set({key: 'value'}, "This has an object as a key");
myFirstMap;

// Collect the keys
let myMapKeys = myFirstMap.keys();
myMapKeys;

// Collect the values
let myMapValues = myFirstMap.values();
myMapValues;

// Collect all entires
myFirstMap.entries();

// Find the size
let count = myFirstMap.size;
count;

// Check if a key exists
let check = myFirstMap.has("first");
check;

// removing a key. If you remove a key you also remove its value
myFirstMap.delete("first");
// It returns true if the key existed and has been deleted

// for...of loops through a map
let arrayTest = [];
for(let entry of myFirstMap) {
  // the entry variable is an array of each map eg the first loop, entry will be ["key", "value"]
  arrayTest.push(entry);
}
arrayTest;

// Change it to an array
let arr = Array.from(myFirstMap);
arr;

// Change it into an object
let obj = Object.fromEntries(myFirstMap);
obj;

// You can use JSON.stringify to turn objects into strings
let str = JSON.stringify(obj['[object Object]']);
str;