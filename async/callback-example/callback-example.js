// the function below takes in an argument named 'callback', invokes the 'callback' function and 
// stores the output of the callback function in a constant named 'result'. 
// the function then logs the result of the callback to console. 
const printUsingCallback = (callback) => {
  const result = callback();
  console.log(result);
};

// here we define a callback function to supply as an argument to our 'printUsingCallback' function.
const ourCallbackFunction = () => {
  return 1 + 5;
};

// we can call 'printUsingCallback' just like we would any other function,
// we can and pass in the callback we defined as an argument, just like we would with any other 
// argument to a function.
printUsingCallback(ourCallbackFunction);


// instead of defining a function, we can pass in an 'anonymous' function as an argument
// the below example uses an anonymous function and is equivalent to the call at line 17
printUsingCallback(() => {
  return 1 + 5;
});

// alternative method for creating an anonymous function
printUsingCallback(function() {
  return 1 + 5;
});