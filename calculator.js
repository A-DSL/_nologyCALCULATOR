//the iphone calculator:

//displays the current number on the screen. if multiple numbers/the dot is pressed, they are added to the end of the current number. dot can only be added once.
//+/- switches the number between positive and negative by removing/adding a minus from the front of it.
//% instantly divides your current number by 100.

// +, -, X and / all create the specific operator (this operator is not shown on screen, but is highlighted on the right). if another number is entered after this operator is used, the first number is stored seperately as the 'back number' and the second number is shown on screen as the new 'front number'. if an operator is used again following this, the first and second numbers are combined by the operator and shown on screen, and entering another number will make that the new front number.
// = will return you a number in the same way that using a second operator would. 
//C makes the front number 0.


//Variable that will hold the back number (made when a new front number is created for operations).
let backNumber = 0;

//Variable that keeps track of whether pos/neg is being used.
let posnegToggle = false;
//Variables that keep track of toggles for each operator.
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
    if (Number(calcDisplay.innerHTML) == 0 && !(calcDisplay.innerHTML.includes("."))){
        calcDisplay.innerHTML = "9";
        acButton.innerHTML = "C";
    }
    else{
        calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "9"
    }
})
//eight
eightButton.addEventListener("click", (parameter) => {
    if (Number(calcDisplay.innerHTML) == 0 && !(calcDisplay.innerHTML.includes("."))){
        calcDisplay.innerHTML = "8";
        acButton.innerHTML = "C";
    }
    else{
        calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "8"
    }
})
 //seven
sevenButton.addEventListener("click", (parameter) => {
    if (Number(calcDisplay.innerHTML) == 0 && !(calcDisplay.innerHTML.includes("."))){
        calcDisplay.innerHTML = "7";
        acButton.innerHTML = "C";
    }
    else{
        calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "7"
    }
})
 //six
sixButton.addEventListener("click", (parameter) => {
    if (Number(calcDisplay.innerHTML) == 0 && !(calcDisplay.innerHTML.includes("."))){
        calcDisplay.innerHTML = "6";
        acButton.innerHTML = "C";
    }
    else{
        calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "6"
    }
})
 //five
fiveButton.addEventListener("click", (parameter) => {
    if (Number(calcDisplay.innerHTML) == 0 && !(calcDisplay.innerHTML.includes("."))){
        calcDisplay.innerHTML = "5";
        acButton.innerHTML = "C";
    }
    else{
        calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "5"
    }
})
 //four
fourButton.addEventListener("click", (parameter) => {
    if (Number(calcDisplay.innerHTML) == 0 && !(calcDisplay.innerHTML.includes("."))){
        calcDisplay.innerHTML = "4";
        acButton.innerHTML = "C";
    }
    else{
        calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "4"
    }
})
 //three
threeButton.addEventListener("click", (parameter) => {
    if (Number(calcDisplay.innerHTML) == 0 && !(calcDisplay.innerHTML.includes("."))){
        calcDisplay.innerHTML = "3";
        acButton.innerHTML = "C";
    }
    else{
        calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "3"
    }
})
//two
twoButton.addEventListener("click", (parameter) => {
    if (Number(calcDisplay.innerHTML) == 0 && !(calcDisplay.innerHTML.includes("."))){
        calcDisplay.innerHTML = "2";
        acButton.innerHTML = "C";
    }
    else{
        calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "2"
    }
})
//one
oneButton.addEventListener("click", (parameter) => {
    if (Number(calcDisplay.innerHTML) == 0 && !(calcDisplay.innerHTML.includes("."))){
        calcDisplay.innerHTML = "1";
        acButton.innerHTML = "C";
    }
    else{
        calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "1"
    }
})
//zero
zeroButton.addEventListener("click", (parameter) => {
    if (Number(calcDisplay.innerHTML) == 0 && !(calcDisplay.innerHTML.includes("."))){
        calcDisplay.innerHTML = "0";
        posnegToggle = false;
    }
    else{
        calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "0"
        acButton.innerHTML = "C";
    }
})

//decimal button. only adds a decimal if there isn't one yet.
decimalButton.addEventListener("click", (parameter) => {
    if (calcDisplay.innerHTML.includes(".")){
    }
    else{
        calcDisplay.innerHTML = `${calcDisplay.innerHTML}` + "."
        acButton.innerHTML = "C"; 
    }
})

