// Reference display element
const  display=document.getElementById('display');

//Track if we  have performed a calculation
let justcalculated =false;

function appendTodisplay(value) {
    console.log('button pressed:',value);
    alert('You pressed:'+value);
}
function clearDisplay() {
    console.log('Clear button pressed.')
    alert(Clear button was clicked);
}
function deletelasat() {
    console.log('Backspace  button pressed.')
    alert(Backspace button was clicked);
}
function CALCULATE() {
function clearDisplay() {
    console.log('Equals button pressed.')
    alert(Equals button was clicked);
}

document.addEventListener('DOMContentLoaded',function(){
    console.log('calculator loaded successfully');
    
    console.log('Display elemt',display);

    if (diplay){
      console.log('current display value:'display.value);
    } else{
        console.log('Display not found');
    }

})