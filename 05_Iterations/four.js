const myObj = {
    js : "javascript",
    py : "python",
    cpp : "c++"
}
for (const key in myObj) {
    console.log(`Key is ${key} and value is ${myObj[key]}`)
        
    }

const arr = ["rb" , "py" , "cpp" , "java"]
for(const i in arr){
    // console.log(i) //this will print the index because in for-in loop we access the keys with the help of loop.
    //  but in for-of loop we directly access the values not the keys.
    //so for the value here we can write.
    console.log(arr[i]);
}     
