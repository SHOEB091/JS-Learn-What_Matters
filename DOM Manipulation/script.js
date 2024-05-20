/* 
-->Dom->Document Object Model 
---Represent structure of web page (Using Tree like structure)
----Each element - node in tree 
---These nodes can be accessed, modified, and manipulated using programming languages like JavaScript


-->Pillers Of DOM (4)
----1.Selection of the elements
-----querySelector 
------document.querySelector("#id_name/.class_name/element") ; //select only fist 
------document.querySelectorAll("#id_name/.class_name/element") ; //select many element and return nodeList
-------we need to use forEach method get access of each element of nodeList(set Of Many Element) ;
--------elem.forEach(function(e){ //logic }) ; 

-----idSelector
------document.getElementById("id_name") ; // don't use (#)

-----classSelector
------document.getElementsByClassName("class_name") ; // don't use (.)


----2.Changing HTML
------elem.innerHTML  = "kuchh bhi" ;  // will change original content 


----3.Changing CSS 
------elem.style.property = "value" ;  // use camelCase for property -(backgroundColor , color )


----4. Event Listener
-----elem.addEventListener("event" ,function(){ // changing css/HTML   }) ;
-----events ->  Mouse Events:click, dblclick, mousedown, mouseup, contextmenu,mouseout, mousewheel, mouseover
                Touch Events:touchstart, touchend, touchmove, touchcancel
                Keyboard Events:keydown, keyup, keypress
                Form Events: focus, blur, change, submit
                Window Events: resize, scroll, load, unload, hashchange
*/

//let a = document.querySelector("h1");
//for id #id name 
//for class . class name 
//console.log(a);


//TO MODIFY HTML

//let b = document.querySelector("h1");
//b.innerHTML="hello world "


//let c = document.querySelector("h1");
//c.style.color="blue";
//c.style.backgroundColor="black";



// If "hi" is an id
var a = document.querySelector("#hi");

// If "hi" is a class
// var a = document.querySelector(".hi");

/*a.addEventListener("click", function() {
    console.log("hey");
});

a.addEventListener("click", function() {
    a.innerHTML="A lot Changed Me "
    a.style.color="blue"
    a.style.backgroundColor= "black"

});
*/



/*var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");


var flag = 0;


btn.addEventListener("click",function()
{
    if(flag==0)
        {
            bulb.style.backgroundColor="yellow";
            console.log("clicked");
            flag=1;
        }
        else{
            bulb.style.backgroundColor="blue";
            console.log("clicked");
            flag=0;
        }


    
})

*/

/*var h = document.querySelectorAll("h1")

console.log(h);

h.forEach(function(e){
    console.log(e);
})
*/

//to pick any element by id 

// document.getElementById("box")

// var h = document.querySelector("h1");
// h.innerHTML= "bye"


var box = document.querySelector("#box");
box.innerHtml="<h1>Hello</h1>"










