// Primitive

// 7 Types : String, Number , Boolean , null(empty) , undefined , Symbol ,BigInt

const score = 100
const scoreValue = 100.7

const isLoggedIn = false
const outsideTemp = null 
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


 // const bigNumber = 34566677777n

// console.log();




// Reference (Non primitive)

// Array , Objects , Functions 



const heros = ["shaktiman" ,"naagraj" , "doga"]
let myObj = {

  name: "Shivam"
  // age: 22 ,

}

// we can also treat function as a variable in
const myFunction = function(){

  console.log("RadheRadhe");
  

}

console.log(typeof bigNumber);

console.log(typeof outsideTemp);
console.log(typeof scoreValue);

console.log(typeof myFunction);


// type of  value of BigInt is "undefined" 
//  type of value of null is "Object"
// type of value of Function is "ObjectFunction 

// Non Primitive is called as "FunctionObject"










// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap(Non-Primitive)

// Stack me jo bhi variable declare kiya hai uska copy milta hai 

// Heap me jo bhi value declare kiya hai uska reference hai 

let myYoutubename = "HealthyLife"


let anothername = myYoutubename

console.log(myYoutubename);

console.log(anothername);

let userOne = {

  email: "user@google.com",
  upiID : "user@ybl"
}

let userTwo = userOne

userTwo.email = "Shivam@google.com"

console.log(userOne.email);

console.log(userTwo.email);


