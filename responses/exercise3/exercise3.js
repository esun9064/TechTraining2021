const sendPostRequest = () => {
  // 1. At line 3, initialize a new const 'xhr' XMLHttpRequest object.


  // 2. At line 7, set the '.responseType' property on the XMLHttpRequest object equal 
  //    to the string: 'json'


  // 3. At line 11, create a new 'const' variable named 'method', and set the value of 'method' 
  //    equal the string: 'POST'


  // 4. At line 15, create a new 'const' variable named 'url', and set the value or 'url' equal
  //    to the string: 'https://jsonplaceholder.typicode.com/posts'


  // 5. At line 19, call the '.open()' method on the XMLHttpRequest object and pass it the 
  //    'method' and 'url' variables as arguments  


  // 6. At line 23, call the '.setRequestHeader()' method on the XMLHttpRequest object and pass it
  //    the strings: 'Content-Type', and 'application/json;charset=UTF-8' as arguments


  xhr.onload = () => {
    let status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      console.log(xhr.response);
    } else {
      // placeholder logic in case the request failed  
      console.log('response failed');
    }
  };

  let json =  {
    'title': 'tech training 2021',
    'body': 'javascript 201',
    'userId': 1
  };

  // 7. at line 43, create a 'const' variable named 'postData'. 
  // 8. Call the method: Json.stringify(json) and assign this method call to the 'postData' variable


  // 9. at line 47, call the .send() method on the XMLHttpRequest object, pass in the 'postData'
  //    variable as a paramemter to the send method.    

  
};
sendPostRequest();