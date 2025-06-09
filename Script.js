// Reference display element
const  display=document.getElementById('display');

//Track if we  have performed a calculation
let justcalculated =false;

function appendTodisplay(value) {
    console.log('button pressed:',value);
    alert('You pressed:'+value);
    
    let currentValue=display.value;

    if(justCalculated && !isNaN(value)){
        display.value=value;
    justcalculated=false;
    return;
    }
    //If current display show 0 and user enters a number,we wanna replace the 0
    if(current==="0"&& !isNaN(value)){
       display.value= value; 
    } 

    //If the current display shows 0 and the user enters a decimal ,keep the 0
    else if(currentValue==='0' && value==='.'){
        display.value=currentvalue + value
     }
     else{
        display.value=currentValue + value;
     }

     //Reset the justCalculated flag when user starts typing
     justcalculated=false;

     console.log('Diplay updated to: ',display.value);
   
}
function clearDisplay() {
    console.log('Clear button pressed.')
    alert(Clear button was clicked);
}
function deletelasat() {
    console.log('Backspace  button pressed.')
    let currentValue= display.value

    //If theres only one characteror its 0,reset to 0
    if(currentvalue.length<=1|| currentValue==='0'){
        display.value='0';
    }else{
        display.value=currentValue.slice(0,-1);
    }

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