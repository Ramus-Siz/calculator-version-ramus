// { calculate } import './calculator';



// TODO: Faire la manipulation du DOM dans ce fichier

const inputUser= document.getElementById("input");
const buttons= document.querySelectorAll(".numpad");
const reset=document.getElementById("reset");
const clear=document.getElementById("clear");
//The opperations const 
const plusoumoins=document.getElementById("plusoumoins");
const plus=document.getElementById("plus");
const forPrint=document.getElementById("calcul");
const minus=document.getElementById("minus");
const divideby=document.getElementById("divideby");
const times=document.getElementById("times");
const percentage= document.getElementById("percentage");
const equals=document.getElementById("equals");

let answer="";


// The AC button
reset.addEventListener("click", function() {
    answer="";
    forPrint.innerText="";
    inputUser.reset();

    
})

//The C button
clear.addEventListener("click", function(){

    let arrayToRemove=inputUser.value;
    let tagRemove=arrayToRemove.split('');
    tagRemove.pop();
    inputUser.value="";
    for (const tag of tagRemove) {
    inputUser.value= `${inputUser.value}${tag}`;
   }

  

});

//The plusoumoins button
plusoumoins.addEventListener("click" , function () {
    if (inputUser.value) {
        inputUser.value= parseInt(inputUser.value) * (-1);
    }
    
})

//The . button

function setDash(dash){

    if (inputUser.value==="") {
        
    }else{
        const string=inputUser.value;
    if (string.includes(dash)) {
        inputUser.value=inputUser.value;
    }else{
        inputUser.value=`${inputUser.value}${dash}`;
        

    }

    }

    
}

//The 0 button
function  setZero(zero){

    if (inputUser.value==='') {
        inputUser.value= `${zero}` ;

    }else if (inputUser.value !== "0") {
        inputUser.value= `${inputUser.value}${zero}` ;
        
    }
}
   

// get button value for numpad
buttons.forEach(function (button) {

    button.addEventListener("click", function(){
       
        switch (button.innerHTML) {
            case "1":
                inputUser.value=`${inputUser.value}1`
                
                break;
            case "2":
                inputUser.value= `${inputUser.value}2`;
                
                break;
                case "3":
                    inputUser.value= `${inputUser.value}3`;
                
                break;
                case "4":
                    inputUser.value= `${inputUser.value}4`;
                
                break;
                case "5":
                    inputUser.value= `${inputUser.value}5`;
                
                break;
                case "6":
                    inputUser.value= `${inputUser.value}6`;
                
                break;
                case "7":
                    inputUser.value= `${inputUser.value}7`;
                
                break;
                case "8":
                    inputUser.value= `${inputUser.value}8`;
                
                break;
                case "9":
                    inputUser.value= `${inputUser.value}9`;
                
                break;
                case "0":
                    setZero(button.innerHTML);
                
                break;
                case ".":
                    setDash(button.innerHTML);
                
                break;
            default:
                break;
        }
    });
});


//Operations:
//Addition 
function toAdd(e) {

    if (inputUser.value==="") {
        
    } else {
        
if(!answer){

    forPrint.innerHTML=`${forPrint.innerText}${inputUser.value}+`;
    inputUser.value="";
    
    
}else{
    forPrint.innerText=`${answer}+`;
    inputUser.value="";

}
    }



equals.disabled=false;

e.preventDefault();
    
}

//Soustraction 
function subtract(e) {
if (inputUser.value==="") {
    
} else {
    if(!answer){

        forPrint.innerHTML=`${forPrint.innerText}${inputUser.value}-`;
        inputUser.value="";
        
        
    }else{
        forPrint.innerText=`${answer}-`;
        inputUser.value="";
    }
}
    


    equals.disabled=false;
    e.preventDefault();
}

//Division
function divide(e) {
    if (inputUser.value==="") {
        
    } else {
        if(!answer){

            forPrint.innerHTML=`${forPrint.innerText}${inputUser.value}÷`;
            inputUser.value="";
            
            
        }else{
            forPrint.innerText=`${answer}÷`;
            inputUser.value="";
        }
        
    }

   
    equals.disabled=false;

    e.preventDefault();
    
}

//Multiply
function multiply(e) {

    if (inputUser.value==="") {
        
    } else {
        if(!answer){

            forPrint.innerHTML=`${forPrint.innerText}${inputUser.value}x`;
            inputUser.value="";
            
            
        }else{
            forPrint.innerText=`${answer}x`;
            inputUser.value="";
        }
        
    }
    
    equals.disabled=false;
    e.preventDefault();
    
}

//Percentage
function getPercentage(e) {

    forPrint.innerHTML=`${forPrint.innerText}${inputUser.value}%`;
    inputUser.value= parseInt(inputUser.value)/100;
    e.preventDefault();
    
}


//Calculate

function getAnswer(e) {

    if (equals.disabled) {

        //do anything
    }else{

    forPrint.innerHTML=`${forPrint.innerText}${inputUser.value}`;
    
    let expression=forPrint.innerText;
   

    calculate(expression);

    e.preventDefault();
    }
    
    
}


function calculate(expression) {

    if (expression.includes('x')) {
        expression=expression.replace(/x/i,"*");
        answer=eval(expression);
    }
    else if(expression.includes('÷')){
        expression=expression.replace(/÷/i,"/");
        answer=eval(expression);
    }else{
        answer=eval(expression);
        
    }

    inputUser.value=answer;
    equals.disabled=true;



}


plus.addEventListener("click" ,toAdd);
minus.addEventListener("click", subtract)
plus.addEventListener("click" ,toAdd);
divideby.addEventListener("click", divide);
times.addEventListener("click", multiply);
percentage.addEventListener("click", getPercentage);
equals.addEventListener("click", getAnswer);

