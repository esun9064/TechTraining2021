// Send an HTTP request to the worldtimeapi to return back the current time in Chicago

// 1. At line 5, create a new XMLHttpRequest and save this object in a 'const' variable 
//    named 'request'. This object will be used to initiate a new HTTP request.


// 2. At line 9, save the string: 'http://worldtimeapi.org/api/timezone/America/Chicago' 
//    to a 'const' named 'url'. 


// 3. We will be sending a GET request to retrieve time zone information. At line 13, 
//    save the string value: 'GET' in a new 'const' variable named 'method'.


// 4. The worldtimeapi returns back json response data. At line 17, set the 'responseType' property 
//     of the 'request' object equal to a string: 'json'


// 5. At line 21, call the 'open()' method on the 'request' object and pass it the 
//    'method' and 'url' variables as arguments  


// 6. At Line 25, set the 'request.onload' event handler equal to an anonymous function '() => {}'
//    The 'onload' event handler is executed whenever a request transaction has completed.


  // 7. The below code block handles the incoming response from the HTTP request and logs
  //    the response to console if the status code signifies a successful request. Uncomment 
  //    this code block and place it at line 26
  /* 
  let status = request.status;
  if (status === 0 || (status >= 200 && status < 400)) {
    // get the date information from the http response returned from our request
    console.log(request.response);
  } else {
    // placeholder logic in case the request failed  
    console.log('response failed');
  }
  */

// 8. At line 42, send the HTTP request by calling the 'send()' function on the 'request' object


// 9. Save your changes and refresh the page on the browser and view the HTTP response in the console