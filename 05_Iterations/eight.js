//reduce function
myNums = [1,2,3,4,5];  

const myTotal = myNums.reduce( (acc,currval)=>{
    return acc+currval;
},0);

console.log(myTotal);