//negative/positive number toggle
posNegButton.addEventListener("click", (parameter) => {
    if ((posnegToggle == false) && !(calcDisplay.innerHTML.includes("-"))){
        calcDisplay.innerHTML = "-" + `${calcDisplay.innerHTML}`
        acButton.innerHTML = "C";
        posnegToggle = true;
    }
    else if (posnegToggle == true || calcDisplay.innerHTML.includes("-")){
        calcDisplay.innerHTML = `${calcDisplay.innerHTML.replace("-", "")}`
        posnegToggle = false;
    }
})

//percentage buttton; divides current front display number by 100.
percentButton.addEventListener("click", (parameter) => {
    calcDisplay.innerHTML = `${(Number(calcDisplay.innerHTML))/100}`;
})

//operator buttons. assigns class, toggles buttons, and stores/unstores front number to/from back.
//divide
divideButton.addEventListener("click", (parameter) => {
    if (divideToggle == false){
        //store front number at back (unless another operator is being overriden)
        if (multiplyToggle == false && minusToggle == false && plusToggle == false){
            backNumber = `${calcDisplay.innerHTML}`;
            calcDisplay.innerHTML = "0";
        }

        //on
        divideToggle = true;
        divideButton.classList.add("highlightedpinkbutton");
        divideButton.classList.remove("pinkbutton");
        //off
        multiplyToggle = false;
        multiplyButton.classList.remove("highlightedpinkbutton");
        multiplyButton.classList.add("pinkbutton");
        minusToggle = false;
        minusButton.classList.remove("highlightedpinkbutton");
        minusButton.classList.add("pinkbutton");
        plusToggle = false;
        plusButton.classList.remove("highlightedpinkbutton");
        plusButton.classList.add("pinkbutton");
        posnegToggle = false;
    }
    else if (divideToggle == true){
        //return back number to front
        calcDisplay.innerHTML = backNumber;
        backNumber = "0";

        //off
        divideToggle = false;
        divideButton.classList.remove("highlightedpinkbutton");
        divideButton.classList.add("pinkbutton");
    }
})
//multiply
multiplyButton.addEventListener("click", (parameter) => {
    if (multiplyToggle == false){
        //store front number at back (unless another operator is being overriden)
        if (divideToggle == false && minusToggle == false && plusToggle == false){
            backNumber = `${calcDisplay.innerHTML}`;
            calcDisplay.innerHTML = "0";
        }      

        //on
        multiplyToggle = true;
        multiplyButton.classList.add("highlightedpinkbutton");
        multiplyButton.classList.remove("pinkbutton");
        //off
        divideToggle = false;
        divideButton.classList.remove("highlightedpinkbutton");
        divideButton.classList.add("pinkbutton");
        minusToggle = false;
        minusButton.classList.remove("highlightedpinkbutton");
        minusButton.classList.add("pinkbutton");
        plusToggle = false;
        plusButton.classList.remove("highlightedpinkbutton");
        plusButton.classList.add("pinkbutton");
        posnegToggle = false;
    }
    else if (multiplyToggle == true){
        //return back number to front
        calcDisplay.innerHTML = backNumber;
        backNumber = "0";

        //off
        multiplyToggle = false;
        multiplyButton.classList.remove("highlightedpinkbutton");
        multiplyButton.classList.add("pinkbutton");
    }
})
//minus
minusButton.addEventListener("click", (parameter) => {
    if (minusToggle == false){
        //store front number at back (unless another operator is being overriden)
        if (divideToggle == false && multiplyToggle == false && plusToggle == false){
            backNumber = `${calcDisplay.innerHTML}`;
            calcDisplay.innerHTML = "0";
        }      

        //on
        minusToggle = true;
        minusButton.classList.add("highlightedpinkbutton");
        minusButton.classList.remove("pinkbutton");
        //off
        divideToggle = false;
        divideButton.classList.remove("highlightedpinkbutton");
        divideButton.classList.add("pinkbutton");
        multiplyToggle = false;
        multiplyButton.classList.remove("highlightedpinkbutton");
        multiplyButton.classList.add("pinkbutton");
        plusToggle = false;
        plusButton.classList.remove("highlightedpinkbutton");
        plusButton.classList.add("pinkbutton");
        posnegToggle = false;
    }
    else if (minusToggle == true){
        //return back number to front
        calcDisplay.innerHTML = backNumber;
        backNumber = "0";

        //off
        minusToggle = false;
        minusButton.classList.remove("highlightedpinkbutton");
        minusButton.classList.add("pinkbutton");
    }
})
//plus
plusButton.addEventListener("click", (parameter) => {
    if (plusToggle == false){
        //store front number at back (unless another operator is being overriden)
        if (divideToggle == false && multiplyToggle == false && minusToggle == false){
            backNumber = `${calcDisplay.innerHTML}`;
            calcDisplay.innerHTML = "0";
        }      

        //on
        plusToggle = true;
        plusButton.classList.add("highlightedpinkbutton");
        plusButton.classList.remove("pinkbutton");
        //off
        divideToggle = false;
        divideButton.classList.remove("highlightedpinkbutton");
        divideButton.classList.add("pinkbutton");
        multiplyToggle = false;
        multiplyButton.classList.remove("highlightedpinkbutton");
        multiplyButton.classList.add("pinkbutton");
        minusToggle = false;
        minusButton.classList.remove("highlightedpinkbutton");
        minusButton.classList.add("pinkbutton");
        posnegToggle = false;
    }
    else if (plusToggle == true){
        //return back number to front
        calcDisplay.innerHTML = backNumber;
        backNumber = "0";

        //off
        plusToggle = false;
        plusButton.classList.remove("highlightedpinkbutton");
        plusButton.classList.add("pinkbutton");
    }
})

