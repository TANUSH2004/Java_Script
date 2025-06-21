const myNums = [1,2,3,4,5,6,7,8,9,10];
// const ans = myNums.map( (num) => {return num+10});
// console.log(ans)

// Bhai ye dekh for each , filter , map ye sab ke sab iteration me hi use hote h bas test case alag alag h.
//jaise ki agar mereko kuch return karana h toh vo for each se nhi hoga.

//aur ye sare foreach , filter , map sab return back functions h inko ek function chaiye perform krne ke liye

//filter me true or false ke basis pr value return hoti h jabki map me sab par operation perform hota h

// *********************CHAINING***********************

//chaining ka matlb hota h ki map ke upar map lagana filter lagana ya overall kisi ek function ke peeche doosra function lagana hi chaining h.

const ans = myNums.map( (num) => {return num*10}).map( (num)=> num+1);

console.log(ans);