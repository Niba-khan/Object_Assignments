//Assigment no1
/*create a variable named miles and assign a numeric value representing distance in miles.
calculate the equivalent distance in kilometer using the conversion factor (1 miles = 1.60934 kilometer) . you can acheive this by multiplying miles by1.60934.
store the converted distance in kilometer in a variable named kilometers .
use console.logto print a message in the following formal:
the distance of 130 kms isequal to 209.2142 miles*/
//Define the distance miles:
let miles = 130;
//Using conversion factor:
let conversionFactor = 1.60934;
//Convert the miles to kilometer:
let kilometer = miles * conversionFactor;
//print the message for console.log();
console.log(`The distance of: ${miles}, miles is equal to ${kilometer}`);
//Assigment No2:
/*.Evaluating a number game:
• Prompt the user to enter a number.
• Compare the entered number with a dynamic number value.
• Output the result indicating whether the entered number is greater than, equal to, or less
than the dynamic number value.*/
//Evaluating Number game:
import inquirer from "inquirer";
//Generate a Dynamic number:
let dynamicNumber = Math.floor(Math.random() * 20 + 1);
//User input
let userNumber = await inquirer.prompt([
    {
        name: "numbergame",
        type: "input",
        message: "Enter a number"
    }
]);
//• Compare the entered number with a dynamic number value.
if (userNumber > dynamicNumber) {
    console.log(`User Number: ${userNumber.numbergame} is greater then to Dynamic Number: ${dynamicNumber}`);
}
else if (userNumber == dynamicNumber) {
    console.log(`User Number: ${userNumber.numbergame} is Equal to Dynamic Number: ${dynamicNumber}`);
}
else {
    console.log(`User Number: ${userNumber.numbergame} is less then to Dynamic Number: ${dynamicNumber}`);
}
/*Assigment 3:
3.Friend checker game:
• Prompt the user to enter a name.
• Use a switch statement to check if the entered name is a known friend.
• Output a confirmation message if the name is known, otherwise output a default
response.*/
//Friend Checker Game:
//user input:
let myFrnd = await inquirer.prompt([{
        name: "name",
        type: "string",
        message: ("Enter a friend name"),
    }]);
//Using for switch case statement:
switch (myFrnd.name) {
    case "Niba":
    case "Sonia":
    case "Sumaira":
    case "kinza":
    case "Maha":
        console.log(`${myFrnd.name} is a known frnd`);
        break;
    default:
        console.log(`${myFrnd.name} is not a known frnd`);
}
/*4.Functions:
• Set up two different variables with different values.
• Call a function with these variables as arguments and output the result using console.log.
• Create a second call to the function with two more numbers as arguments.*/
//Define different two variable
let num1 = 8;
let num2 = 5;
//Define the Function;
function Add(a, b) {
    return a + b;
}
console.log("Result First call Number ", Add(6, 9));
console.log("Result for Second Call Number", Add(4, 7));
/*4.Anonymous functions:
• Assign a function expression to a variable, with one parameter that outputs the provided
argument to the console.
• Pass an argument into the function.
• Create the same function as a normal function declaration.*/
//Anonymous Function
let message1 = function (message) {
    console.log(message);
};
message1("Hello World");
//Simple Function:
function message2(messages) {
    console.log(messages);
}
message2("Hello I am Niba khan");
/*.Calculator project using function:
• Set up two variables containing number values.
• Set up a variable to hold an operator (+ or -).
• Create a function that takes two numbers and an operator as parameters, performs the
corresponding operation, and returns the result.
• Call the function with the variables and operator, and output the result using console.log.
• Update the operator value and call the function again with the updated arguments.*/
// Set up two variables containing number values
let number1 = 10;
let number2 = 25;
// Set up a variable to hold an operators(+ or -)
let operator1 = '+';
let operator2 = '-';
// Function to perform arithmetic operations
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        default:
            ("Invalid operator");
    }
}
// Call the function with the variables and operator, and output the result using console.log
console.log("Result of Addition", number1, operator1, number2, "=", `${number1 + number2}`);
// Call the function again with the updated arguments
console.log("Result of Subtraction", number1, operator2, number2, "=", `${number1 - number2}`);
