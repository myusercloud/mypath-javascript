const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Basic math functions
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return b !== 0 ? a / b : "Can't divide by zero! 💥";
}

// Start asking the user for input
rl.question("Enter the first number: ", function (num1) {
  rl.question("Enter the second number: ", function (num2) {
    rl.question("Enter the operator (+, -, *, /): ", function (operator) {
      const number1 = +num1;
      const number2 = +num2;

      let result;

      switch (operator) {
        case "+":
          result = add(number1, number2);
          break;
        case "-":
          result = subtract(number1, number2);
          break;
        case "*":
          result = multiply(number1, number2);
          break;
        case "/":
          result = divide(number1, number2);
          break;
        default:
          console.log("❌ Invalid operator. Try +, -, *, or /");
          rl.close();
          return;
      }

      console.log(`✅ Result: ${result}`);
      rl.close();
    });
  });
});
