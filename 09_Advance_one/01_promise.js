const promiseOne = new Promise(function (resolve, reject){


    setTimeout(function(){
        console.log("Async Task is completed");
        resolve();
    },1000)
});

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})



const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username : "Chai" , email : "xyz@email..com"}); //passing a object in resolve
    },1000)
    
})
PromiseThree.then(function(user){
   console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
   setTimeout(()=>{
    let error = true;
    if(!error){
        resolve({username : "Tanush" , password : "123"})
    }
    else{
        reject('ERROR : Something went wrong');
    }
   },2000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username; //ye yaha se return hoke jata h iske chaining then ke pass
}).then((username)=>{
   console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(()=>{
    let error = true;
    if(!error){
        resolve({username : "Tanush" , password : "123"})
    }
    else{
        reject('ERROR : JS went wrong');
    }
   },2000)
})

async function consumePromiseFive(){
   try {
     const response = await promiseFive;
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive();


// async function getAllUsers(){
//     try{
// const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//     const data = await response.json();
//     console.log(data);

//     } catch(error){
//        console.log("E :" , error);
//     }
// }
// getAllUsers();


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
     return response;
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
     console.log(error);
})



