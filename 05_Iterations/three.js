const arr = [1,2,3,4,5];
for (const i of arr) {
    // console.log(i);
}   

const map = new Map();
map.set("IN", "INDIA");
map.set("UK" , "United Kingdom");
map.set(1,77);

// console.log(map);

for(const [key,value] of map){
    console.log(key + "->" + value)
}

const myObj = {
    "game1" : "Nfs",
    "game2" : "RDR2",
    "game3" : "Last of Us"

}

// for(const [key,value] of myObj){
//     console.log(key + "->" + value);
// } // Objects are not iterable directly .

