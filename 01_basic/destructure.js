// Definition:
// Destructuring is a way to unpack values from arrays or objects into separate variables in a clean and readable way.

const person={
    name:"vaishnavi",
    age:25,
    city:"bhopal"
}
const{name: n, age: a, city:c }=person;
// console.log(n);
// console.log(a);
// console.log(c);


// What is the Spread Operator?
// Definition:
// The spread operator (...) is used to expand (spread out) elements of an array, object, or string into individual elements.

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); // [1, 2, 3, 4, 5]