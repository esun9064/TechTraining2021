/**
 * Rewrite send request methods to use promises and fetchRequest()
 * chain promises to avoid nested callbacks. Fill in the missing code.
 */
 document.addEventListener('DOMContentLoaded', (e) => {
  const inputText = document.getElementById('pokemon-input');
  searchPokemon(inputText.value.toLowerCase());

  const searchButton = document.getElementById('search');
  searchButton.addEventListener('click', e => {
    searchPokemon(inputText.value.toLowerCase());
  });

  const evolvesFrom = document.getElementById('evolves-from');
  evolvesFrom.addEventListener('click', e => {
    const pokemonName = e.currentTarget.innerText.toLowerCase();
    searchPokemon(pokemonName);
  });
});

/**
 * Return information for the given pokemon
 * @param {string} pokemonName pokemon to search for
 */
const searchPokemon = (pokemonName) => {
  // send request to get data for the pokemon by the given name
  fetchRequest(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, 'GET', 'json')
    .then(response => {
      // get image 
      const imgElem = document.getElementById('pokemon-image');
      imgElem.setAttribute('src', response.sprites.front_default);

      // create an array of promises, for each stats request
      const statsPromises = createStatsPromises(response.stats);
      // we will combine all the stats promises into a single promise that gets
      // resolved when all promises in the array are fulfilled
      const combinedStatsPromise = Promise.all(statsPromises);
      
      // create another combined promise, using the combined stats promise 
      // and the promise for the get pokedex information request
      const combinedPromise = Promise.all(
        [combinedStatsPromise, fetchRequest(response.species.url, 'GET', 'json')]
      );
      // return the combined promise, this promise will fulfill once all of the stats requests 
      // and the pokedex request are complete
      return combinedPromise;
    })
    .catch(response => {
      alert('Pokemon not found');
    })
    .then(results => {
      // get stats responses
      const statsResponses = results[0];

      const statsListElement = document.getElementById('stats-list');
      statsResponses.forEach(({base_stat,response}) => {
        // INSERT code to handle stats responses
        // place your code here:
        const statName = response.names.find(name => {
          return name.language.name === 'en';
        }).name;
        let el = document.createElement('li');
        el.innerText = `${statName}: ${base_stat}`;
        statsListElement.appendChild(el);
      });

      // get pokedex response
      const pokedexResponse = results[1];
      // INSERT code to retrieve name of pokemon
      // place your code here:
      const nameHeading = document.getElementById('pokemon-name');
      nameHeading.innerText = pokedexResponse.names.find(name => {
        return name.language.name === 'en';
      }).name;

      // INSERT code to get pokemon description 
      // place your code here:
      const description = document.getElementById('description');
      description.innerText = pokedexResponse.flavor_text_entries.find(flavor_text => {
        return flavor_text.language.name === 'en';
      }).flavor_text;

      // INSERT code to get evolution from species information and return promise
      // place your code here:
      if (pokedexResponse.evolves_from_species)
      {
        return fetchRequest(pokedexResponse.evolves_from_species.url, 'GET', 'json');
      } else {
        // reset field
        const evolvesFromLink = document.getElementById('evolves-from');
        evolvesFromLink.innerText = '';
      }
    })
    .then(response => {
      // INSERT code to get name of evolved from pokemon:
      // place your code here:
      if (response)
      {
        const evolvesFromLink = document.getElementById('evolves-from');
        evolvesFromLink.innerText = response.names.find(name => {
          return name.language.name === 'en';
        }).name;
      }
    })
    .catch(error => {
      throw error;
    });
};

/**
 * Return an array of promises for stats requests
 * @param {array} stats array of stats 
 * @returns array of promises
 */
const createStatsPromises = (stats) => {
  // create an array of promises, for each stats request
  const statsPromises = [];
  stats.forEach(stat => {
    statsPromises.push(new Promise((resolve, reject) => {
      // wrap the fetch request in a promise so we can return the 
      // original base_stat value 
      fetchRequest(stat.stat.url, 'GET', 'json')
        .then(response => {
          resolve({base_stat: stat.base_stat, response: response});
        })
        .catch(response => {
          reject({base_stat: stat.base_stat, response: response});
        });
    }));
  });

  return statsPromises;
};

/**
 * Create a promise object for an HTTP request
 * @param {string} url request url
 * @param {string} method request method
 * @param {string} responseType returned response type
 * @returns Promise object for the given http request
 */
const fetchRequest = (url, method, responseType) => {
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