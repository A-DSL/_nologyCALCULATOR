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
var posnegToggle = false; //Variables that keep track of toggles for each operator. Used to control .highlightedorangebutton class assignment.

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
  if (Number(calcDisplay.innerHTML) == 0) {
    calcDisplay.innerHTML = "9";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "9";
  }
}); //eight

eightButton.addEventListener("click", function (parameter) {
  if (Number(calcDisplay.innerHTML) == 0) {
    calcDisplay.innerHTML = "8";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "8";
  }
}); //seven

sevenButton.addEventListener("click", function (parameter) {
  if (Number(calcDisplay.innerHTML) == 0) {
    calcDisplay.innerHTML = "7";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "7";
  }
}); //six

sixButton.addEventListener("click", function (parameter) {
  if (Number(calcDisplay.innerHTML) == 0) {
    calcDisplay.innerHTML = "6";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "6";
  }
}); //five

fiveButton.addEventListener("click", function (parameter) {
  if (Number(calcDisplay.innerHTML) == 0) {
    calcDisplay.innerHTML = "5";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "5";
  }
}); //four

fourButton.addEventListener("click", function (parameter) {
  if (Number(calcDisplay.innerHTML) == 0) {
    calcDisplay.innerHTML = "4";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "4";
  }
}); //three

threeButton.addEventListener("click", function (parameter) {
  if (Number(calcDisplay.innerHTML) == 0) {
    calcDisplay.innerHTML = "3";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "3";
  }
}); //two

twoButton.addEventListener("click", function (parameter) {
  if (Number(calcDisplay.innerHTML) == 0) {
    calcDisplay.innerHTML = "2";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "2";
  }
}); //one

oneButton.addEventListener("click", function (parameter) {
  if (Number(calcDisplay.innerHTML) == 0) {
    calcDisplay.innerHTML = "1";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "1";
  }
}); //zero

zeroButton.addEventListener("click", function (parameter) {
  if (Number(calcDisplay.innerHTML) == 0) {
    calcDisplay.innerHTML = "0";
  } else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + "0";
  }
}); //decimal button. only adds a decimal if there isn't one yet.

decimalButton.addEventListener("click", function (parameter) {
  if (calcDisplay.innerHTML.includes(".")) {} else {
    calcDisplay.innerHTML = "".concat(calcDisplay.innerHTML) + ".";
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
    divideButton.classList.add("highlightedorangebutton"); //off

    multiplyToggle = false;
    multiplyButton.classList.remove("highlightedorangebutton");
    minusToggle = false;
    minusButton.classList.remove("highlightedorangebutton");
    plusToggle = false;
    plusButton.classList.remove("highlightedorangebutton");
  } else if (divideToggle == true) {
    //return back number to front
    calcDisplay.innerHTML = backNumber;
    backNumber = "0"; //off

    divideToggle = false;
    divideButton.classList.remove("highlightedorangebutton");
  }
}); //multiply

multiplyButton.addEventListener("click", function (parameter) {
  if (multiplyToggle == false) {
    //store front number at back
    backNumber = "".concat(calcDisplay.innerHTML);
    calcDisplay.innerHTML = "0"; //on

    multiplyToggle = true;
    multiplyButton.classList.add("highlightedorangebutton"); //off

    divideToggle = false;
    divideButton.classList.remove("highlightedorangebutton");
    minusToggle = false;
    minusButton.classList.remove("highlightedorangebutton");
    plusToggle = false;
    plusButton.classList.remove("highlightedorangebutton");
  } else if (multiplyToggle == true) {
    //return back number to front
    calcDisplay.innerHTML = backNumber;
    backNumber = "0"; //off

    multiplyToggle = false;
    multiplyButton.classList.remove("highlightedorangebutton");
  }
}); //minus

minusButton.addEventListener("click", function (parameter) {
  if (minusToggle == false) {
    //store front number at back
    backNumber = "".concat(calcDisplay.innerHTML);
    calcDisplay.innerHTML = "0"; //on

    minusToggle = true;
    minusButton.classList.add("highlightedorangebutton"); //off

    divideToggle = false;
    divideButton.classList.remove("highlightedorangebutton");
    multiplyToggle = false;
    multiplyButton.classList.remove("highlightedorangebutton");
    plusToggle = false;
    plusButton.classList.remove("highlightedorangebutton");
  } else if (minusToggle == true) {
    //return back number to front
    calcDisplay.innerHTML = backNumber;
    backNumber = "0"; //off

    minusToggle = false;
    minusButton.classList.remove("highlightedorangebutton");
  }
}); //plus

plusButton.addEventListener("click", function (parameter) {
  if (plusToggle == false) {
    //store front number at back
    backNumber = "".concat(calcDisplay.innerHTML);
    calcDisplay.innerHTML = "0"; //on

    plusToggle = true;
    plusButton.classList.add("highlightedorangebutton"); //off

    divideToggle = false;
    divideButton.classList.remove("highlightedorangebutton");
    multiplyToggle = false;
    multiplyButton.classList.remove("highlightedorangebutton");
    minusToggle = false;
    minusButton.classList.remove("highlightedorangebutton");
  } else if (plusToggle == true) {
    //return back number to front
    calcDisplay.innerHTML = backNumber;
    backNumber = "0"; //off

    plusToggle = false;
    plusButton.classList.remove("highlightedorangebutton");
  }
});