// simple call back

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});

const printAndThenDoSomeStuff = (callback) => {
  console.log('in function: printSomeStuff');
  console.log('print some stuff');

  callback();
};

const doSomething = () => {
  console.log(1 + 5);
};

printAndThenDoSomeStuff(doSomething);

printAndThenDoSomeStuff(() => {
  console.log(1 + 5);
});
