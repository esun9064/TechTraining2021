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

loginUser('foo@email.com', 12345, user => {
  console.log(user.email);
  getOrders(user.email, orders => {
    console.log(orders);
  });
});

console.log('end');