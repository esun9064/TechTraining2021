/**
 * Check the console output in dev tools for hints.
 */

 document.addEventListener('DOMContentLoaded', (e) => {
  const button = document.getElementById('count-button');
  const textElement = document.getElementById('text');
  const resultElement = document.getElementById('result');
  const resultContainer = document.getElementById('result-container');

  button.addEventListener('click', e => {
    const text = textElement.innerText;
    const textArray = text.split(' ');
    const count = countFalse(textArray);

    resultContainer.style.visibility = 'visible';
    resultElement.innerText = count;
  });
});

const countFalse = (textArray) => {
  count = 0;
  for (let text of textArray)
  {
    if (text !== false)
    {
       count++;
    }
  }

  return count;
};