
 // this==>> refer to current context
    const user={
    name:"nema",
    price:99,

    welcomeMessage: function(){
        console.log(`${this.name}, welcome to website`);
      //  console.log(this);
        
        
    }
}

// user.welcomeMessage();
// user.name="sam"
// user.welcomeMessage();

// console.log(this);


// function chai(){
//     let username="vaish"
//     console.log(this.username);   // undefined
    
// }

//  chai()


// const chai= function(){
//     let username="vaish"
//    console.log(this.username); 
// }
// chai()
   



 // SYNTAX OF ARROW FUNCTION  

// const chai= ()=>{
//     let username="vaish"
//    console.log(this.username);  // undefined
//    console.log(this);  //{}
   
// }
// chai()


//way 1
//  const add=(n1, n2)=>{               {} ye use hua to return keyword likhna hoga
//     return n1+n2;
//  }
 


 //way 2  (IMPLICIT RETURN)
//  const add=(n1,n2)=>(n1+n2);            //() ye use hua to return keyword likhna zaruri nahi


  

  // WAY 3 retrun object
 // const add=(n1,n2)=>({name:"hitesh"})


  console.log(add(3,5));



 
 
 
