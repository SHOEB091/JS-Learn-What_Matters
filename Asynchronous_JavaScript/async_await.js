//koi bhi aisa function jisme aap async code likhnege , kyoki async code hai toh aap promises ka istemal kar ssakte hai , jab uska answer aayega apko (then ) lagana padega , us then ko lagane se bachne ke liye , aap async await ka use karna padega 

/*function abcd()
{
    fetch(`https://randomuser.me/api/`)
    .then(function(raw)
    {
    return raw.json();
    })

    .then(function(data)
    {
        console.log(data);
     })
}
abcd();
*/

//====== Now Using Async And Await====/

async function abcde()
{
    let raw = await fetch(`https://randomuser.me/api/`);

    let ans2 = await raw.json();
    console.log(ans2); 
}
abcde();


//jab bhi koi code async hai to apko uske liye wait karna padta hai kyoki hame nahi pata iska answer kab aaiyega 