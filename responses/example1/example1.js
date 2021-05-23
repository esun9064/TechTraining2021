// create a new AJAX object
const request = new XMLHttpRequest();

// assign request information
const url = `http://worldtimeapi.org/api/timezone`;
const method = 'GET';
request.responseType = 'json';
 
// handle response
request.onload = () => {
  let status = request.status;
  if (status === 0 || (status >= 200 && status < 400)) {
    // get the date information from the http response returned from our request
    console.log(request.response);
  } else {
    // placeholder logic in case the request failed  
    console.log('response failed');
  }
};

// open a new connection and send request
request.open(method, url);
request.send();



