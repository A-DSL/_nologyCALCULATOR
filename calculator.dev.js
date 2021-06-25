"use strict";

//the iphone calculator:
//displays the current number on the screen. if multiple numbers/the dot is pressed, they are added to the end of the current number. dot can only be added once.
//+/- switches the number between positive and negative by removing/adding a minus from the front of it.
//% instantly divides your current number by 100.
// +, -, X and / all create the specific operator (this operator is not shown on screen, but is highlighted on the right). if another number is entered after this operator is used, the first number is stored seperately as the 'back number' and the second number is shown on screen as the new 'front number'. if an operator is used again following this, the first and second numbers are combined by the operator and shown on screen, and entering another number will make that the new front number.
// = will return you a number in the same way that using a second operator would. 
//C makes the front number 0.
//Variable that will hold the back number (made when a new front number is made for operations).
var backNumber = 0; //Variable that keeps track of whether an operator is being used.

var operatorToggle = false;
var posnegToggle = false; //Variables that keep track of toggles for each operator. Used to control .highlightedpinkbutton class assignment.

var divideToggle = false;
var multiplyToggle = false;
var minusToggle = false;
var plusToggle = false; //Calculator display HTML

var calcDisplay = document.querySelector(".calculator__topdisplay"); //Calculator button HTML

var acButton = document.querySelector(".AC");
var posNegButton = document.querySelector(".posneg");
var percentButton = document.querySelector(".percent");
var divideButton = document.querySelector(".divide");
var sevenButton = document.querySelector(".seven");
var eightButton = document.querySelector(".eight");
var nineButton = document.querySelector(".nine");
var multiplyButton = document.querySelector(".multiply");
var fourButton = document.querySelector(".four");
var fiveButton = document.querySelector(".five");
var sixButton = document.querySelector(".six");
var minusButton = document.querySelector(".minus");
var oneButton = document.querySelector(".one");
var twoButton = document.querySelector(".two");
var threeButton = document.querySelector(".three");
var plusButton = document.querySelector(".plus");
var zeroButton = document.querySelector(".zero");
var decimalButton = document.querySelector(".decimal");
var equalsButton = document.querySelector(".equals"); //Number button click events
//nine

nineButton.addEventListener("click", function (parameter) {
  if (Number(calcDisplay.innerHTML) == 0 && !calcDisplay.innerHTML.includes(".")) {
    calcDisplay.innerHTML = "9";
    acButton.innerHTML = "C";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "9";
  }
}); //eight

eightButton.addEventListener("click", function (parameter) {
  if (Number(calcDisplay.innerHTML) == 0 && !calcDisplay.innerHTML.includes(".")) {
    calcDisplay.innerHTML = "8";
    acButton.innerHTML = "C";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "8";
  }
}); //seven

sevenButton.addEventListener("click", function (parameter) {
  if (Number(calcDisplay.innerHTML) == 0 && !calcDisplay.innerHTML.includes(".")) {
    calcDisplay.innerHTML = "7";
    acButton.innerHTML = "C";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "7";
  }
}); //six

sixButton.addEventListener("click", function (parameter) {
  if (Number(calcDisplay.innerHTML) == 0 && !calcDisplay.innerHTML.includes(".")) {
    calcDisplay.innerHTML = "6";
    acButton.innerHTML = "C";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "6";
  }
}); //five

fiveButton.addEventListener("click", function (parameter) {
  if (Number(calcDisplay.innerHTML) == 0 && !calcDisplay.innerHTML.includes(".")) {
    calcDisplay.innerHTML = "5";
    acButton.innerHTML = "C";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "5";
  }
}); //four

fourButton.addEventListener("click", function (parameter) {
  if (Number(calcDisplay.innerHTML) == 0 && !calcDisplay.innerHTML.includes(".")) {
    calcDisplay.innerHTML = "4";
    acButton.innerHTML = "C";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "4";
  }
}); //three

threeButton.addEventListener("click", function (parameter) {
  if (Number(calcDisplay.innerHTML) == 0 && !calcDisplay.innerHTML.includes(".")) {
    calcDisplay.innerHTML = "3";
    acButton.innerHTML = "C";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "3";
  }
}); //two

twoButton.addEventListener("click", function (parameter) {
  if (Number(calcDisplay.innerHTML) == 0 && !calcDisplay.innerHTML.includes(".")) {
    calcDisplay.innerHTML = "2";
    acButton.innerHTML = "C";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "2";
  }
}); //one

oneButton.addEventListener("click", function (parameter) {
  if (Number(calcDisplay.innerHTML) == 0 && !calcDisplay.innerHTML.includes(".")) {
    calcDisplay.innerHTML = "1";
    acButton.innerHTML = "C";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "1";
  }
}); //zero

zeroButton.addEventListener("click", function (parameter) {
  if (Number(calcDisplay.innerHTML) == 0 && !calcDisplay.innerHTML.includes(".")) {
    calcDisplay.innerHTML = "0";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "0";
    acButton.innerHTML = "C";
  }
}); //decimal button. only adds a decimal if there isn't one yet.

decimalButton.addEventListener("click", function (parameter) {
  if (calcDisplay.innerHTML.includes(".")) {} else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + ".";
    acButton.innerHTML = "C";
  }
}); //negative/positive number toggle

posNegButton.addEventListener("click", function (parameter) {
  if (posnegToggle == false) {
    calcDisplay.innerHTML = "-" + "".concat(calcDisplay.innerHTML);
    posnegToggle = true;
  } else if (posnegToggle == true) {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML.replace("-", ""));
    posnegToggle = false;
  }
}); //percentage buttton; divides current front display number by 100.

