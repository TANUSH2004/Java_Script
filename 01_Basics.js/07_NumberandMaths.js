const score = 400;
console.log(`My score is ${score}`);

const balance = new Number(100);
console.log(balance);

console.log(Number(balance).toString().length);

const othervariable = 44.89077;
console.log(othervariable.toPrecision(3));

const vari = 1000000000;
console.log(vari.toLocaleString());
console.log(vari.toLocaleString('en-IN'));



//+++++++++++++++ MATHS +++++++++++++++
console.log(Math.abs(-99));
console.log(Math.round(4.49));
console.log(Math.ceil(8.1));
console.log(Math.floor(9.9));


console.log(Math.min(9,5,6,4,32,2));
console.log(Math.max(9,98,87,7));

console.log(Math.random()); // it gives value between 0 and 1 only

console.log((Math.random()*10)+1); //doing +1 for not getting 0 as a output


const max=20;
const min=10;

console.log(Math.floor(Math.random() * (max-min+1) + min))