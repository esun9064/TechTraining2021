// Functions can take in any kind of input parameter. 
// (Strings, numbers, arrays, objects, etc)

const printUsingSuppliedInput = (input) => {
  console.log(inputText);
};

printUsingSuppliedInput(1 + 5);

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

// equivalent to line 16
printUsingCallback(() => {
  console.log(1 + 5);
});

// equivalent to line 16 and line 19
printUsingCallback(function() {
  console.log(1 + 5);
});

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});