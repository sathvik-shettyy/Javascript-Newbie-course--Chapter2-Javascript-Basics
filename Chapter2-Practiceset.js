//Chapter 2- Practice Set
//1)Use logical operator to find whether the age of a person lies between 10 and 20 

// Get the age from the user (you can replace this with actual age input)
var age = prompt("Enter the age:");

// Check if the age is between 10 and 20 (inclusive)
var isAgeBetween10And20 = age >= 10 && age <= 20;

// Display the result
if (isAgeBetween10And20) {
    console.log("The age is between 10 and 20.");
} else {
    console.log("The age is not between 10 and 20.");
}

//2)Demonstrate the use of switch case statements in javascript

// Get a numeric code for the day of the week (1-7)
var dayCode = parseInt(prompt("Enter a day code (1-7):"));

// Initialize a variable to store the day of the week
var day;

// Use switch case to determine the day of the week
switch (dayCode) {
    case 1:
        day = "Sunday";
        break;
    case 2:
        day = "Monday";
        break;
    case 3:
        day = "Tuesday";
        break;
    case 4:
        day = "Wednesday";
        break;
    case 5:
        day = "Thursday";
        break;
    case 6:
        day = "Friday";
        break;
    case 7:
        day = "Saturday";
        break;
    default:
        day = "Invalid day code";
}

// Display the result
console.log(`The day corresponding to code ${dayCode} is ${day}.`);

//3)Write a javascript program to find whether a number is divisible by 2 and 3 
// Get a number from the user (you can replace this with actual number input)
var number = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 2 and 3
var isDivisibleBy2 = number % 2 === 0;
var isDivisibleBy3 = number % 3 === 0;

// Display the result
if (isDivisibleBy2 && isDivisibleBy3) {
    console.log(`${number} is divisible by both 2 and 3.`);
} else {
    console.log(`${number} is not divisible by both 2 and 3.`);
}


//4)write a javascript program to find whether a number is divisible by either 2 or 3 

// Get a number from the user (you can replace this with actual number input)
var number = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 2 or 3
var isDivisibleBy2 = number % 2 === 0;
var isDivisibleBy3 = number % 3 === 0;

// Display the result
if (isDivisibleBy2 || isDivisibleBy3) {
    console.log(`${number} is divisible by either 2 or 3.`);
} else {
    console.log(`${number} is not divisible by either 2 or 3.`);
}

//6)Print "you can drive" or "you canot drive" based on age being greather than 18 using ternary operator

//// Get the age from the user (you can replace this with actual age input)
var age = parseInt(prompt("Enter your age:"));

// Use ternary operator to determine if the person can drive
var canDrive = age > 18 ? "You can drive" : "You cannot drive";

// Display the result
console.log(canDrive);

//Please complete the chapters then move on to doing the practice set
