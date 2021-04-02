/**
 * send an HttpRequest to retrieve a random cat fact and log the returned response
 * to your console.
 * see https://github.com/esun9064/Cat-Facts/tree/master
 * for instructions on how to build your request 
 */ 
 const getRandomCatFact = () => {
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  let method = 'GET';
  let url = `https://esun9064-tt21-cat-facts.herokuapp.com//api/v1/facts`;
  
  xhr.open(method, url, true);
  xhr.onload = () => {
    let status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      console.log(xhr.response);
    } else {
      // placeholder logic in case the request failed  
      console.log('response failed');
    }
  };
  xhr.send();
};
getRandomCatFact();

/**
 * Send a request to retrieve a random dog fact and log the returned response to your 
 * console. 
 * see https://github.com/esun9064/Cat-Facts/tree/master
 * for instructions on how to build your request 
 */
const getRandomDogFact = () => {
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  let method = 'GET';
  let url = `https://esun9064-tt21-cat-facts.herokuapp.com//api/v1/facts?animal_type=dog`;
  
  xhr.open(method, url, true);
  xhr.onload = () => {
    let status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      console.log(xhr.response);
    } else {
      // placeholder logic in case the request failed  
      console.log('response failed');
    }
  };
  xhr.send();
};
getRandomDogFact();


/**
 * Save some data to the external server and return back the response from the server 
 * Data should have the following format:
 *   title=tech training 2021
 *   body=javascript 201
 *   userId=1
 */
const savePost = () => {
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  let method = 'POST';
  let url = `https://jsonplaceholder.typicode.com/posts`;

  xhr.open(method, url, true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
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
  xhr.send(JSON.stringify(json));
};
savePost();