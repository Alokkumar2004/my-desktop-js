

// object leterals
Object.create //constructer method


 const mySym= Symbol("alok1")
const jsUser= {
    name: "alok",
    [mySym]:"alok1",
    age: 18 ,
    location: "bangalore",
    email:"alok@google.com",
    isLoggedIn: true,
    lastLoginDays: ["monday","friday"]

}
console.log(jsUser.email)
console.log(jsUser.email)
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);


jsUser.email="alok@yahoo.com"
//Object.freeze(jsUser)
jsUser.email="alok@123.com"
console.log(jsUser.email)


jsUser.greeting = function(){
    console.log(`helo js user ,${this.name}` )
}
console.log(jsUser.greeting );