//Arrays
const myArray = [1,2,3,4,5];
const secArr = ["Tanush","Prince","Chauhan"];
const arr = new Array(0,1,2,3,4);

console.log(myArray[0]);

//Array methods
myArray.push(99);
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift(98); // add elements at the starting //shifts all to the right by one index.
console.log(myArray);

myArray.shift(); // remove the first element // shifts all to the left by one index.
console.log(myArray);

console.log(myArray.includes(4)); // return in boolean either exists or not.

console.log(myArray.indexOf(2)); // returns the index and id not exists return -1.

const newArr = myArray.join();
console.log(newArr); //here the array is converted to the string comma separated because .join() returns the string.

console.log(myArray.slice(1,3)); // simply print the given range and there will be no change in the original array . (end index is not included).

console.log(myArray.splice(1,3)); //changes the original array also , (end index is included)
 