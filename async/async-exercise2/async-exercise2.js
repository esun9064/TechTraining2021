// 1. Modify the code to asynchronously log the orders for the given user.
const loginUser = (callback) => {
  setTimeout(() => {
    const email = 'techtraining2021@mcmaster.com';
    console.log('login successful');
    callback(email);
  }, 2000);
};

const getOrders = (email, callback) => {
  setTimeout(() => {
    if (email === 'techtraining2021@mcmaster.com') {
      let orders = ['order1', 'order2', 'order3'];
      // 2. At line 15, supply the 'orders' array as a parameter to the callback() function.
      callback();
    } else {
      callback([]);
    }
  }, 1500);
};

loginUser(email => {
  // 3. Call the 'getOrders()' function at line 27. Supply an 'email' and an anonymous '(orders) => {}' 
  //    callback function as paramemters to the getOrders() function.
  // 4. Within the anonymous '(orders) => {}' callback function, log to console the 'orders' array.
  // 5. Refresh the page and check that the orders array is correctly logged to console

});