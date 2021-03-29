// initialize a promise object, this object takes in an
// anonymous function with some predefined work. In this
// case a setTimeout. 
let examplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      // if the async work was successful, resolve the promise and return 
      // a result, in this case 'success'
      resolve('success!');
    } else {
      // if the async work failed, reject the promise and return a result
      reject('fail!');
    }
  });
});

// define a function to handle the successful resolution of the promise
const onFulfilled = (result) => {
  console.log(result);
};

// define a function to handle rejection of the promise
const onRejected = (result) => {
  alert(result);
};

// .then() allows us to execute callbacks when the promise either fulfills or rejects 
examplePromise.then(onFulfilled, onRejected);


// examplePromise.then(result => {
//   console.log(result);
// }, result => {
//   alert(result);
// });

// examplePromise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(result => {
//     alert(result);
//   });

