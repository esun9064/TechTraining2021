/**
 * Exercise 1 
 * Declare a function that computes the sum of squares of a numeric vector. 
 * 
 * The function should be called 
 * "calculateSumOfSquares"
 * 
 * The function should take an array of numbers 
 * as an input parameter
 * 
 * The function should check to see if the input parameter is an array. 
 * If the input parameter is an array, then the function should return the sum of squares 
 * If the input parameter is NOT an array, then the function should return 0
 * HINT: use the Array.isArray(inputArray) method to check if the input paramemter is an array 
 * 
 * After you define the function, remove the "//" from line 19
 */
 const calculateSumOfSquares = (vector) => {
  var sum = 0;
  
  if (Array.isArray(vector)) {
    for (var i = 0; i < vector.length; i++) {
      sum += vector[i] * vector[i];
    }
  }

  return sum;
};

window.calculateSumOfSquares = calculateSumOfSquares;

