const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString ());
 

const otherNumber = 23.7768
console.log(otherNumber.toPrecision(3));

/*This method returns a String containing this Number value represented either in decimal exponential notation with one digit
 before the significand's decimal point and precision - 1 digits after the significand's decimal point or
  in decimal fixed notation with precision significant digits. If precision is undefined, it calls ToString instead. */

  const hundreds = 10000000
  console.log(hundreds.toLocaleString(en-IN));

  /*This function is provided to give objects a generic toLocaleString method, even though not all may use it. 
  In the core language, these built-in objects override toLocaleString to provide locale-specific formatting:*/

  //########################################### MATH ###############################################

  console.log(Math);
  console.log(Math.abs(-4));