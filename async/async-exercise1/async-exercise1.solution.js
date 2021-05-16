// 1. Open Chrome Dev Tools and inspect the console output. Notice how the console shows an 
//    an error related to line 19 where the "user" variable is undefined. This is due to 
//    the fact that one can not return values from an async function such as setTimeout()


const loginUser = (callback) => {
  setTimeout(() => {
    const email = 'techtraining2021@mcmaster.com';
    console.log('login successful');
    // 2. Replace the return statement at lines 11-13 with: 'callback(email);'
    callback(email);
  }, 2000);
};

loginUser((email) => {
  console.log(email);
});
console.log("this will print before the login completes");


// 3. Rewrite loginUser() on line 17 to take in an anonymous function: `(email) => {}` 
// 4. Within the anonymous function's body, 'console.log' the 'email'
// 6. Remove the 'const user =' from line 17
// 6. Refresh the page and check that the email is correctly logged to console
