const request = new XMLHttpRequest();
request.responseType = 'json';
const method = 'GET';
const url = `http://worldtimeapi.org/api/timezone`;
 
request.open(method, url, true);
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
request.send();