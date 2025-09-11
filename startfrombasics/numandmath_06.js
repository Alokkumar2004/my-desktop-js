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
  //The Math.abs() static method returns the absolute value of a number.
  console.log(Math.round(4.6));
  //The Math.round() static method returns the value of a number rounded to the nearest integer
  console.log(Math.ceil(4.2));
  //The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.
  console.log(Math.floor(4.4));
  //The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
  console.log(Math.min(4, 6, 7 ,3));
  //The Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.

  console.log(Math.random());
  /*The Math.random() static method returns a floating-point, pseudo-random number that's greater than or 
  equal to 0 and less than 1, with approximately uniform distribution over that range
   — which you can then scale to your desired range.
    The implementation selects the initial seed to the random number generation algorithm;
     it cannot be chosen or reset by the user.*/
    console.log(Math.floor(Math.random()*10)+1); 
    //for lower intiger value
    const min =10
    const max = 20

     console.log(Math.floor(Math.random()* (max - min +1))+ min); 
     // to find a whole number between two value


