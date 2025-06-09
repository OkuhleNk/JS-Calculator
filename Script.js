// Reference display element
const  display=document.getElementById('display');

//Track if we  have performed a calculation
let justcalculated =false;

function appendTodisplay(value) {
    console.log('button pressed:',value);
    
    let currentValue=display.value;

    if(justCalculated && !isNaN(value)){
        display.value=value;
    justcalculated=false;
    return;
    }

    //If current display show 0 and user enters a number,we wanna replace the 0
    if(current==="0"&& !isNaN(value)){
       display.value= value; 
    } else  if(currentValue==='0 && value === '.'){
        display.value=currentValue+value;
    }else if(value ==='.'){
        //Get the last number in the display
        let lastNymber =currentValue.split('/[+\-*/]').pop();
        //only add the decimal if the current number doesnt have ont
        if(!lastNumber.includes('.')){
            display.value =currentValue + value 
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

document.addEventListener('keydown' ,function(Event)){
    console.log('key pressed',Event.key);

    if (Event.key >= '0 && Event,key<='9'){
        appendTodisplay(Event.key)
    }else if (Event.key==='.'){
        appendTodisplay('.');
    }else if(Event.key==='+'){
        appendTodisplay('+');
    }else if(Event.key==='-'){
        appendTodisplay('-');
    }else if(Event.key ===='*'){
        appendTodisplay('*');
    }else if (Event.key==='/'){
        Event.preventDefault();
        appendTodisplay('/');
    }
    else if(Event.key==='Enter'|| Event.key==='='){
         CALCULATE();
    }else if(Event.key==='Escape' ||Event.key==='c' || Event.key ==='C'){
        clearDisplay();
    }else if(Event.key ==='Backspace'){
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