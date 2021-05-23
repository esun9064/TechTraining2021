// 1. Open Chrome Dev Tools and navigate to the console tab. 
//    This code should print out "1, 2, 3" but currently only prints 'undefined' 3 times. 
// 2. Navigate to the sources tab in Chrome Dev Tools
// 3. Set a break point at line 7 and refresh the page in your browser to trigger the breakpoint.
// 4. Press "F11" or the "Step Into Next Function Call" button in chrome dev tools, this will 
//    take you into the "printIds()" function. 
printIds([
  {id: 1},
  {id: 2},
  {id: 3}
]);

function printIds(inpArray) {
  // 5. Press "F10" or the "Step Over Next Function Call" button to execute
  //    the lines in the printIds() function line by line. Press F10 until the debugger
  //    is paused at line 26.
  for (let i = 0; i < inpArray.length; i++)
  {
    // 6. When the debugger is paused on line 26, Examine the contents of "inpArray" by hovering
    //    over the variable with your mouse in chrome dev tools. 
    // 7. While hovered over 'inpArray', expand the contents of the elements within the 
    //    array to find the correct property to use in the 'console.log()' at line 26. 
    // 8. Rewrite line 26 so that the program correctly prints out "1", "2", and then "3" 
    // 9. Confirm the program is working correctly by refreshing the page and "stepping over" the
    //    lines in the "printIds()" function. Make sure the console prints "1", "2", then "3".
    console.log(inpArray[i].id);
  }
}