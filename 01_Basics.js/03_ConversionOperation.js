let score = "88abc";

//console.log(typeof score);

let changed = Number(score);
console.log(typeof changed);
console.log(changed); // NaN (Not a Number is output because it is changed to Number but still there was abc in that string it cant be changed logically into a number but js doing it but when we need a output it will give NaN in such a case);


// ******************operations***********

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Tanush";
let str2 = "Chauhan";
console.log(str1+str2);

console.log(1 + "2");
console.log(5+5+9+"000"); // num in starting treat as num then string
console.log("3"+4+9+0); // string in start treat whole as string.