percentButton.addEventListener("click", function (parameter) {
  calcDisplay.innerHTML = "".concat(Number(calcDisplay.innerHTML) / 100);
}); //operator buttons. assigns class, toggles buttons, and stores/unstores front number to/from back.
//divide

divideButton.addEventListener("click", function (parameter) {
  if (divideToggle == false) {
    //store front number at back
    backNumber = "".concat(calcDisplay.innerHTML);
    calcDisplay.innerHTML = "0"; //on

    divideToggle = true;
    divideButton.classList.add("highlightedpinkbutton"); //off

    multiplyToggle = false;
    multiplyButton.classList.remove("highlightedpinkbutton");
    minusToggle = false;
    minusButton.classList.remove("highlightedpinkbutton");
    plusToggle = false;
    plusButton.classList.remove("highlightedpinkbutton");
    posnegToggle = false;
  } else if (divideToggle == true) {
    //return back number to front
    calcDisplay.innerHTML = backNumber;
    backNumber = "0"; //off

    divideToggle = false;
    divideButton.classList.remove("highlightedpinkbutton");
  }
}); //multiply

multiplyButton.addEventListener("click", function (parameter) {
  if (multiplyToggle == false) {
    //store front number at back
    backNumber = "".concat(calcDisplay.innerHTML);
    calcDisplay.innerHTML = "0"; //on

    multiplyToggle = true;
    multiplyButton.classList.add("highlightedpinkbutton"); //off

    divideToggle = false;
    divideButton.classList.remove("highlightedpinkbutton");
    minusToggle = false;
    minusButton.classList.remove("highlightedpinkbutton");
    plusToggle = false;
    plusButton.classList.remove("highlightedpinkbutton");
    posnegToggle = false;
  } else if (multiplyToggle == true) {
    //return back number to front
    calcDisplay.innerHTML = backNumber;
    backNumber = "0"; //off

    multiplyToggle = false;
    multiplyButton.classList.remove("highlightedpinkbutton");
  }
}); //minus

minusButton.addEventListener("click", function (parameter) {
  if (minusToggle == false) {
    //store front number at back
    backNumber = "".concat(calcDisplay.innerHTML);
    calcDisplay.innerHTML = "0"; //on

    minusToggle = true;
    minusButton.classList.add("highlightedpinkbutton"); //off

    divideToggle = false;
    divideButton.classList.remove("highlightedpinkbutton");
    multiplyToggle = false;
    multiplyButton.classList.remove("highlightedpinkbutton");
    plusToggle = false;
    plusButton.classList.remove("highlightedpinkbutton");
    posnegToggle = false;
  } else if (minusToggle == true) {
    //return back number to front
    calcDisplay.innerHTML = backNumber;
    backNumber = "0"; //off

    minusToggle = false;
    minusButton.classList.remove("highlightedpinkbutton");
  }
}); //plus

plusButton.addEventListener("click", function (parameter) {
  if (plusToggle == false) {
    //store front number at back
    backNumber = "".concat(calcDisplay.innerHTML);
    calcDisplay.innerHTML = "0"; //on

    plusToggle = true;
    plusButton.classList.add("highlightedpinkbutton"); //off

    divideToggle = false;
    divideButton.classList.remove("highlightedpinkbutton");
    multiplyToggle = false;
    multiplyButton.classList.remove("highlightedpinkbutton");
    minusToggle = false;
    minusButton.classList.remove("highlightedpinkbutton");
    posnegToggle = false;
  } else if (plusToggle == true) {
    //return back number to front
    calcDisplay.innerHTML = backNumber;
    backNumber = "0"; //off

    plusToggle = false;
    plusButton.classList.remove("highlightedpinkbutton");
  }
}); //equals button. returns combination of first and second number with expected operator, if an operator toggle is on. following the operation, the associated toggle is disabled (class is also removed) and the back number is deleted.

equalsButton.addEventListener("click", function (parameter) {
  //conducts division
  if (divideToggle == true) {
    calcDisplay.innerHTML = "".concat(Number(backNumber) / Number(calcDisplay.innerHTML));
    backNumber = "0";
    divideToggle = false;
    divideButton.classList.remove("highlightedpinkbutton");
    posnegToggle = false;
  } //conducts multiplication
  else if (multiplyToggle == true) {
      calcDisplay.innerHTML = "".concat(Number(backNumber) * Number(calcDisplay.innerHTML));
      backNumber = "0";
      multiplyToggle = false;
      multiplyButton.classList.remove("highlightedpinkbutton");
      posnegToggle = false;
    } //conducts subtraction
    else if (minusToggle == true) {
        calcDisplay.innerHTML = "".concat(Number(backNumber) - Number(calcDisplay.innerHTML));
        backNumber = "0";
        minusToggle = false;
        minusButton.classList.remove("highlightedpinkbutton");
        posnegToggle = false;
      } //conducts addition
      else if (plusToggle == true) {
          calcDisplay.innerHTML = "".concat(Number(backNumber) + Number(calcDisplay.innerHTML));
          backNumber = "0";
          plusToggle = false;
          plusButton.classList.remove("highlightedpinkbutton");
          posnegToggle = false;
        } //does nothing if no toggle is on.
        else {}
}); //AC/C button. deletes front number, transfers back number to front, and disables all operator toggles.

acButton.addEventListener("click", function (parameter) {
  if (backNumber != "0") {
    calcDisplay.innerHTML = "".concat(backNumber);
    backNumber = "0";
    acButton.innerHTML = "C";
    divideToggle = false;
    multiplyToggle = false;
    minusToggle = false;
    plusToggle = false;
  } else {
    calcDisplay.innerHTML = "0";
    acButton.innerHTML = "AC";
    divideToggle = false;
    multiplyToggle = false;
    minusToggle = false;
    plusToggle = false;
  }
});