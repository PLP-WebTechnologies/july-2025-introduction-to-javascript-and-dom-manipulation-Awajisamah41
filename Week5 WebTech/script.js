/**
 * @fileoverview This script demonstrates fundamental JavaScript concepts including
 * variable declarations, conditionals, custom functions, loops, and DOM interactions.
 */

// ====================================================================
// Part 1: Variable Declarations and Conditionals
// ====================================================================

// Declare a constant for a fixed value
const maxAttempts = 3;

// Declare a variable whose value can change
let userScore = 0;

// Declare a string variable
let userStatus = "pending";

// A conditional statement to check the user's score and update their status
if (userScore > 90) {
  userStatus = "excellent";
} else if (userScore > 70) {
  userStatus = "good";
} else {
  userStatus = "needs improvement";
}

console.log(`Initial User Status: ${userStatus}`);

// ====================================================================
// Part 2: Custom Functions
// ====================================================================

/**
 * Calculates the final score by adding a bonus.
 * @param {number} baseScore The user's initial score.
 * @param {number} bonusPoints The points to add as a bonus.
 * @returns {number} The final calculated score.
 */
function calculateFinalScore(baseScore, bonusPoints) {
  return baseScore + bonusPoints;
}

/**
 * Displays a personalized greeting message in the console.
 * @param {string} userName The name of the user.
 */
function greetUser(userName) {
  console.log(`Hello, ${userName}! Welcome back.`);
}

// Example usage of the custom functions
userScore = calculateFinalScore(userScore, 15);
greetUser("Alex");
console.log(`Updated User Score: ${userScore}`);


// ====================================================================
// Part 3: Loop Examples
// ====================================================================

// Example 1: For loop
// This loop iterates through a list of items and logs each one.
const items = ["apple", "banana", "cherry", "date"];
console.log("\nLooping through items with a for loop:");
for (let i = 0; i < items.length; i++) {
  console.log(`- Item ${i + 1}: ${items[i]}`);
}

// Example 2: While loop
// This loop runs as long as a condition is true.
let countdown = 5;
console.log("\nCounting down with a while loop:");
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}


// ====================================================================
// Part 4: DOM Interactions
// (This code assumes a basic HTML file with an element with id="message")
// ====================================================================

document.addEventListener("DOMContentLoaded", () => {

  // DOM Interaction 1: Get an element and change its text content
  const messageElement = document.getElementById("message");
  if (messageElement) {
    messageElement.textContent = "This text was set by JavaScript!";
  }

  // DOM Interaction 2: Add an event listener to a button
  const myButton = document.getElementById("myButton");
  if (myButton) {
    myButton.addEventListener("click", () => {
      // You can call functions or perform other actions here
      alert("Button was clicked!");
    });
  }

  // DOM Interaction 3: Create a new element and append it to the body
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "This is a new paragraph created by JS.";
  newParagraph.style.color = "blue";
  document.body.appendChild(newParagraph);
});
