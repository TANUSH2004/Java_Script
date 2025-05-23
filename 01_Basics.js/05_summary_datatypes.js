//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++ stack and heap++++++
// stack (primitive data types) & heap (non-primitive data types)

let name = "Tanush"
let realName = name;
name = "prince";
console.log(name);
console.log(realName);  // here in all primitive datatypes there is a pass of the copy of the values not the reference to the values.


let userOne = {
    email : "hello@gmail.com",
    pass : "hello"
}

let userTwo = userOne;

userTwo.email = "hii@gmail.com"; // here the reference value is changed.

console.log(userOne.email);
