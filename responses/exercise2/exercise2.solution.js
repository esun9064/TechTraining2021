// Use query string params to return back facts about different types of animals

const getRandomCatFact = () => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  const method = 'GET';
  const url = `https://esun9064-tt21-cat-facts.herokuapp.com/api/v1/facts`;
  
  // 1. At line 12, create a new variable 'queryString' and set it equal 
  //    to the string: '?animal_type=cat'. This query string parameter tells the server to 
  //    return back only facts about cats as opposed to facts about some other animal.
  const queryParams = '?animal_type=cat';

  // 2. At line 16, create a new variable named 'combinedUrl' and set it equal
  //    to `${url}${queryString}`. 
  const combinedUrl = `${url}${queryParams}`;

  xhr.open(method, combinedUrl, true);
  xhr.onload = () => {
    const status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      console.log(xhr.response);
    } else {
      console.log('response failed');
    }
  };
  xhr.send();
};
getRandomCatFact();

const getRandomDogFact = () => {
  // 3. repeat the above except retrieve random facts about dogs instead of cats. 
  //    Use the querystring '?animal_type=dog'
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  const method = 'GET';
  const url = `https://esun9064-tt21-cat-facts.herokuapp.com/api/v1/facts`;

  const queryParams = '?animal_type=dog';

  const combinedUrl = `${url}${queryParams}`;
  
  xhr.open(method, combinedUrl, true);
  xhr.onload = () => {
    const status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      console.log(xhr.response);
    } else {
      console.log('response failed');
    }
  };
  xhr.send();
};
getRandomDogFact();

// 5. Refresh the page in the browser and open the console to view the returned cat and dog facts