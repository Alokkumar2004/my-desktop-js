// primitive

// 7 type : String , Number , Boolearn ,null ,undefind , symbol ,bigint

const score = 100

const scoreValue =100.3

const isLoggedIn = false

const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol ('123')
console.log(id=== anotherId);

const bigNum = 342323232323234n
// If val is undefined, return "undefined".
// If val is null, return "object".
// If val is a String, return "string".
// If val is a Symbol, return "symbol".
// If val is a Boolean, return "boolean".
// If val is a Number, return "number".
//  If val is a BigInt, return "bigint".

// Reference (non premitive)

// Array, objects , functions 

const heros = ["saktiman","spiderman", "nagraj","ironman"]
 let myObj ={
    name: "alok",
    age: 22,
}

const myFunction = function(){
    console.log("helo world")
}




//##################################################

//memory are two type : stack (primitive),heap(non-primitime)

let myYoutubename = "alokdashdotcom"
 let anothername = myYoutubename
 anothername = "chaiaurcode"

 console.log(myYoutubename);
 console.log(anothername);
//ex
 let userOne = {
    email:" alokdash@gmail.com",
    upi: "alok@ybl"
 }
 let userTwo =userOne
  userTwo.email = "alok@google.com"
  console.log(userOne.email)
  console.log(userTwo.email)