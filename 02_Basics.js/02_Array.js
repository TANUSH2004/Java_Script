const heroes = ["spiderman","ironman","woulvorine","Tanush"];

const anotherHeroes = ["Antman","Barbarian King", "Queen"];

// heroes.push(anotherHeroes); // that second array will be added as a whole , at the last index of the original array because here in js array can store different data types.
//!!!!!!!! also .push() add in the original array


const all = heroes.concat(anotherHeroes);// it will concat the both array and store it into the new array.
console.log(all);

// for the same result (for adding two arrays) there is a operator called spread operator in js.

const newAll = [...heroes , ...anotherHeroes];
console.log(newAll);

console.log(`My all superheroes are ${newAll}`);

//if there is a condition , where number of array layers is much more 
//so in order to get them in a single array we use flat() function which also got to save in a new array.
//and the value passed to it is the number of array layers need to be solved .

const real_Array = [1,2,3,[4,5,7],[9,7,[8,0,2]]];

const new_real_Array = real_Array.flat(Infinity); // by using infinity it will not matter that how much layers are present there.

console.log(new_real_Array);

//for checking the given data is Array or not;
console.log(Array.isArray("Chauhan"));
//a fucntion which converts the things into the array.
console.log(Array.from("Tanush"));

console.log(Array.from({9 : "Prince"})); // interesting (because it cannot determine either change the key or value of the given data into the Array)

let score=100;
let score1=200;
let score2=300;

//can use when many variables need to be pushed into an array
console.log(Array.of(score,score1,score2));