/**
 * 1. We can make our code easier to understand by creating a
 *    reusable 'sendRequest' method for sending HTTP requests. 
 *    Implement the sendRequest method defined at the end of this file.
 * 2. Update this page so that when a user makes a timezone selection, 
 *    the time displayed on the page is updated to reflect 
 *    the user's selected time zone. 
 */
document.addEventListener('DOMContentLoaded', (e) => {
  // get the html element with id 'time', this will 
  // correspond to the span element defined in exercise1.html
  const time = document.getElementById('time');

  // retrieve time information for the current IP address 
  let url = `http://worldtimeapi.org/api/ip`;

  sendRequest(url, 'GET', 'json', response => {
    // save the time information in the html element with id 'time'
    time.innerText = `${response.timezone}: ${response.datetime}`;
  }, response => {
    // placeholder logic in case the request failed  
    console.log('response failed');
  });

  // find the html element with id 'select-timezone'
  // this will map to the select dropdown in example1.html
  const select = document.getElementById('select-timezone'); 

  // list all available time zones
  url = `http://worldtimeapi.org/api/timezone`;

  sendRequest(url, 'GET', 'json', response => {
    // insert all returned time zones into the select-timezone dropdown
    response.forEach(timeZone => {
      let el = document.createElement('option');
      el.textContent = timeZone;
      el.value = timeZone;
      select.appendChild(el);
    });
  }, response => {
    console.log('response failed');
  });
  // add an event listener to the time zone drop down
  select.addEventListener('change', e => {
    // HINT use e.currentTarget.value to get the timezone from the dropdown
    const timeZone = e.currentTarget.value;

    // retrieve time information for a given time zone
    // HINT you can use `http://worldtimeapi.org/api/timezone/${timeZone}` to create
    // a string with an interpolated variable 
    const url = `http://worldtimeapi.org/api/timezone/${timeZone}`;

    // send a request to the above url 
    sendRequest(
      url, 'GET', 'json', response => {
      // update the span element to display the current timezone and time 
      time.innerText = `${response.timezone}: ${response.datetime}`;
    }, response => {
      // placeholder logic in case the request failed  
      console.log('response failed');
    });
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
