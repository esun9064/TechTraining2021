/**
 * Rewrite this class to use promises and fetchRequest
 */
 document.addEventListener('DOMContentLoaded', (e) => {
  // get the html element with id 'time', this will 
  // correspond to the span element defined in exercise1.html
  const time = document.getElementById('time');

  // retrieve time information for the current IP address 
  let url = `http://worldtimeapi.org/api/ip`;

  fetchRequest(url, 'GET', 'json')
    .then(response => {
      // save the time information in the html element with id 'time'
      time.innerText = `${response.timezone}: ${response.datetime}`;
    })
    .catch(response => {
      // placeholder logic in case the request failed  
      console.log('response failed');
    });

  // find the html element with id 'select-timezone'
  // this will map to the select dropdown in example1.html
  const select = document.getElementById('select-timezone'); 

  // list all available time zones
  url = `http://worldtimeapi.org/api/timezone`;

  /* REPLACE with fetchRequest */
  fetchRequest(url, 'GET', 'json')
    .then(response => {
      // insert all returned time zones into the select-timezone dropdown
      response.forEach(timeZone => {
        let el = document.createElement('option');
        el.textContent = timeZone;
        el.value = timeZone;
        select.appendChild(el);
      });
    })
    .catch(response => {
      console.log('response failed');
    });

  select.addEventListener('change', e => {
    const timeZone = e.currentTarget.value;

    // retrieve time information for the current IP address 
    const url = `http://worldtimeapi.org/api/timezone/${timeZone}`;

    /* REPLACE with fetchRequest */
    fetchRequest(url, 'GET', 'json')
      .then(response => {
        // save the time information in the html element with id 'time'
        time.innerText = `${response.timezone}: ${response.datetime}`;
      })
      .catch(response => {
        // placeholder logic in case the request failed  
        console.log('response failed');
      });
  });
});

/**
 * Create a promise object for an HTTP request
 * @param {string} url request url
 * @param {string} method request method
 * @param {string} responseType returned response type
 * @returns Promise object for the given http request
 */
 const fetchRequest = (url, method, responseType) => {
  // IMPLEMENT fetch request via promises
  let requestPromise = new Promise((resolve, reject) => {
    sendRequest(url, method, responseType, resolve, reject);
  });

  return requestPromise;
};

/**
 * Send http request
 * @param {string} url request url
 * @param {string} method request method
 * @param {string} responseType returned response type
 * @param {callback} onSuccess callback to invoke when request is successful
 * @param {callback} onFailure callback to invoke when request failed
 */
const sendRequest = (url, method, responseType, onSuccess, onFailure) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = responseType;
  xhr.open(method, url, true);
  xhr.onload = () => {
    let status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      onSuccess(xhr.response);
    } else {
      onFailure(xhr.response);
    }
  };
  xhr.send();
};
