let score ="33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33 
//"33abc"=> NaN
//true =>1; false=> 0

let isLoggedIn= 1
let booleanIsLogedIn = Boolean(isLoggedIn)
console.log(booleanIsLogedIn);
//1==> true; 0=> false
//"alok" => true
let someNumber =33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);
 


//*****************OPERATION*****************************

let value =3
let negvalue= -value
console.log(negvalue)

let str1= 2
let str2= 4
let str3 = str1+str2 
console.log(str3);
// strings can only perform addition

console.log( "1"+2);
console.log("1"+2+2+4);
console.log(1+2+4+ "4");
//The abstract operation ToPrimitive takes argument input (an ECMAScript language value) and optional argument preferredType
//  (string or number) and returns either a normal completion containing an ECMAScript language value or a throw completion. 
// It converts its input argument to a non-Object type. If an object is capable of converting to more than one primitive type,
//  it may use the optional hint preferredType to favour that type. It performs the following steps when called:


let gameCounter =100
gameCounter++;
console.log(gameCounter);


//If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.
let taskCounter =100
++taskCounter;
console.log(taskCounter);

//If used prefix, with operator before operand (for example, ++x), 
// the increment operator increments and returns the value after incrementing.