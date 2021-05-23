// In this exercise we will print out the contents of the 'teams' array using callbacks
let teams = ['bears', 'bulls', 'blackhawks', 'cubs', 'white sox'];

Array.prototype.forEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

// 1. define a new function named print
//    this function will take in a parameter 'team'
// 2. have this function log the value of the 'team' parameter to the console 
function print(team) {

}

// 3. supply the print function that we created as a parameter to .forEach()
teams.forEach();

// 4. In chrome dev tools, set a breakpoint at lines 18, and line 6. 
//    Reload the page, the page should pause on our break point at line 18. 
// 5. Click the "resume" button or press "F12" on your keyboard to advance the program 
//    to our breakpoint within the forEach function at line 6. 
// 6. With the program paused on line 6, click the "Step Into Next Function Call" button or press 
//    "F11" on your keyboard to step into the call back function AKA the print fuction we defined.
// 7. Continue execution of the rest of the program by clicking the "Resume" button. The program 
//    should return an error because the call to .forEach() at line 31 is missing a callback function. 

// 8. supply an anonymous callback function to .forEach(), the anonymous function should behave
//    just like the 'print" function on line 18, and log to console the current team's name
teams.forEach();

// 9. Reload the page, open chrome dev tools and check the console tab, the program should 
//    print the contents of the teams array a second time

// 10. Extend the Array.prototype.forEach function to also pass the current index of the array to the 
//     callback function. 
// 11. Update the print function to log each item in the array and the index of the item 
// 12. Update the anonymouse function at line 31 to log each item in the array along with the index 
//     of the item. 