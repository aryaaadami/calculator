// script.js

let currentInput = ""; // To store the input expression
let lastResult = null; // To store the result of the last calculation

// Function to append characters to the display
function appendToDisplay(value) {
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

// Function to clear the display
function clearDisplay() {
  currentInput = "";
  document.getElementById("display").value = "";
}

// Function to erase the last character in the input
function eraseLast() {
  currentInput = currentInput.slice(0, -1); // Remove the last character
  document.getElementById("display").value = currentInput;
}

// Function to calculate the result
function calculate() {
  try {
    // Evaluate the expression in the input field
    let result = eval(currentInput);
    if (typeof result === "number") {
      lastResult = result;
      currentInput = result.toString();
      document.getElementById("display").value = currentInput;
    }
  } catch (e) {
    document.getElementById("display").value = "Error";
    currentInput = "";
  }
}
