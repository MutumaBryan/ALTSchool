// Set is a data strcuture that stores only unique values
// To create a set you use the Set class
let setOfUsers = new Set();

let mary = { name: "mary", age: 25 };
let John = { name: "John", age: 27 };

setOfUsers.add(mary);
setOfUsers.add(John);
setOfUsers.add(29);
setOfUsers.add("Hello");
setOfUsers;
// If you try add mary again, it will not be added since it is already exists
// Sets have no duplicates
// Sets do not have keys

setOfUsers.size; //gets the size

setOfUsers.has(mary); //checks if item exists. Returns boolean

setOfUsers.delete(John); //deletes the specified value

Array.from(setOfUsers); //turns a set into an array