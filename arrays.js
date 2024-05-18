/* 
Declaration of an Array
There are basically two ways to declare an array i.e. Array Literal and Array Constructor.
*/




//========== Array Literal=========//
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

// Creating an Empty Array
let names = [];
console.log(names);

// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "Javascript", "React"];

console.log(courses);



// ========Array Constructor=========//
let arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);

// Declaration of an empty array 
// using Array constructor
let names1 = new Array();
console.log(names1);

// Creating and Initializing an array with values
let courses1 = new Array("HTML", "CSS", "Javascript", "React");
console.log(courses1);

// Initializing Array while declaring
let arr = new Array(3);
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
console.log(arr);





//==========basic operation=========// 

// Creating an Array and Initializing with Values
let courses2 = ["HTML", "CSS", "JavaScript", "React"];

// Accessing Last Array Elements
let lastItem = courses2[courses.length - 1];

console.log("last Item: ", lastItem);

//==========Modifying Array Elements========//

// Creating an Array and Initializing with Values
let courses3 = ["HTML", "CSS", "Javascript", "React"];
console.log(courses3);

courses[1]= "Bootstrap";
console.log(courses3);




//============ Adding Elements to an Array===========//

// Creating an Array and Initializing with Values
let courses4 = ["HTML", "CSS", "Javascript", "React"];

// Add Element to the end of Array
courses.push("Node.js");

// Add Element to the beginning
courses.unshift("Web Development");

console.log(courses4);




//======Removing the array Element======// 

// Creating an Array and Initializing with Values
let courses5 = ["HTML", "CSS", "Javascript", "React", "Node.js"];
console.log("Original Array: " + courses5);

// Removes and returns the last element
let lastElement = courses5.pop();
console.log("After Removed the last elements: " + courses5);

// Removes and returns the first element
let firstElement = courses5.shift();
console.log("After Removed the First elements: " + courses5);

// Removes 2 elements starting from index 1
courses5.splice(1, 2);
console.log("After Removed 2 elements starting from index 1: " + courses5);




//=======Iterating an Array========//
let courses6 = ["HTML", "CSS", "JavaScript", "React"];

// Iterating through for loop
for (let i = 0; i < courses6.length; i++) {
    console.log(courses6[i])
}


