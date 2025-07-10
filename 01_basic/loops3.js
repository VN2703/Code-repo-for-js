// FOR-EACH LOOP
const coding=['js', 'cpp','rb','py','swift']

// coding.forEach(  function(item){
//     console.log(item);
    
// } )

// coding.forEach((item)=>{
//    console.log(item);
   
// })

// function print(it){
//     console.log(it);
    
// }
// coding.forEach(print)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
    
// })


const myCoding=[
    {
        lgName: "js",
        FNAME:"js"
    },
      {
        lgName: "python",
        FNAME:"py"
    },
      {
        lgName: "C++",
        FNAME:"cpp"
    }
]


myCoding.forEach((item)=>{
  console.log(item.FNAME);
  
})

// For Each never return value
