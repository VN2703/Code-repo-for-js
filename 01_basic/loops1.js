const arr=[1,2,3,4,5,6];
//for of
{"","",""}
{[],[],[]}
for (const num of arr) {
  //  console.log(num);
    
}

const greeting="heelo world!";
for (const greet of greeting) {
  //  console.log(`each char is ${greet}`);
    
    
}


//MAP
const map=new Map()
map.set('IN','India')
map.set('US','united state of ameriaca')
map.set('FR','France')
map.set('IN','India')

//console.log(map);
for (const [key, value] of map) {
    console.log(key, value);
    
}


// for of is not use to iterate objects