//equals button. returns combination of first and second number with expected operator, if an operator toggle is on. following the operation, the associated toggle is disabled (class is also removed) and the back number is deleted.
equalsButton.addEventListener("click", (parameter) => {
    //conducts division
    if (divideToggle == true){
        calcDisplay.innerHTML = `${Number(backNumber)/Number(calcDisplay.innerHTML)}`
        backNumber = "0";
        divideToggle = false;
        divideButton.classList.remove("highlightedpinkbutton");
        divideButton.classList.add("pinkbutton");
        posnegToggle = false;
    }
    //conducts multiplication
    else if (multiplyToggle == true){
        calcDisplay.innerHTML = `${Number(backNumber)*Number(calcDisplay.innerHTML)}`
        backNumber = "0";
        multiplyToggle = false;
        multiplyButton.classList.remove("highlightedpinkbutton");
        multiplyButton.classList.add("pinkbutton");
        posnegToggle = false;
    }
    //conducts subtraction
    else if (minusToggle == true){
        calcDisplay.innerHTML = `${Number(backNumber)-Number(calcDisplay.innerHTML)}`
        backNumber = "0";
        minusToggle = false;
        minusButton.classList.remove("highlightedpinkbutton");
        minusButton.classList.add("pinkbutton");
        posnegToggle = false;
    }
    //conducts addition
    else if (plusToggle == true){
        calcDisplay.innerHTML = `${Number(backNumber)+Number(calcDisplay.innerHTML)}`
        backNumber = "0";
        plusToggle = false;
        plusButton.classList.remove("highlightedpinkbutton");
        plusButton.classList.add("pinkbutton");
        posnegToggle = false;
    }
    //does nothing if no toggle is on.
    else{}
})

//AC/C button. deletes front number, transfers back number to front, and disables all operator toggles.
acButton.addEventListener("click", (parameter) => {
    if (backNumber != "0"){
        calcDisplay.innerHTML = `${backNumber}`;
        backNumber = "0";
        acButton.innerHTML = "C";
        divideToggle = false;
        divideButton.classList.remove("highlightedpinkbutton");
        divideButton.classList.add("pinkbutton");
        multiplyToggle = false;
        multiplyButton.classList.remove("highlightedpinkbutton");
        multiplyButton.classList.add("pinkbutton");
        minusToggle = false;
        minusButton.classList.remove("highlightedpinkbutton");
        minusButton.classList.add("pinkbutton");
        plusToggle = false;
        plusButton.classList.remove("highlightedpinkbutton");
        plusButton.classList.add("pinkbutton");
        posnegToggle = false;
    }
    else{
        calcDisplay.innerHTML = "0";
        acButton.innerHTML = "AC";
        divideToggle = false;
        divideButton.classList.remove("highlightedpinkbutton");
        divideButton.classList.add("pinkbutton");
        multiplyToggle = false;
        multiplyButton.classList.remove("highlightedpinkbutton");
        multiplyButton.classList.add("pinkbutton");
        minusToggle = false;
        minusButton.classList.remove("highlightedpinkbutton");
        minusButton.classList.add("pinkbutton");
        plusToggle = false;
        plusButton.classList.remove("highlightedpinkbutton");
        plusButton.classList.add("pinkbutton");
        posnegToggle = false;
    }
})

//...this code is not very efficient ..' in the future i need to like, make more functions that replicate all this stuff such as the class addition/removal.