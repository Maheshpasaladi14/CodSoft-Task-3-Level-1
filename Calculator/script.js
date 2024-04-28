let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";

buttons.forEach((item) => {
    item.addEventListener("click", (e) => {
       if(e.target.innerHTML == "="){
           screenValue = eval(screenValue);
           screen.value = screenValue;
       }
       else if(e.target.innerHTML == "AC"){
           screenValue = "";
           screen.value = screenValue;
       }
       else if(e.target.innerHTML == "Del"){
           screenValue = screenValue.slice(0, -1);
           screen.value = screenValue;
       }
       else{
           screenValue += e.target.innerHTML;
           screen.value = screenValue;
       }
       
    })
})