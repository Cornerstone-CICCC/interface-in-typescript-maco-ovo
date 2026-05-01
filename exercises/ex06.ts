// 6.Exercise: Using Type Guards

// Define a union type StringOrNumber that includes string and number.
// Write a function printInfo that prints information based on the type of the argument (string or number).
// Call the function with both a string and a number.

type StringOrNumber = string | number;

function printInfo(text: StringOrNumber) {
  return `The type of "${text}" is ${typeof text}`;
}

console.log(printInfo(1234));
console.log(printInfo('Hello World'));