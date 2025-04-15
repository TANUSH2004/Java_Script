let name = "Tanush";
let count = 60;

//console.log("My name is " + name + "and my repo count is" + count);

console.log(`My name is ${name} amd my repo count is ${count}`); // this is a good practice.

const gameName = new String("Tanush chauhan"); // it is also a string but it is initialized as a object , previous way also do the same in background.
console.log(gameName);

console.log(gameName.toUpperCase()); // those predefined function can be used directly here.

console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf("T"));

const newString = gameName.substring(0,7); // last one excluded.
console.log(newString);

const anotherString = gameName.slice(-8,-1); // negative values can also be passed in slice
console.log(anotherString);


const AnotherOne = "   Tanush    ";
console.log(AnotherOne);
console.log(AnotherOne.trim());