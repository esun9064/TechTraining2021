// 1. Open Chrome Dev Tools and navigate to the console tab. 
//    This code should print out "1, 2, 3" but currently only prints undefined 3 times. 
//    The rest of this exercise starts at Step 2 on line 22.

const printIds = (inpArray) => {
  // 4. Press "F10" or the "Step Over Next Function Call" button to execute
  //    the lines in the printIds() function line by line. Press F10 until the debugger
  //    is paused at line 18.
  for (let i = 0; i < inpArray.length; i++)
  {
    // 5. When the debugger is paused on line 18, Examine the contents of "inpArray" by hovering
    //    over the variable with your mouse in chrome dev tools. While hovered over, expand 
    //    the contents of the elements within the array to find the correct property to use in
    //    the console.log() function call at line 18. Rewrite line 18 so that the program 
    //    correctly prints out "1", "2", "3" instead of "undefined". 
    // 6. Confirm the program is working correctly by refreshing the page and "stepping over" the
    //    lines in the "printIds()" function. Make sure the console prints "1", "2", then "3".
    console.log(inpArray[i].ids);
  }
};

// 2. Set a break point at line 25, and refresh the page in your browser to trigger the breakpoint.
// 3. Press "F11" or the "Step Into Next Function Call" button in chrome dev tools, this will 
//    take you into the "printIds()" function. 
printIds([
  {id: 1},
  {id: 2},
  {id: 3}
]);