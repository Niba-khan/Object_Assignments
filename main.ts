//========Assigments===========

//~~~~~~~~~~~Tasks~~~~~~~~~~~

//1. Miles-to-Kilometers Converter (Operators):
/*create a variable named miles and assign a numeric value representing distance in miles.
calculate the equivalent distance in kilometer using the conversion factor (1 miles = 1.60934 kilometer) . you can acheive this by multiplying miles by1.60934.
store the converted distance in kilometer in a variable named kilometers .
use console.logto print a message in the following formal:
the distance of 130 kms isequal to 209.2142 miles*/

//Define the distance miles:
let miles :number =  130;

//Using conversion factor:S
let conversionFactor: number = 1.60934;

//Convert the miles to kilometer:
let kilometer:number = miles * conversionFactor;

//print the message for console.log();
console.log(`The distance of: ${miles}, miles is equal to ${kilometer}`);


/*2.Evaluating a number game:
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
        name : "numbergame",
        type: "input",
        message: "Enter a number"
    }
]);
    //• Compare the entered number with a dynamic number value.
  if(userNumber > dynamicNumber){
    console.log(`User Number: ${userNumber.numbergame} is greater then to Dynamic Number: ${dynamicNumber}`)
  }
  else if(userNumber == dynamicNumber){
        console.log(`User Number: ${userNumber.numbergame} is Equal to Dynamic Number: ${dynamicNumber}`)
  }
  else{
    console.log(`User Number: ${userNumber.numbergame} is less then to Dynamic Number: ${dynamicNumber}`)
  }

 /* 3.Friend checker game:
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
let num3:number = 8;
let num4:number = 5;

//Define the Function;
function Addition(a: number, b:number){
      return a + b;
}
console.log("Result First call Number ", Addition(6,9));
console.log("Result Second Call Number", Addition(4,7));

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
function calculate(num1:number, num2:number,operator: any) {
  switch (operator) {
    case '+':
        return num1 + num2;
    case '-':
        return num1 - num2;
    default:
        ("Invalid operator");
}
}

//Output the result using console.log: 
    console.log("Result of Addition", number1, operator1,number2, "=", `${number1 +  number2}`)

// Update Argument
 console.log("Result of Subtraction", number1, operator2, number2, "=", `${number1 - number2}` )

 /*6.Anonymous functions:
• Set up two different variables with different values.
• Call a function with these variables as arguments and output the result using console.log.
• Create a second call to the function with two more numbers as arguments.*/

//Define different two variable
let num1:number = 8;
let num2:number = 5;

//Define the Function;
function Add(a: number, b:number){
      return a + b;
}
console.log("Result First call Number ", Add(6,9));
console.log("Result Second Call Number", Add(4,7));