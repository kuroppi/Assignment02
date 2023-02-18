// GET THE TWO NUMBERS FROM THE USER
let firstNumber = parseInt(prompt("Enter the first number"));
let secondNumber = parseInt(prompt("Enter the second number"));

if (firstNumber > secondNumber) {
    document.write(`The first number: ${firstNumber} is larger`);
} else if (secondNumber > firstNumber) {
    document.write(`The second number: ${secondNumber} is larger`);
} else if (firstNumber === secondNumber) {
    document.write("Neither number is larger. They are both equal.");
}