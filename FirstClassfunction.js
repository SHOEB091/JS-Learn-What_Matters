//First clas Functions
//it is a type of fucntion that can be assigned to a variable, 
//passed as an argument to another function, or returned from another function.

//Example 1

//assigning a function to a variable

/*function greet(){
    console.log("Hello World");
}
let sayhello=greet;
sayhello();
greet();
*/

//Example 2

//passing a function as an argument to another function

/*
function greet(){
    return "Hello World";

}
function message(callback){
    console.log(callback());
}
message(greet);
*/



//Example 3

//returning a function from another function
/*
function greet(){
    return function(){
        console.log("Hello World");
    };
}
let sayhello=greet();
sayhello();
*/

//Example 4

//function as a parameter

function greet(){
    return function(name){
        console.log("Hello "+name);
    };
}
let sayhello=greet();
sayhello("John");
sayhello("Doe");
