/** 
 * Edge cases part 2:
 * 1. Select '55', '-', '5', '='. Result should 
 *    be 50. Now click on '=' again. Result should be
 *    '45', continue to click '=', displayed number
 *    should decrement by 5.
 *    HINT: set a breakpoint in the calculate block 
 *          before you click the '=' key a second time
 *  
 */

// retrieve HTML elements from the DOM
const calculator = document.querySelector('.calculator');
const display = document.querySelector('.calculator-display');
const keys = calculator.querySelector('.calculator-keys');

let firstValue;
let secondValue; 

let previousKeyType;
let operator;

//handle 'click' events where a user clicks on a key in the calculator
keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
  const key = e.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;
  const displayedNum = display.textContent;
  
  // reset the highlighted style on operator keys
  Array.from(key.parentNode.children)
  .forEach(k => k.classList.remove('selected'));

  if (action === 'clear')
  {
    // 'AC' key was clicked, clear state variables
    firstValue = '';
    secondValue = '';
    previousKeyType = '';
    operator = '';
    // reset the display 
    display.textContent = '0';
  }

  if (
      action === 'add' || 
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
    // an operator key was clicked  
    if (
      firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
    ) {
      // perform a calculation if a user clicks
      // a number, an operator, a number, and another operator
      secondValue = displayedNum;
      display.textContent = calculate(firstValue, secondValue, operator);
    }

    // save off the current display value
    // and the fact that an operator was clicked
    firstValue = display.textContent;
    previousKeyType = 'operator';
    operator = action;
    // highlight the operator button
    key.classList.add('selected');
  }

  if (action === 'decimal') {
    // decimal key was clicked
    if (displayedNum.indexOf('.') == -1)
    {
      display.textContent = displayedNum + '.';
      previousKeyType = 'decimal';
    }
    if (previousKeyType === 'operator') {
      // if previous selected key was an operator, reset the display to '0.'
      display.textContent = '0.';
    }
  }

  if (action === 'calculate')
  {
    // equals key was clicked
    if (firstValue)
    {
      // calculate the numeric operation 
      secondValue = displayedNum;
      display.textContent = calculate(firstValue, secondValue, operator);
      previousKeyType = 'calculate';
    }
  }

  if (!action) {
    // a number key was clicked
    if (displayedNum === '0' || previousKeyType === 'operator') {
      // if the calculator shows 0, we want to
      // replace the display with the clicked key
      display.textContent = keyContent;
    }
    else {
      // if the calculator shows a non zero number, 
      // append the clicked key to the displayed number
      display.textContent = displayedNum + keyContent;
    }

    previousKeyType = 'number';
  }
 }
});

/**
 * Calculate the result of the numeric operation using the 
 * supplied numeric values and the supplied operator
 * @param {string} value1 first value using in the calculation
 * @param {string} value2 second value used in the calculation
 * @param {*} operator numeric operation to perform
 * @returns result of numeric operation
 */
const calculate = (value1, value2, operator) => {
  let result = '';

  value1 = parseFloat(value1);
  value2 = parseFloat(value2);
  
  if (operator === 'add') {
    result = value1 + value2;
  } else if (operator === 'subtract') {
    result = value1 - value2;
  } else if (operator === 'multiply') {
    result = value1 * value2;
  } else if (operator === 'divide') {
    result = value1 / value2;
  }

  return result;
};