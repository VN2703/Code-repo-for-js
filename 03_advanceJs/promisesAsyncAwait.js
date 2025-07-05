const promiseOne=new Promise(function(resolve, reject){
     //Do an asyc task
     // DB calls, cryptography, network
     setTimeout(function(){
        console.log('Async task is compelete');
        resolve()   // use to connect .then
     },1000)

})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

// OR other syntax
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})


// In promise three we can give data inside resolve also  and it will can be consumed by .then
const promiseThree=new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"chai", email:"chai@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
  console.log(user);
  
})

const promiseFour=new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"hitesh", password:"123"})
        }else {
            reject('ERROR: Something Went Wrong')
        }
    } ,1000)
})
  promiseFour
  .then((user)=>{
      console.log(user);
      return user.username
      
})
.then((username)=>{
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
}).finally(()=>console.log('The promise is either resolved or rejected')
)





const promiseFive=new Promise(function(resolve, reject){
      setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"JS", password:"123"})
        }else {
            reject('ERROR: JS Went Wrong')
        }
    } ,1000)
})

// insted of .then and . catch we will use async await, instead of .then we use try catch block
async function consumePromiseFive() {
    try {
        const response= await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()

// TRY_CATCH SYNTAX
// async function getAllUsers() {
//     try{
//         const response =await fetch ('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data);
        
//     }catch (error){
//         console.log("E: ", error);
        
//     }
// }
// getAllUsers()



// .then, .CATCH

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log(error));
