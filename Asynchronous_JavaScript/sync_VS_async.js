/* 
    synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. So, basically a statement has to wait for the earlier statement to get executed.
*/

document.write("Hi"); // First 
document.write("<br>");
 
document.write("Mayukh");// Second 
document.write("<br>");
 
document.write("How are you"); // Third


//=======Asynchronous======//

/* 
Asynchronous code allows the program to be executed immediately whereas the synchronous code will block further execution of the remaining code until it finishes the current one. This may not look like a big problem but when you see it in a bigger picture you realize that it may lead to delaying the User Interface.
*/

document.write("Hi");
document.write("<br>");
 
setTimeout(() => {
    document.write("Let us see what happens");
}, 2000);
 
document.write("<br>");
document.write("End");
document.write("<br>");

//Asynchronous 
//setTimeout()
//setInterval()
//promises
//fetch
//axios
//XMLHttpRequest



