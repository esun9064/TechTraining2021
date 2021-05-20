// Functions can even take in other functions as paramemters
// These are often called 'callback' functions
const printUsingCallback = (callback) => {
  console.log(callback());
};

const ourCallbackFunction = () => {
  return 1 + 5;
};

printUsingCallback(ourCallbackFunction);

// equivalent to line 12
printUsingCallback(() => {
  return 1 + 5;
});

// equivalent to line 12 and line 15
printUsingCallback(function() {
  return 1 + 5;
});

