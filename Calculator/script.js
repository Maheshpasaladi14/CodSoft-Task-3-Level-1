const Screen = document.getElementById('screen');

function appendToScreen(value){
    Screen.value += value;
}

function clearScreen(){
    Screen.value = '';
}

function del(){
    Screen.value = Screen.value.slice(0, -1);
}

function calculate(){
    try{
        Screen.value = eval(Screen.value);
    }catch(error){
        Screen.value = 'Error';
    }
}