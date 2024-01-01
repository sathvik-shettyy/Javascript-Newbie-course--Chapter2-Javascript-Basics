//If else ladder
//The "if-else ladder" is a control structure in JavaScript that allows you to execute a different block of code depending on multiple conditions. It is called a ladder because it consists of multiple "if" and "else" statements arranged in a ladder-like fashion.

//Here is the syntax for an "if-else ladder":

if(condition1) {
  //code to be executed if condition is true 
} else if (condition2) {
  //code to be executed if condition1 is false and condition2 is true
} else if (condition3) {
  //code to be executed if condition1 and condition2 are falde and condition 3 is true 
} ...
else {
  //code to be executed if all condition are false
}

//In this structure, each "if" statement is followed by an optional "else" statement. If the first "if" condition is true, the code in the corresponding block is executed and the rest of the ladder is skipped. If the first "if" condition is false, the second "if" condition is evaluated, and so on. If none of the conditions are true, the code in the "else" block is executed.
//FOR EXAMPLE:

let x = 10;
if (x > 15) {
  console.log("x is greater than 15");
} else if (x > 10) {
  console.log("x is greater than 10 but less than or equal to 15");
} else if (x > 5) {
  console.log("x is greater than 5 but less than or equal to 10");
} else {
  console.log("x is less than or equal to 5");
}