// Debugging

function Circle( diameter ){
  this.diameter = diameter;
}

Circle.prototype.Diameter = function() {
  return this.diameter;
};

Circle.prototype.Radius = function() {
  return this.diameter / 2;
};

Circle.prototype.Circumference = function() {
  const radius = this.Radius();
  return Math.PI * 2 * radius;
};

Circle.prototype.Area = function() {
  const radius = this.Radius();
  // check the value of Math.pi in your console
  // check the value of Math.pow('2', radius') in your console
  return Math.PI * Math.pow( radius, 2 );
};

const circle = new Circle('10');

console.log(`Expected Circumference: 31.415m Actual: ${circle.Circumference()}`);
console.log(`Expected Area: 78.539, Actual: ${circle.Area()}`);