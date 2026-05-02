// 9.Exercise: Index Properties

// Create an interface ErrorContainer with an index property that holds error messages.
// Define an object errorBag using the ErrorContainer interface and display the error messages.

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  phonenumber: "Invalid character"
}

console.log(errorBag);
