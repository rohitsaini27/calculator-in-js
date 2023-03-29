let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let scrrenValue = '';

for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log("button is",buttonText);
        if(buttonText == 'X'){
            buttonText = '*';
            scrrenValue += buttonText;
            screen.value = scrrenValue;
        }
        else if(buttonText == 'DEL'){
            scrrenValue = "";
            screen.value = scrrenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(scrrenValue);
        }
        else{
            scrrenValue += buttonText;
            screen.value = scrrenValue;
        }
    })
}