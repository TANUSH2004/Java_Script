// Dates in js
let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

let CreatedDate = new Date(2024,0,8); // here months are started from 0 in js.
console.log(CreatedDate.toDateString());


let myTimeStamp = Date.now();// gives the millisecond time from that time when this all was started.
console.log(myTimeStamp); 
//for compare it with the custom time 
console.log(CreatedDate.getTime());