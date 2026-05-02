// 8.Exercise: Type Casting

// Create an input element with id user-input in HTML.
// Use type casting to access and modify the value of the input element.

const userInputElement = <HTMLInputElement>document.getElementById('user-input');


userInputElement.value = "Hello from TS!";