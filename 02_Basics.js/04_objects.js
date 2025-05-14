const User = {
    name : "Tanush",
    fullinfo : {
        firstname : "Prince",
        lastname : "Chauhan"
    }
}
User.fullinfo.firstname = "Kali" // it can also be changed
console.log(User.fullinfo.firstname)

const obj1 = {1:"a" , 2:"b" , 3: "c"}
const obj2 = {4:"d" , 5:"e" , 6:"f"}

const obj3 = Object.assign(obj1,obj2); //it will merge the obj1 and obj2 , also assign it to the obj3 , {but the real truth is it will also change the obj1 because it work as Object.assign(target,sources)}.

console.log(obj1 == obj3); //it will be true.

const obj4 = Object.assign({},obj1,obj2);
console.log(obj1 == obj4); // it will return false because target will be empty object.
 
console.log(obj3);

//best way is to spread the object and assign it to the new object

const nObj = {...obj1 , ...obj2}

console.log(nObj)

//Object.keys(object_name)

//Object.values(object_name)



