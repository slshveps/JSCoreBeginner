"use strict";

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(5, 10);

const area = rectangle.calculateArea();
const perimeter = rectangle.calculatePerimeter();

console.log("Area of the rectangle:", area);
console.log("Perimeter of the rectangle:", perimeter);
