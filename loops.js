//For Loop 
/* for (initialization; testing condition; increment/decrement) {
    statement(s)
} */


for (let i = 0; i < 5; i++) { 
    console.log("Hello World!"); 
}

//While Loop

//While loop Syntax

/*
while (boolean condition) {
    loop statements...
}
*/

let val = 1; 
  
while (val < 6) { 
    console.log(val);  
    val += 1; 
}

//Do While Loop
/*
do {
    Statements...
}
while (condition);
*/

let test = 1; 
  
do { 
    console.log(test); 
    test++; 
} while(test <= 5)



//For in loop
// it is used to iterate over the properties of an object.



/*
for (variable in object) {
    statement or block to execute
 */
    let myObj = { x: 1, y: 2, z: 3 }; 
    for (let key in myObj) { 
        console.log(key, myObj[key]); 
    }



//For Each Loop 
//for each loop is used to iterate over the elements of an array only .
//foreach never do changes in default array it makes changes in temporary copy of array
var a = [1,2,23,34,34,4,5,6,78,9];

a.forEach(function(element){
    console.log(element+2);
});