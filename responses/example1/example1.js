document.addEventListener('DOMContentLoaded', (e) => {
  // get the html element with id 'time', this will 
  // correspond to the span element defined in exercise1.html
  const time = document.getElementById('time');

  // construct an XMLHttpRequest object to retrieve time information 
  // for the current IP address 
  const currentTimeRequest = new XMLHttpRequest();
  currentTimeRequest.responseType = 'json';
  let method = 'GET';
  let url = `http://worldtimeapi.org/api/ip`;

  currentTimeRequest.open(method, url, true);
  currentTimeRequest.onload = () => {
    let status = currentTimeRequest.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      // get the date information from the http response returned from our request
      let timeStr = currentTimeRequest.response.datetime;
      // save the time information in the html element with id 'time'
      time.innerText = `${currentTimeRequest.response.timezone}: ${timeStr}`;
    } else {
      // placeholder logic in case the request failed  
      console.log('response failed');
    }
  };
  currentTimeRequest.send();

  // find the html element with id 'select-timezone'
  // this will map to the select dropdown in example1.html
  const select = document.getElementById('select-timezone'); 

  // construct an XMLHttpRequest object to retrieve a 
  // list of all available time zones
  const listTimeZonesRequest = new XMLHttpRequest();
  listTimeZonesRequest.responseType = 'json';
  method = 'GET';
  url = `http://worldtimeapi.org/api/timezone`;

  listTimeZonesRequest.open(method, url, true);
  listTimeZonesRequest.onload = () => {
    let status = listTimeZonesRequest.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      // insert all returned time zones into the select-timezone dropdown
      listTimeZonesRequest.response.forEach(timeZone => {
        let el = document.createElement('option');
        el.textContent = timeZone;
        el.value = timeZone;
        select.appendChild(el);
      });
    } else {
      console.log('response failed');
    }
  };
  listTimeZonesRequest.send();
});