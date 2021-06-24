"use strict";

//the iphone calculator:
//displays the current number on the screen. if multiple numbers/the dot is pressed, they are added to the end of the current number. dot can only be added once.
//+/- switches the number between positive and negative by removing/adding a minus from the front of it.
//% instantly divides your current number by 100.
// +, -, X and / all create the specific operator (this operator is not shown on screen, but is highlighted on the right). if another number is entered after this operator is used, the first number is stored seperately as the 'back number' and the second number is shown on screen as the new 'front number'. if an operator is used again following this, the first and second numbers are combined by the operator and shown on screen, and entering another number will make that the new front number.
// = will return you a number in the same way that using a second operator would. 
//C makes the front number 0.
var frontnumber = 0;
var backnumber = 0;