//Immidiately Invoke Function Expressions
(function namer(){
    console.log("Tanush Chauhan");
})();  //this will be called immidaitely as if we want to call it later then we will write namer() , it is same as that but will be called immidiately after that.

//also the semicolon is also necessary as the Iife doesnt know that where it need to be stopped so we will apply a semicolon.

//now same thing can be worked for arrow fucntion also;
(() => {
    console.log("hello ji")
})();

//also we can pass the values as usual for example
((name)=>{
    console.log(`Kya haal h ${name} tere`)
})("Tanush"); //simple just pass the values as usual

namer();