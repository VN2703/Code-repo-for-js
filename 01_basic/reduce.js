 // functipn
//  const myNums=[1,2,3]
// const myT=myNums.reduce(function(acc,currVal){
//     console.log(`acc:${acc} currval:${currVal}`);
    
//     return acc+currVal
// },0)
// console.log(myT);

// arrow_fuction
const myNums=[1,2,3]
const mt=myNums.reduce((acc, cur)=> acc+cur,0)
console.log(mt);
