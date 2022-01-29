let screen = document.getElementById('screen');
let inputValue = '';
let buttons = document.querySelectorAll('button');
for(key of buttons){
    key.addEventListener('click' , (e)=>{
        buttonText = e.target.innerText;
        if(buttonText=='='){
            inputValue = eval(inputValue);
            screen.value = inputValue;
        }
        else if(buttonText=='C'){
            inputValue = '';
            screen.value = inputValue;
        }
        else if(buttonText=='DEL'){
            inputValue = inputValue.slice(0,-1);
            screen.value = inputValue;
        }
        else if(buttonText=='+/-'){
            sign = '-'
            inputValue = sign.concat(inputValue);
            screen.value = inputValue;
        }
        else{
            inputValue += buttonText;
            screen.value = inputValue;
        }
    })
}