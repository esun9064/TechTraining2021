
// 1. Open Chrome Dev Tools and navigate to the console tab. 
//    This code should print the Circumference and Area for a Circle with a diameter of "10". 
// 2. In the console tab you will notice an uncaught error in the console output.
// 3. Follow the stack trace in the error output and set a breakpoint at the line referenced 
//    in the stack trace (Line 22). Follow the remaining instructions in this file to fix all
//    the bugs.  

function Circle( diameter ){
  this.diameter = diameter;
}

Circle.prototype.Diameter = function() {
  return this.diameter;
};

Circle.prototype.Radius = function() {
  // 4. Rewrite line 22 to correctly compute the circumference.
  //    (Hint: hover over the "this" variable at line 10 if you get stuck).
  // 5. Remove the breakpoint at line 22, and refresh the page and check the console output to make
  //    sure the Circumference is calculated correctly after your rewrites.
  return diameter / 2;
};

Circle.prototype.Circumference = function() {
  const radius = this.Radius();
  return 2 * Math.PI * radius;
};

Circle.prototype.Area = function() {
  const radius = this.Radius();
  // 6. Set a break point at line 40.
  // 7. Check the value of Math.pi by entering it in your console and pressing "enter"
  // 8. Check the value of Math.pow('2', radius') in your console and pressing "enter"
  // 9. Fix the bugs by rewriting line 40. If you get stuck, google "Math.pow() javascript" 
  //    and open the "W3Schools" or "MDN" link to get more information about the Math.pow() 
  //    javascript method.
  // 10. Remove the break point at line 40 and refresh the page.
  // 11. Check to make sure the Area is computed correctly by reading the console.
  return Math.pi * Math.pow( '2', radius );
};

const circle = new Circle('10');

console.log(`Expected Circumference: 31.415m Actual: ${circle.Circumference()}`);
console.log(`Expected Area: 78.539, Actual: ${circle.Area()}`);

