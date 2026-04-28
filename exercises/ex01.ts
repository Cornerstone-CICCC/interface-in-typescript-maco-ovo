/*
1. Exercise: Creating an Interface for a Triangle

   - Create an interface named `Triangle` with properties: `sideA`, `sideB`, `sideC`. All the properties should be the type `number`.
   - Add three methods to the interface: 
   >`calculatePerimeter`, `calculateArea`, and `isTriangle`.
   - Define a variable using the interface `Triangle` and assign it an object.
   - Test the methods of the interface - reference the example below.
*/

interface Triangle {
  sideA: number;
  sideB: number;
  sideC: number;
  calculatePerimeter(): number;
  calculateArea(): number;
  isTriangle(): boolean;
}

const myTriangle: Triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 5,
  
  calculatePerimeter() {
    return this.sideA + this.sideB + this.sideC;
  },
  
  calculateArea() {
    const s = this.calculatePerimeter() / 2;
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
  },
  
  isTriangle() {
    return (
      this.sideA + this.sideB > this.sideC &&
      this.sideA + this.sideC > this.sideB &&
      this.sideB + this.sideC > this.sideA
    );
  }
};

console.log(myTriangle.calculatePerimeter()); // 12
console.log(myTriangle.calculateArea()); // 6
console.log(myTriangle.isTriangle()); // true
