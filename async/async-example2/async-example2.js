console.log('start');

const loginUser = (email, password) => {
  setTimeout(() => {
    console.log('login successful');
    return {
      'email': email 
    };
  }, 2000);
};

const user = loginUser('foo@email.com', 12345);
console.log(user.email);

console.log('end');