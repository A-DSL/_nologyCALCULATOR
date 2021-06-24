//the iphone calculator:

//displays the current number on the screen. if multiple numbers/the dot is pressed, they are added to the end of the current number. dot can only be added once.
//+/- switches the number between positive and negative by removing/adding a minus from the front of it.
//% instantly divides your current number by 100.

// +, -, X and / all create the specific operator (this operator is not shown on screen, but is highlighted on the right). if another number is entered after this operator is used, the first number is stored seperately as the 'back number' and the second number is shown on screen as the new 'front number'. if an operator is used again following this, the first and second numbers are combined by the operator and shown on screen, and entering another number will make that the new front number.
// = will return you a number in the same way that using a second operator would. 
//C makes the front number 0.


//Variable that will hold the back number (made when a new front number is made for operations).
let backNumber = 0;

//Variable that keeps track of whether an operator is being used.
let operatorToggle = false;
let posnegToggle = false;
//Variables that keep track of toggles for each operator. Used to control .highlightedorangebutton class assignment.
let divideToggle = false;
let multiplyToggle = false;
let minusToggle = false;
let plusToggle = false;

//Calculator display HTML
const calcDisplay = document.querySelector(".calculator__topdisplay");

//Calculator button HTML
const acButton = document.querySelector(".AC");
const posNegButton = document.querySelector(".posneg");
const percentButton = document.querySelector(".percent");
const divideButton = document.querySelector(".divide");
const sevenButton = document.querySelector(".seven");
const eightButton = document.querySelector(".eight");
const nineButton = document.querySelector(".nine");
const multiplyButton = document.querySelector(".multiply");
const fourButton = document.querySelector(".four");
const fiveButton = document.querySelector(".five");
const sixButton = document.querySelector(".six");
const minusButton = document.querySelector(".minus");
const oneButton = document.querySelector(".one");
const twoButton = document.querySelector(".two");
const threeButton = document.querySelector(".three");
const plusButton = document.querySelector(".plus");
const zeroButton = document.querySelector(".zero");
const decimalButton = document.querySelector(".decimal");
const equalsButton = document.querySelector(".equals");

//Number button click events
//nine
nineButton.addEventListener("click", (parameter) => {
   if (Number(calcDisplay.innerHTML) == 0){
        calcDisplay.innerHTML = "9";
    }
    else{
        calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "9"
    }
})
//eight
eightButton.addEventListener("click", (parameter) => {
    if (Number(calcDisplay.innerHTML) == 0){
         calcDisplay.innerHTML = "8";
     }
     else{
         calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "8"
     }
 })
 //seven
sevenButton.addEventListener("click", (parameter) => {
    if (Number(calcDisplay.innerHTML) == 0){
         calcDisplay.innerHTML = "7";
     }
     else{
         calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "7"
     }
 })
 //six
sixButton.addEventListener("click", (parameter) => {
    if (Number(calcDisplay.innerHTML) == 0){
         calcDisplay.innerHTML = "6";
     }
     else{
         calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "6"
     }
 })
 //five
fiveButton.addEventListener("click", (parameter) => {
    if (Number(calcDisplay.innerHTML) == 0){
         calcDisplay.innerHTML = "5";
     }
     else{
         calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "5"
     }
 })
 //four
fourButton.addEventListener("click", (parameter) => {
    if (Number(calcDisplay.innerHTML) == 0){
         calcDisplay.innerHTML = "4";
     }
     else{
         calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "4"
     }
 })
 //three
threeButton.addEventListener("click", (parameter) => {
    if (Number(calcDisplay.innerHTML) == 0){
        calcDisplay.innerHTML = "3";
    }
    else{
        calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "3"
    }
})
//two
twoButton.addEventListener("click", (parameter) => {
    if (Number(calcDisplay.innerHTML) == 0){
        calcDisplay.innerHTML = "2";
    }
    else{
        calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "2"
    }
})
//one
oneButton.addEventListener("click", (parameter) => {
    if (Number(calcDisplay.innerHTML) == 0){
        calcDisplay.innerHTML = "1";
    }
    else{
        calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "1"
    }
})
//zero
zeroButton.addEventListener("click", (parameter) => {
    if (Number(calcDisplay.innerHTML) == 0){
        calcDisplay.innerHTML = "0";
    }
    else{
        calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "0"
    }
})

//decimal button. only adds a decimal if there isn't one yet.
decimalButton.addEventListener("click", (parameter) => {
    if (calcDisplay.innerHTML.includes(".")){
    }
    else{
        calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "." 
    }
})

//negative/positive number toggle
posNegButton.addEventListener("click", (parameter) => {
    if (posnegToggle == false){
        calcDisplay.innerHTML = "-" + `${calcDisplay.innerHTML}`
        posnegToggle = true;
    }
    else if (posnegToggle == true){
        calcDisplay.innerHTML = `${calcDisplay.innerHTML.replace("-", "")}`
        posnegToggle = false;
    }
})

//percentage buttton; divides current front display number by 100.
percentButton.addEventListener("click", (parameter) => {
    calcDisplay.innerHTML = `${(Number(calcDisplay.innerHTML))/100}`;
})

//operator buttons. assigns class and affects button toggles.
//divide
divideButton.addEventListener("click", (parameter) => {
    if (divideToggle == false){

        //on
        divideToggle == true;
        //off
        multiplyToggle == false;
        minusToggle == false;
        plusToggle == false;
    }
    else if (divideToggle == true){
      
        //off
        divideToggle = false;
    }
})
//multiply
multiplyButton.addEventListener("click", (parameter) => {
    if (multiplyToggle == false){

        //on
        multiplyToggle == true;
        //off
        divideToggle == false;
        minusToggle == false;
        plusToggle == false;
    }
    else if (multiplyToggle == true){
        
        //off
        multiplyToggle = false;
    }
})
//minus
minusButton.addEventListener("click", (parameter) => {
    if (minusToggle == false){

        //on
        minusToggle == true;
        //off
        divideToggle == false;
        multiplyToggle == false;
        plusToggle == false;
    }
    else if (minusToggle == true){

        //off
        minusToggle = false;
    }
})
//plus
plusButton.addEventListener("click", (parameter) => {
    if (plusToggle == false){

        //on
        plusToggle == true;
        //off
        divideToggle == false;
        multiplyToggle == false;
        minusToggle == false;
    }
    else if (plusToggle == true){

        //off
        plusToggle = false;
    }
})