let interValId;
document.querySelector("#start").addEventListener('click', function() {

    if(!interValId)
        {
            interValId = setInterval(function() {
                //generating random color 
                let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                document.body.style.backgroundColor = randomColor;
        
        
            }, 1000); // Change color every 1000 milliseconds (1 second)
        }
   
});

document.querySelector("#stop").addEventListener('click',function(){
    clearTimeout(interValId);
    interValId=null;
    console.log("Color Stopped");
})


//another Method 
/*  
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
*/