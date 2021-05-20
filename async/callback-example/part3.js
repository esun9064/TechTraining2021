// Functions can take in any kind of input parameter. 
// (Strings, numbers, arrays, objects, etc)

const printUsingSuppliedInput = (input) => {
  console.log(input);
};

printUsingSuppliedInput(1 + 5);

// Functions can even take in other functions as paramemters
// These are often called 'callback' functions
const printUsingCallback = (callback) => {
  console.log(callback());
};

const ourCallbackFunction = () => {
  return 1 + 5;
};

printUsingCallback(ourCallbackFunction);