"use strict";

// Smallest of Three Numbers

function smallestOfThreeNumbers(num1, num2, num3) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  num3 = parseInt(num3);
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
  num = parseInt(num);
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else if (num === 0) {
    return "Zero";
  } else {
    return "Invalid input. Moving on...";
  }
}
alert(
  positiveNegativeOrZero(
    prompt(
      "Enter a number and I will tell you if it is positive, negative or zero"
    )
  )
);

// Voting Eligibility

function votingEligibility(age) {
  age = parseInt(age);
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}
alert(
  votingEligibility(
    prompt("Enter your age and I will tell you if you are eligible to vote")
  )
);
