console.log('start');

const loginUser = (email, password, callback) => {
  setTimeout(() => {
    console.log('login successful');
    callback({'email': email});
  }, 2000);
};

loginUser('foo@email.com', 12345, user => {
  console.log(user.email);
});

console.log('end');