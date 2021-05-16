// Functions can even take in other functions as paramemters
// These are often called 'callback' functions
const printUsingCallback = (callback) => {
  console.log('in function: printSomeStuff');
  callback();
};

const ourCallbackFunction = () => {
  console.log(1 + 5);
};

printUsingCallback(ourCallbackFunction);

// equivalent to line 12
printUsingCallback(() => {
  console.log(1 + 5);
});

// equivalent to line 12 and line 15
printUsingCallback(function() {
  console.log(1 + 5);
});

