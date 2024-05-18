/* Objects, in JavaScript, are the most important data type and form the building blocks for modern JavaScript. 
These objects are quite different from JavaScript’s primitive data types
(Number, String, Boolean, null, undefined, and symbol) in the sense that these primitive data types all store a single value each (depending on their types).  */

//Syntax for creating an object

/*new Object(value)
Object(value)
let object_name = {
    key_name : value,
    ...
}*/

// JavaScript code demonstrating a simple object


/*let school = {
    name: 'Vivekananda School',
    location: 'Delhi',
    established: '1971',
    displayInfo: function () {
        console.log(`${school.name} was established 
              in ${school.established} at ${school.location}`);
    }
}
school.displayInfo();   */



//========== Object Properties========//
let school = {
    name: 'Vivekananda School',
    location: 'Delhi',
    established: '1971',
    20: 1000,
    displayInfo: function () {
        console.log(`The value of the key 20 is ${school['20']}`);
    }
}
school.displayInfo();   

//update object 
/* 

let school = {
    name: 'Vivekananda School',
    location: 'Delhi',
    established: '1971',
    20: 1000,
    displayInfo: function () {
        console.log(`The value of the key 20 is ${school['20']}`);
    }
}

Update properties

school.name = 'Updated School Name';
school['location'] = 'Updated Location';


Display updated info

school.displayInfo();
console.log(`School name is ${school.name}`);
console.log(`School location is ${school.location}`);
*/

// to delete 

//delete school.established;