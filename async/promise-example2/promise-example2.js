// LOGIN via callbacks
const loginUser = (email, password, callback) => {
  setTimeout(() => {
    console.log('login successful');

    const user = {
      'email': email
    };

    callback(user);
  }, 1000);
};

const getOrders = (email, callback) => {
  setTimeout(() => {
    callback(['order1', 'order2', 'order3']);
  }, 500);
};

// via call backs
loginUser('foo@email.com', 12345, user => {
  console.log('via callbacks');
  console.log(user.email);
  getOrders(user.email, orders => {
    console.log(orders);
    getOrders(user.email, orders => {
      console.log(orders);
      getOrders(user.email, orders => {
        console.log(orders);
        getOrders(user.email, orders => {
          console.log(orders);
        });
      });
    });
  });
});








// // LOGIN via promises
// const loginViaPromise = (email, password) => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('login successful');

//       const user = {
//         'email': email
//       };

//       resolve(user);
//     }, 1000);
//   });

//   return promise;
// };

// const getOrdersViaPromise = (email) => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({email: email, orders: ['order1', 'order2', 'order3']});
//     }, 500);
//   });
//   return promise;
// };

// // via promises

// let loginPromise = loginViaPromise('foo@email.com', 12345);
// loginPromise
//   .then(user => {
//     console.log('via promises');
//     console.log(user.email);
//     return getOrdersViaPromise(user.email);
//   })
//   .then(({email, orders}) => {
//     console.log(orders);
//     return getOrdersViaPromise(email);
//   })
//   .then(({email, orders}) => {
//     console.log(orders);
//     return getOrdersViaPromise(email);
//   })
//   .then(({email, orders}) => {
//     console.log(orders);
//     return getOrdersViaPromise(email);
//   });

