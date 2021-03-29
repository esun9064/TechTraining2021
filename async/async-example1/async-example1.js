const printSomeStuff = () => {
  console.log('in function: printSomeStuff');
  console.log('print some stuff');
};

const printTimeout = () => {
  console.log('We are in the second timeout');
};

console.log('start');

// setTimeout(callback, timeInterval)
setTimeout(() => {
  console.log('We are in a timeout');
}, 2000);

setTimeout(printTimeout, 2500);

printSomeStuff();

console.log('end');
