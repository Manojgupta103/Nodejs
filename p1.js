// Problems
// Problem 1: Conditional Statements (if-else)
// You run a movie theater. and you want to Offer disocunts based on a person's age.
// Write a JavaScript program that asks the user for their age and then displays a message:
// - If the age is less than 18, display •you get a 20% discount!•
// - If the age is between 18 and 65 (inclusive), display •Normal ticket price applies. •
// - If the age is 65 or Older, display •you get a 30% senior discount!'

var prompt = require("prompt-sync")();
var age = prompt("Enter your age: ");

if (age < 18) {
  console.log("you get a 20% discount!");
} else if (age >= 18 && age <= 65) {
  console.log("Normal ticket price applies.");
} else if (age > 65) {
  console.log("you get a 30% senior discount!");
}

// Problem 2: Variable" (var and const)
// Create a JavaSaipt program to calculate the area of a rectangle.
// Ask the user for the length and width of the rectangle and store them in variables.
// Calculate and display the area using the formula: area = length * width'.

var length = prompt("Enter the Length: ");
var width = prompt("Enter the Width: ");

const area = length * width;

console.log("area:" + area + "m");

// Problem 3: Objects and Properties
// You're creating an online store. Define a JavaScript Object named "product" with the following Properties:
// - name (string)
// - price (number)
// - inStOCk (boolean)
// Create at least three products using your Object template and display their details using console. log.

let product = {
  name: "",
  price: 0,
  inStock: false,
};

let product1 = {
  name: "Laptop",
  price: 999,
  inStock: true,
};

let product2 = {
  name: "Smartphone",
  price: 699,
  inStock: false,
};

let product3 = {
  name: "Headphones",
  price: 149,
  inStock: true,
};

console.log("Product 1:");
console.log("Name:", product1.name);
console.log("Price:", product1.price);
console.log("In Stock:", product1.inStock ? "Yes" : "No");
console.log();

console.log("Product 2:");
console.log("Name:", product2.name);
console.log("Price:", product2.price);
console.log("In Stock:", product2.inStock ? "Yes" : "No");
console.log();

console.log("Product 3:");
console.log("Name:", product3.name);
console.log("Price:", product3.price);
console.log("In Stock:", product3.inStock ? "Yes" : "No");
console.log();

// Problem 4: Arrays
// You're organizing a party and want to keep track Of the guest list.
// Create an array called "guestList" and add the names of at least five guests.
// Then, write a program that checks if agiven name is on the guest list.
// If the name is found. display —welcome to the party, "[name]!",
// otherwise. display •Sorry. you're not on the guest list.

let guestList = ["John", "Jane", "Jack", "Jill", "James"];
var prompt = require("prompt-sync")();
let name = prompt("Enter your name: ");

if (guestList.includes(name)) {
  console.log("Welcome to the party, " + name + "!");
} else {
  console.log("Sorry. you're not on the guest list.");
}

// Problem 5: JSON (JavaScript Object Notation)
// You're working on a weather app. Create a JSON object representing the weather forecast for
// a specific day. Include properties like •date." •temperature. • •conditions.• and •humidity.-
// Display the information using console.log

let weatherForecast = {
  date: "2022-01-01",
  temperature: "35",
  condition: "sunny",
  humidity: "60",
};

console.log(weatherForecast);

// Remember to encourage your students to experiment and think creatively while solving these
// problems, They can use the concepts youve taught them to come up with their Own solutions.
// This will not only help solidify tileir understanding but also foster their problem-solving skills in
// JavaScript.
