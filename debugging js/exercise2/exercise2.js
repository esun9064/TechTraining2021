
// 1. Open Chrome Dev Tools and navigate to the console tab. 
//    This code should print the Circumference and Area for a Circle with a diameter of "10". 
// 2. You will notice that the "actual" circumference and "actual" area logged at
//    lines 32 and line 33 are incorrect.



console.log(`Expected Circumference: 31.415m Actual: ${getCircumference(10)}`);
console.log(`Expected Area: 78.539, Actual: ${getArea(10)}`);

// 3. In the sources tab of Chrome Dev Tools, set a breakpoint at line 15 inside the 
//    getCircumference function
function getCircumference(diameter) {
  const radius = getRadius(diameter);
  // 4. Reload the page and pause on the breakpoint at line 15, press the "F10" or the 
  //    "Step Through Next Function Call" button in chrome dev tools, this will execute line 15 
  //    and pause the program at line 21. 
  // 5. In chrome dev tools, use your mouse to hover over the 'radius' variable at line 15. 
  //    This will allow you to examine the output returned by the getRadius() function.  
  return 2 * Math.PI * radius;
}

function getArea(diameter) {
  const radius = getRadius(diameter);
  // 6. Set a break point at line 35.
  // 7. Check the value of Math.pi by entering "Math.pi" (without quotes) into the console 
  //    in chrome dev tools and pressing "enter"
  // 8. Check the value of Math.pow('2', radius') in your console in chrome dev tools
  // 9. Fix the bugs by rewriting line 35. If you get stuck, google "Math.pow() javascript" 
  //    and open the "W3Schools" or "MDN" link to get more information about the Math.pow() 
  //    javascript method and its expected input parameters
  // 10. Remove the break point at line 35, save your changes, and refresh the page.
  // 11. Check to make sure the Area is computed correctly by reading the console.
  return Math.pi * Math.pow( '2', radius );
}

function getRadius(diameter) {
  return diameter;
}