// 1. Open Chrome Dev Tools and inspect the console output. Notice how the console shows an 
//    an error related to line 22 where the "user" variable is undefined. This is due to 
//    the fact that one can not return values from an async function such as setTimeout()
const loginUserSync = () => {
  const email = 'techtraining2021@mcmaster.com';
  wait(2000);
  return {'email': email};
};

const loginUserAsync = (callback) => {
  setTimeout(() => {
    const email = 'techtraining2021@mcmaster.com';
    console.log('login successful');
    // 2. Replace the return statement at lines 11-13 with: 'callback(email);'
    return {
      'email': email
    };
  }, 2000);
};

let user = loginUserSync();
user = loginUserAsync();
console.log("this will print before the login completes");
console.log(user.email);


// 3. Comment out line 21, rewrite loginUserAsync() on line 22 to take in an anonymous function: `(email) => {}` 
// 4. Within the anonymous function's body, add a line to 'console.log' the 'email'
// 5. Remove the 'user =' from line 22
// 6. Delete line 24, and save your changes.
// 7. Refresh the page and check that the email is correctly logged to console



function wait(ms) {
  // don't ever actually do this
  var start = Date.now(),
      now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}