//For loops are a common control flow structure in programming that allows you to repeat a block of code a specific number of times.. In JavaScript, there are three types of for loops: the standard for loop, the for-in loop, and the for-of loop.
//STANDARD OF LOOP
//The standard of loop has the following syntax:
for (initialization, condition;increment/decrement ) {
  // code to be executed
}

//The initialization is the statement is executed before the loop starts and typically used to initialize counter variable.The condition is checked at the begining of each iteration and if it is true,the loop continues.if it is false,the loop exits.The increment/decrement statement is executed at the end of each iteration and is used to update the counter variable.
//Here's an example of a standard for loop that counts from 1 to 10:
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//This loop will print number 1 to 10 in console
//FOR-IN LOOP
//The for in loop is used to iterate over the properities of an Object.It has the following syntax
for (variable in Object) {
  //code to be executed 
}

//The variable is assigned the name of each property in the object as the loop iterates over them.Here's an example of FOR-IN LOOP that iterates over the properties of an Object

let person = {
  name: "john"
  age: 30,
  job: "developer"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
//This loop will print the following to the console
//Name:John
//age: 30
//job:developer

//For-of loop
//The for of loop is used to iterate of the values of an iterable object as the loop iterates over them.
//Here's an example of a for of loop that iterates over the elements of an arrey:

let number = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}

//This loop will print the numbers 1 through 5 to the console.

//For loops are a powerful tool in JavaScript and can be used to perform a variety of tasks, such as iterating over arrays and objects, repeating a block of code a specific number of times, and more. With the three types of for loops available in JavaScript, you can choose the one that best fits your needs and use it to write more efficient and effective code.

//WHILE LOOP
//While loop are control flow stucture in prograing that allows you to repeat aa block of code while a certain condition is true in javascript SYNTAX for while loop is:
while (condition) {
  //code to be executed
}
//The condition is checked at the begining of each ateration,and if the condition is true the code block is executed.If it is false the loop exits.Here's an example of while loop that counts from 1 to 10:
let i = 1;

while (i <= 10);{
  console.log(i);
  i++;
}

//This loop will print the numbers 1 through 10 to the console.

//It's important to include a way to update the condition within the loop, otherwise it will become an infinite loop and will run forever. In the example above, the i++ statement increments the value of i by 1 at the end of each iteration, which eventually causes the condition to be false and the loop to exit.

//While loops can be useful when you don't know exactly how many times you need to execute a block of code. For example, you might use a while loop to keep prompting a user for input until they provide a valid response.

let input = "";

while (input !== "yes" && input !== "no") {
  input = prompt("Please enter 'yes' or 'no':");
}

//This loop will keep prompting the user for input until they enter either "yes" or "no".

//While loops can be a useful tool in JavaScript, but it's important to use them with caution. If the condition is never met, the loop will become an infinite loop and will run forever. Make sure to include a way to update the condition and eventually exit the loop to avoid this issue

//FUNCTIONS
//Javascript functions are block of code that can be defined and executed whenever needed.They are curicial part of programing and are used to perform specific tasks or actions
//Functions are often refered to as first class citixens in javascript because they can be treated like any other value such as a  Number OR a String
//This means that they can be assigned to variables, passed as arguments to other functions, and returned as values from functions.

//Here's the basic syntax for defining a function in JavaScript:
function functioname(parameters) {
  //code to be executed
}

//The functioname is a unique identifier for the function,and the parameters are the variables passed to the function when it is called.These parameters act as placeholders for the actual values that are passed to the function when it is executed.

//Here's an example of a simple function that takes a single parameter and returns the square of that number:

function square(x) {
  return x * x;
}

//To call this function, you would simply use the function name followed by the arguments in parentheses:

let result = square(5);  // returns 25

//Functions can also have multiple parameters, like this:

function add (x, y) {
  return x + y;
}

//In this case, the add function takes two parameters, x and y, and returns their sum.

//JavaScript also has a special type of function called an "arrow function," which uses a shorter syntax. Here's the same square a function defined using an arrow function:

const square = (x) => {
  return x * x;
};

//Arrow functions are often used when you want to create a small, one-line function that doesn't require a separate function keyword.

//Functions can be defined inside other functions, which is known as "nesting." This is useful for creating smaller, reusable blocks of code that can be called from within the larger function.

function outerFunction(x) {
  function innerFunction() {
    // code to be executed
  }
  // more code
}

//In this example, the innerFunction is defined inside the outerFunction and can only be called from within that function.

//In addition to these basic concepts, there are many other things you can do with functions in JavaScript, such as passing functions as arguments, creating anonymous functions, and using higher-order functions. These advanced techniques can make your code more efficient and flexible, and are essential tools for any JavaScript developer.