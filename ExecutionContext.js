/*
When the JavaScript engine scans a script file, it makes an environment called the Execution Context that handles the entire transformation and execution of the code.

During the context runtime, the parser parses the source code and allocates memory for the variables and functions. The source code is generated and gets executed.

There are two types of execution contexts: global and function. The global execution context is created when a JavaScript script first starts to run, and it represents the global scope in JavaScript. A function execution context is created whenever a function is called, representing the function's local scope.
*/


/*
Execution Context matlab jab bhi ham function chalaiyenge function apna ak 
Khudka ek imaginary box banata hai jise Execution Context kehte hain. */

// variables 
// functions inside that parent function 
// lexical environment of that funciton 

function abcd()
{
    var a = 12;
    function def()
    {
        var b = 12;
    }
}

//lexical environment can explain u sthat how the function is able to access the variables outside the function

/*lexical environment hota hai ek chart 
jisme yeh likha hot ahai ki aapka particular function kis cheezo ki accesss kar skata hai and kinko nahi,
matlab ki it hold's its scope and scope chain  */

