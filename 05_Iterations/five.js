const arr = ["js" , "java" , "cpp" ,"html" , "css"];
arr.forEach(function (val){
//   console.log(val);
}) 

//if we want to use arrow function then,
arr.forEach( (value)=>{
//    console.log(value);
})

const myCodes = [
    {
        language : "cpp",
        extension : "c++"
    },
    {
        language : "python",
        extension : "py"
    },
    {
        language : "C",
        extension : "c"
    }
]

myCodes.forEach( (value)=> {
    console.log(value.extension);
})