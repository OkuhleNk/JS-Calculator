// Reference display element
const  display=document.getElementById('display');

//Track if we  have performed a calculation
let justcalculated =false;

function isOperator(char) {
    return['+','=','*','/'].includes(char);
}

function getLastChar() {
    return display.value.slice(-1);
}

function appendTodisplay(value) {
    console.log('button pressed:',value);
    
    let currentValue=display.value;

    if(justCalculated && !isNaN(value)){
        display.value=value;
    justcalculated=false;
    return;
    }

    if (justCalculated && isOperator(value)) {
        display.value =currentValue + value ;
    justCalculated =false;
    return;
    }

    //Handles operators
    if(operator(value)){
        //dont allow operator as first char exception for minus)
        if(currentValue=== '0' && value !=='-'){
            return; //Do nothing  
        }

        //If the last character is already an operator,replace it
        if(isOperator(getLastChar())){
            display.value = currentValue.slice(0, -1) + value
        }else{
            display.value = currentValue + value;
        } 
    }else if(!isNaN(value)){
       if(currentValue ==='0'){
        display.value = value;
       }else{
        display.value = currentValue + value;
    }
     } else  if(value === '.'){
        if(currentValue==='0'){
            display.value = currentValue + value;
        }else{ +value
            // Get the last number in the display (after last operator)
            let parts = currentValue.split('/[+\-*');
            let lastNumber = parts[parts.length -1];

            //only add a decimal if number doesnt already one
            if(!lastNumber.includes('.')){
                display.value = currentValue + value;
            }
        }
    }else{
        display.value = currentValue + value;
    }

     //Reset the justCalculated flag when user starts typing
     justcalculated=false;

     console.log('Diplay updated to: ',display.value);
   
}
function clearDisplay() {
    console.log('Clear button pressed.');
    
    alert('Clear button was clicked');
    
    display.value='0';
    justCalculated=false;
    
    display.style.backgroundColor='#f0f0f0';
    setTimeout(() =>{
        display.style.backgroundColor='';
    }, 150); 
}
function deletelasat() {
    console.log('Backspace  button pressed.');

    let currentValue= display.value

    //If theres only one characteror its 0,reset to 0
    if(currentvalue.length<=1|| currentValue==='0'){
        display.value='0';
    }else{
        display.value=currentValue.slice(0,-1);
    }

}
function calculate() {
    console.log('Equals button pressed.');

    alert('Equal button was clicked');
}

document.addEventListener('keydown' ,function(event)){
    console.log('key pressed',event.key);

    if (Event.key >= '0 && event,key<='9'){
        appendTodisplay(event.key)
    }else if (event.key==='.'){
        appendTodisplay('.');
    }else if(event.key==='+'){
        appendTodisplay('+');
    }else if(event.key==='-'){
        appendTodisplay('-');
    }else if(event.key ===='*'){
        appendTodisplay('*');
    }else if (event.key==='/'){
        event.preventDefault();

        appendTodisplay('/');
    }
    else if(event.key==='Enter'|| event.key==='='){
         CALCULATE();
    }else if(event.key==='Escape' ||event.key==='c' || event.key ==='C'){
        clearDisplay();
    }else if(event.key ==='Backspace'){
        deletelast();
    }
})

document.addEventListener('DOMContentLoaded',function(){
    console.log('calculator loaded successfully');
     console.log('Display element',display);

    if (diplay){
      console.log('current display value:'display.value);
    } else{
        console.log('Display not found');
    }

})