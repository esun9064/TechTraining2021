/**
 * Check the console output in dev tools for hints.
 */

const printArray = (testArray) => {
  for (let i = 0; i <= testArray.length; i++) {
    console.log(testArray[i].text);
  }
};

testArray = [
  {text: 'Welcome'},
  {text: 'to'},
  {text: 'tech'},
  {text: 'training'},
  {text: '2021!'}
];
printArray(testArray);

testArray = [
  {text: 'todays'},
  {text: 'lesson'},
  {text: 'is'},
  {text: 'on'},
  {text: 'javascript!'}
];
printArray(testArray);