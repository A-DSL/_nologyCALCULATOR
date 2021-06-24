"use strict";

//the iphone calculator:
//displays the current number on the screen. if multiple numbers/the dot is pressed, they are added to the end of the current number. dot can only be added once.
//+/- switches the number between positive and negative by removing/adding a minus from the front of it.
//% instantly divides your current number by 100.
// +, -, X and / all create the specific operator (this operator is not shown on screen, but is highlighted on the right). if another number is entered after this operator is used, the first number is stored seperately as the 'back number' and the second number is shown on screen as the new 'front number'. if an operator is used again following this, the first and second numbers are combined by the operator and shown on screen, and entering another number will make that the new front number.
// = will return you a number in the same way that using a second operator would. 
//C makes the front number 0.
//Variables that will hold the numbers.
var frontNumber = 0;
var backNumber = 0; //Variable that keeps track of whether an operator is being used.

var operatorToggle = false; //Variables that keep track of toggles for each operator. Used to control .highlightedorangebutton class assignment.

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
var equalsButton = document.querySelector(".equals");