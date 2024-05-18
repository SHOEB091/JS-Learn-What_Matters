/*  
In JavaScript, a value is either "truthy" or "falsy". These terms are used to determine the boolean value of non-boolean data types when they are coerced (implicitly converted) to a boolean.

Falsy values in JavaScript are:
false, 0, -0, 0n, "", null, undefined, NaN

Truthy values are all values that are not falsy. This includes (but is not limited to):

true, {}, [], "0", "false", new Date(), -42, 3.14, Infinity, -Infinity


*/

if (0) {
    console.log("This won't run, because 0 is falsy");
  } else {
    console.log("This will run, because 0 is falsy");
  }
  
  if ("0") {
    console.log("This will run, because '0' is truthy");
  } else {
    console.log("This won't run, because '0' is truthy");
  }