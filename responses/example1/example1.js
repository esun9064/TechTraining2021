const timeRequest = new XMLHttpRequest();
timeRequest.responseType = 'json';
method = 'GET';
url = `http://worldtimeapi.org/api/timezone/America/Chicago`;
 
timeRequest.open(method, url, true);
timeRequest.onload = () => {
  let status = timeRequest.status;
  if (status === 0 || (status >= 200 && status < 400)) {
    // get the date information from the http response returned from our request
    console.log(timeRequest.response);
  } else {
    // placeholder logic in case the request failed  
    console.log('response failed');
  }
};
timeRequest.send();