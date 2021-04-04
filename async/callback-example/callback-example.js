// simple call back

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
