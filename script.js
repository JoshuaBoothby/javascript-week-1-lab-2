"use strict";

// Smallest of Three Numbers

function smallestOfThreeNumbers(num1, num2, num3) {
  let smallest = Math.min(num1, num2, num3);
  return smallest;
}
alert(
  smallestOfThreeNumbers(
    prompt("Enter first of 3 numbers and I will tell you the smallest one"),
    prompt("Enter second number"),
    prompt("Enter third number")
  )
);

// Positive, Negative or Zero

function positiveNegativeOrZero(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
alert(positiveNegativeOrZero(prompt("Enter a number and I will tell you if it is positive, negative or zero")));
