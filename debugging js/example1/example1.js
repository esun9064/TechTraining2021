const log = (message) => {
  console.log(message);
};

const printArray = (arr) => {
  for (let i = 0; i < arr.length; i++)
  {
    log(arr[i]);
  }
};

let a = [1, 2, 3, 4];
printArray(a);
printArray([1, 2, 3, 4]);
printArray();
printArray(1, 2, 3, 4);
printArray({1: 1, 2: 2, 3: 3, 4: 4});