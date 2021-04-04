/** 
 * Simple calculator program with addition operator.
 * Find the bug that is preventing the calculator from 
 * displaying numeric values when a number key is pressed.
 * Use chrome dev tools to set a break point.
 */

document.addEventListener('DOMContentLoaded', (e) => {
  // retrieve HTML elements from the DOM
  const calculator = document.querySelector('.calculator');
  const display = document.querySelector('.calculator-display');
  const keys = calculator.querySelector('.calculator-keys');

  const state = initializeState();

  //handle 'click' events where a user clicks on a key in the calculator
  keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
      const key = e.target;
      const action = key.dataset.action;
      
      removeSelectedStyle(key);

      switch(action)
      {
        case 'clear':
          clear(state, display);
          break;
        case 'add':
        case 'subtract':
        case 'multiply':
        case 'divide':
          selectOperator(state, key, action, display);
          break;
        case 'decimal':
          addDecimal(state, display);
          break;
        case 'calculate':
          selectCalculate(state, display);
          break;
        default:
          selectNumber(state, key, display);
          break;
      }
    }
  });
});

/** 
 * Create object to encapsulate current 
 * state of the calculator
 * @returns state object
 */ 
const initializeState = () => {
  return {
    firstValue: '',
    secondVaue: '',
    previousKeyType: '',
    operator: ''
  };
};

/**
 * Clear the selected style from all keys
 * @param {HTMLElement} key target key
 */
const removeSelectedStyle = (key) =>
{
  // reset the highlighted style on operator keys
  Array.from(key.parentNode.children)
  .forEach(k => k.classList.remove('selected'));
};

/**
 * Clear state of the calculator
 * @param {state} state calculator state
 * @param {HTMLElement} display calculator display element  
 */
const clear = (state, display) => {
  // clear state variables
  state.firstValue = '';
  state.secondValue = '';
  state.previousKeyType = '';
  state.operator = '';
  // reset the display 
  display.textContent = '0';
};

/**
 * Handle selection of an operator key.
 * @param {state} state calculator state
 * @param {HTMLElement} key selected key
 * @param {string} operator numeric operation
 * @param {HTMLElement} display calculator display element
 */
const selectOperator = (state, key, operator, display) => {
  const displayedNum = display.textContent;

  if (
    state.firstValue &&
    state.operator &&
    state.previousKeyType !== 'operator' &&
    state.previousKeyType !== 'calculate'
  ) {
    // if a number, an operator, and another number 
    // were previously all previously selected; go 
    // ahead an calculate the result using the 
    // previously selected operator
    state.secondValue = displayedNum;
    display.textContent = calculate(state.firstValue, state.secondValue, state.operator);
  }

  // save off the current display value
  // and the fact that an operator was clicked
  state.firstValue = displayedNum;
  state.previousKeyType = 'operator';
  state.operator = operator;
  // highlight the operator button
  key.classList.add('selected');
};

/**
 * add decimal to calculator display 
 * @param {state} state calculator state
 * @param {HTMLElement} display calculator display element
 */
const addDecimal = (state, display) => {
  const displayedNum = display.textContent;

  if (displayedNum.indexOf('.') == -1)
  {
    display.textContent = displayedNum + '.';
    state.previousKeyType = 'decimal';
  }
  if (state.previousKeyType === 'operator') {
    // if previous selected key was an operator, reset the display to '0.'
    display.textContent = '0.';
  }
};

/**
 * 
 * @param {state} state calculator state 
 * @param {HTMLElement} key selected key 
 * @param {HTMLElement} display calculator display element
 */
const selectNumber = (state, key, display) => {
  const keyContent = key.textContent;
  let displayedNum = display.textContent;

  if (displayedNum === '0' || state.previousKeyType === 'operator') {
    // if the calculator shows 0, we want to
    // replace the display with the clicked key
    displayedNum = keyContent;
  }
  else {
    // if the calculator shows a non zero number, 
    // append the clicked key to the displayed number
    displayedNum = displayedNum + keyContent;
  }

  state.previousKeyType = 'number';
};

/**
 * Handle a click event on the '=' button
 * @param {state} state calculator state
 * @param {HTMLElement} display calculator display element
 */
const selectCalculate = (state, display) => {
  const displayedNum = display.textContent;

  if (state.firstValue)
  {
    // calculate the numeric operation 
    state.secondValue = displayedNum;

    display.textContent = calculate(parseFloat(state.firstValue), parseFloat(state.secondValue), state.operator);
    state.previousKeyType = 'calculate';
  }
};

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

  value1 = parseInt(value1);
  value2 = parseInt(value2);

  if (operator === 'add') {
    result = value1 + value2;
  }

  return result;
};