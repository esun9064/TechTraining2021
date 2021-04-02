/**
 * 1. We can make our code easier to understand by creating a
 *    reusable 'sendRequest' method for sending HTTP requests. 
 *    Implement the sendRequest method defined at the end of this file.
 * 2. Update this page so that when a user makes a timezone selection, 
 *    the time displayed on the page is updated to reflect 
 *    the user's selected time zone. 
 */
document.addEventListener('DOMContentLoaded', (e) => {
  let catElem = document.getElementById('cat-fact');
  let dogElem = document.getElementById('dog-fact');
  // REPLACE with sendRequest()
  let catRequest = new XMLHttpRequest();
  catRequest.responseType = 'json';
  let method = 'GET';
  let url = `https://esun9064-tt21-cat-facts.herokuapp.com//api/v1/facts`;
  
  catRequest.open(method, url, true);
  catRequest.onload = () => {
    let status = catRequest.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      catElem.innerText = catRequest.response.text;
    } else {
      // placeholder logic in case the request failed  
      console.log('response failed');
    }
  };
  catRequest.send();

  // REPLACE with sendRequest
  dogRequest = new XMLHttpRequest();
  dogRequest.responseType = 'json';
  method = 'GET';
  url = `https://esun9064-tt21-cat-facts.herokuapp.com//api/v1/facts?animal_type=dog`;
  
  dogRequest.open(method, url, true);
  dogRequest.onload = () => {
    let status = dogRequest.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      dogElem.innerText = dogRequest.response.text;
    } else {
      // placeholder logic in case the request failed  
      console.log('response failed');
    }
  };
  dogRequest.send();


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

  // DEFINE onload and callback behavior

  // SEND request
};
