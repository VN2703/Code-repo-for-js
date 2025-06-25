console.log(null>0);  //false   (0!=0)
console.log(null==0);  //false
console.log(null>=0);  // true  (0=0)

// == and comparison(>,<) works differntly, 
//  comparison convert null to number (treating it as 0) 
// thats why {null>0 ==>} false and {null>=0} is true


console.log(undefined>0);     
console.log(undefined==0);  
console.log(undefined>=0)


// ==== (check type and data)
console.log("2"===2);
