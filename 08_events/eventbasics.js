/*document.getElementById('owl').onclick=function(){
  alert('You clicked the owl');
}*/

/*document.getElementById('owl').addEventListener('click', function(){
  alert('You clicked the owl');
});
*/

//attachEvent()
//jQuery - on 

// type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode


///**Event Bubling (Event Propogation ) goes from bottom to top
//Inner element -> Li -> UI 


 // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul"); 
    
    
/*document .getElementById('owl').addEventListener('click',function(e){
    console.log("Owl has been clicked ");
    e.stopPropagation(); // stop bubling 
});*/


//using of prevent default
/*document.getElementById('google').addEventListener('click',function(e){

    e.preventDefault();
    e.stopPropagation();
    console.log("google Clicked");

})*/

document.querySelector('#images').addEventListener('click',function(e){

    // console.log(e.target.parentNode);
    // let removeIt = e.target.parentNode;
    // removeIt.remove();
    console.log(e.target.tagName);
        if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
            let removeIt = e.target.parentNode
            removeIt.remove()
        }
    


})
