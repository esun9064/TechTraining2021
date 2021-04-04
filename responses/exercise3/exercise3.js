/**
 * Implement the search pokemon feature. When a user types a pokemon's
 * name into the input box, and clicks the search button, the page 
 * should return the pokemon's information back to the user
 */

document.addEventListener('DOMContentLoaded', (e) => {
  const inputText = document.getElementById('pokemon-input');

  const searchButton = document.getElementById('search');

  searchButton.addEventListener('click', e => {
    searchPokemon(inputText.value.toLowerCase());
  });

  const evolvesFrom = document.getElementById('evolves-from');
  evolvesFrom.addEventListener('click', e => {
    const pokemonName = e.currentTarget.innerText.toLowerCase();
    searchPokemon(pokemonName);
  });

  // MOVE all of the below code into your request callbacks 

  // render a pokemon's name, MOVE this code into a request callback and dynamically
  // retrieve a pokemon's name from the response object
  const nameHeading = document.getElementById('pokemon-name');
  nameHeading.innerText = 'Pikachu';

  // render pokemon image, MOVE this code into a request callback and dynamically 
  // retrieve a pokemon's image from the response object
  const imgElem = document.getElementById('pokemon-image');
  imgElem.setAttribute(
    'src', 
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  );

  // render pokemon description, MOVE this code into a request callback and dynamically 
  // retrieve a pokemon's description from the response object
  const description = document.getElementById('description');
  description.innerText = 'When several of\nthese POKéMON\ngather, theirelectricity could\nbuild and cause\nlightning storms.';

  // render name of the "evolves from Pokemon", MOVE this code into a request callback
  // and dynmically populate this field
  const evolvesFromLink = document.getElementById('evolves-from');
  evolvesFromLink.innerText = 'Pichu';

  // (optional) MOVE this code into a request callback and try to populate a pokemon's stats using this 
  // code as a template 
  const statsListElement = document.getElementById('stats-list');
  while (statsListElement.firstChild) {
    statsListElement.removeChild(statsListElement.firstChild);
  }
  const stats = [
    {name: 'Attack', base_stat: '55'},
    {name: 'HP', base_stat: '35'},
    {name: 'Special Attack', base_stat: '50'},
    {name: 'Special Defense', base_stat: '50'},
    {name: 'Defense', base_stat: '40'},
    {name: 'Speed', base_stat: '90'},
  ];
  stats.forEach(stat => {
    let el = document.createElement('li');
    el.innerText = `${stat.name}: ${stat.base_stat}`;
    statsListElement.appendChild(el);
  });
});

/**
 * Return information for the given pokemon
 * @param {string} pokemonName pokemon to search for
 */
const searchPokemon = (pokemonName) => {
  // send a request to get basic pokemon information 

    // use response from first request to get pokedex information 
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
