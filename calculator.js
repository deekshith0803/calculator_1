var display = document.getElementById("display")

function displayval(input){
    display.value += input;
}
function result(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "syntax error"
    }
}
function clearDisplay(){
    display.value =" ";
}

function clearone() {
    display.value = display.value.substring(0, display.value.length - 1);
}