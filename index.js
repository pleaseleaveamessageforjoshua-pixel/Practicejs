const appName = "CoreEngine"; //String: Cannot be reassigned
let activeUsers = 12; // Number: Can change over time

activeUsers = 13; //Valid reassignment
// Error: Assignment to constant variable
// appName = "NewName";

const username = "DevUser";
const level = 5;
const isOnline = true;

// Template literal (Backticks) interpolate variables with ${}
const statusMessage = `User ${username} is at level ${level}.`;
console.log(statusMessage); //Outputs: User DevUser is at level 5

const courseName = 'JavaScript Basics';
let completedLessons = 1;
const summary = `In ${courseName}, I have completed ${completedLessons} lesson.`;
console.log(summary);

const color = "blue.";
//The Template literal:
const message = `My favorite colour is ${'Green'}.`;
console.log(message);

// 1. Define the function with two parameters: a and b
const multiply = (a, b) => { 
const result = a*b;
console.log(`${a} multiplied by ${b} is ${result}`);
};
multiply(5, 4);
multiply(10, 3);

const add = (a, b) => {
const result = a + b;
console.log(`${a} plus ${b} is ${result}`);
};
add(1, 1);
add(3, 5);

const calculateArea = (w, h) => {
const result = (w * h);
console.log(`The area of a rectangle with ${w} and ${h} is ${result}`);
};
calculateArea(4, 5);


