// simple call back

const printAndThenDoSomeStuff = (callback) => {
  console.log('in function: printSomeStuff');
  console.log('print some stuff');

  callback();
};

const doSomeStuff = () => {
  console.log(1 + 5);
};

printAndThenDoSomeStuff(doSomeStuff);

printAndThenDoSomeStuff(() => {
  console.log(1 + 5);
});
