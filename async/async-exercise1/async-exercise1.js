/**
 * Modify this code to log to console the 
 * monetary value of each order for the given user 
 */

console.log('start');

const loginUser = (email, password, callback) => {
  setTimeout(() => {
    console.log('login successful');

    const user = {
      'email': email 
    };

    callback(user);

  }, 2000);
};

const getOrders = (email, callback) => {
  setTimeout(() => {
    callback(['order1', 'order2', 'order3']);
  }, 1500);
};

const getOrderValue = (order) => {
  // CHANGE this function to take in a callback
  setTimeout(() => { 
    checkOrderValue(order);
  }, 1000);
};

const checkOrderValue = (order) => {
  if (order === 'order1') {
    return '$100';
  } else if (order === 'order2') {
    return '$200';
  } else if (order === 'order3') {
    return '$250';
  }
};

loginUser('foo@email.com', 12345, user => {
  console.log(user.email);
  getOrders(user.email, orders => {
    console.log(orders);
    console.log('printing order values one at a time');
    orders.forEach(order => {
      // INSERT code that logs order value for a single order
    });
  });
});

console.log('end');