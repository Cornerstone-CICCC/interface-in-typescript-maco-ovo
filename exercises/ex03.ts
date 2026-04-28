// Let's make the Triangle interface reusable from the exercise above.
// - Create a new interface named Shape with the methods to calculate the perimeter and area: calculatePerimeterand calculateArea.
// Implement the Shape interface in news interfaces (extends), like Rectangle, Circle, and Square.
// Make the correct modifications in the methods to calculate the perimeter and area for each shape.


interface Shape {
  calculatePerimeter(): number;
  calculateArea(): number;
}

interface Triangle extends Shape {
  sideA: number;
  sideB: number;
  sideC: number;
  isTriangle(): boolean; 
}

interface Rectangle extends Shape {
  width: number;
  height: number;
}

interface Circle extends Shape {
  radius: number;
}

interface Square extends Shape {
  sideLength: number;
}


const myRectangle: Rectangle = {
  width: 10,
  height: 5,
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  },
  calculateArea() {
    return this.width * this.height;
  }
};

const myCircle: Circle = {
  radius: 7,
  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  },
  calculateArea() {
    return Math.PI * (this.radius ** 2);
  }
};

const mySquare: Square = {
  sideLength: 4,
  calculatePerimeter() {
    return 4 * this.sideLength;
  },
  calculateArea() {
    return this.sideLength ** 2;
  }
};

//Test 
console.log("Rectangle Area:", myRectangle.calculateArea());         
console.log("Circle Perimeter:", myCircle.calculatePerimeter());      
console.log("Square Area:", mySquare.calculateArea());                