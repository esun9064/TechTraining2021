/**
 * We can make our code easier to understand by creating a
 * reusable 'sendRequest' method for sending HTTP requests. 
 * Implement the sendRequest method defined at the end of this file.
 */
document.addEventListener('DOMContentLoaded', (e) => {
  let catElem = document.getElementById('cat-fact');
  let dogElem = document.getElementById('dog-fact');
  // REPLACE with sendRequest()
  sendRequest(`https://esun9064-tt21-cat-facts.herokuapp.com//api/v1/facts`, 'GET', 'json', (response) => {
    catElem.innerText = response.text;

  }, (response) => {
    console.log('response failed');
  });
  // REPLACE with sendRequest()
  sendRequest(`https://esun9064-tt21-cat-facts.herokuapp.com//api/v1/facts?animal_type=dog`, 'GET', 'json', (response) => {
    dogElem.innerText = response.text;

  }, (response) => {
    console.log('response failed');
  });
});

/**
 * Send http request
 * @param {string} url request url
 * @param {string} method request method
 * @param {string} responseType returned response type
 * @param {callback} onSuccess callback to invoke when request is successful
 * @param {callback} onFailure callback to invoke when request failed
 */
const sendRequest = (url, method, responseType, onSuccess, onFailure) => {
  // INITIALIZE a new XMLHttpRequest here
  const xhr = new XMLHttpRequest();
  xhr.responseType = responseType;
  xhr.open(method, url, true);
  // DEFINE onload and callback behavior
  xhr.onload = () => {
    let status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      onSuccess(xhr.response);
    } else {
      onFailure(xhr.response);
    }
  };
  // SEND request
  xhr.send();
};
