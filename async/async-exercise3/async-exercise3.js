// 1. Modify this code to log to console the monetary value of each order for the given user 

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
    if (email === 'techtraining2021@mcmaster.com') {
      let orders = ['order1', 'order2', 'order3'];
      callback(orders);
    } else {
      callback([]);
    }
  }, 1500);
};

// 2. Update the definition of 'getOrderValue' at line 30 to take in a 'callback' parameter 
const getOrderValue = (order) => {
  setTimeout(() => { 
    const value = checkOrderValue(order);
    // 3. Invoke the callback function by calling 'callback();' at line 35.
    // 4. Supply 'value' as a parameter to the 'callback' function.

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
      // 5. log to console the value of each given order by calling the 'getOrderValue()' function 
      // at line 61.
      // 6. supply 'order' as a parameter to the 'getOrderValue()' function at line 61.
      // 7. supply an anonymous callback function as second parameter to the 'getOrderValue()' 
      //    function at line 61.
      // 8. within the callback function, log to console the value for the given order

    });
  });
});

console.log('end');