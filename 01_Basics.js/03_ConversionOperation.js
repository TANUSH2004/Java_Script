let score = "88abc";

//console.log(typeof score);

let changed = Number(score);
console.log(typeof changed);
console.log(changed); // NaN (Not a Number is output because it is changed to Number but still there was abc in that string it cant be changed logically into a number but js doing it but when we need a output it will give NaN in such a case);