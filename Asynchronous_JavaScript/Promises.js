/* 
JavaScript Promises to simplify managing multiple asynchronous operations, preventing callback hell and unmanageable code. They represent future values, associating handlers with eventual success or failure, resembling synchronous methods by postponing value delivery until later.
*/


/*  
let promise = new Promise(function(resolve, reject){
     do something
});
*/

let promise = new Promise((resolve,reject)=>{
    if(true)
        {
            return resolve();
        }
    else{
        return reject();
    }    
})

promise .then(()=>{
    console.log("Resolved complete");
})
.catch(()=>{
    console.log("Rejct complete")
})

//========Example 2 =========//

//user will ask for a number between 0 to 9 if the number is below five resolve not rejected 

let ans = new Promise((resolve,reject)=>{
    let n = Math.floor(Math.random()*10);

    if(n<5)
        {
            return resolve();
        }
    else{
        return reject();
    }    
})
ans .then(function ()
{
    console.log("below");
})
.catch(function()
{
    console.log("above");
})



//==============Example 3============//
let ans2 = new Promise(function(resolve,reject)
{
    return resolve("Go to the market");
})
let p4 = ans2.then((data)=>
{
    console.log(data);
    return new Promise(function(resolve,reject){
        return resolve("Buy groceries");
    })
})
let p5 = p4.then(function(data)
{
    console.log(data);
    return new Promise(function(resolve,reject)
    {
        return resolve("Cook a delicious meal");
    })
})
p5.then(function(data)
{
    console.log(data);
    console.log("Enjoy your meal!");
})






