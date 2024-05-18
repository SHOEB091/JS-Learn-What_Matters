var a = [1,2,3,4,5];

//these three dots are called the spread operator
var b = [...a];

b.pop();
console.log(b);
console.log(a);

//this is how we can copy the reference values in javascript

//=======copy Objects in javascript=================//

var obj = {name: "Rahul"};
var copyonj = {...obj};
console.log(copyonj);
console.log(obj);
copyonj.name = "Rohit";
console.log(copyonj);