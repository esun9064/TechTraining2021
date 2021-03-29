/**
 * Use promises, replace sendRequest with fetchRequest
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
  // REPLACE with fetchRequest
  sendRequest(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, 'GET', 'json', response => {

    // get image 
    const imgElem = document.getElementById('pokemon-image');
    imgElem.setAttribute('src', response.sprites.front_default);

    // get pokedex information 
    // REPLACE with fetchRequest
    sendRequest(response.species.url, 'GET', 'json', response => {
      // get name of pokemon
      const nameHeading = document.getElementById('pokemon-name');
      nameHeading.innerText = response.names.find(name => {
        return name.language.name === 'en';
      }).name;

      // get pokemon description 
      const description = document.getElementById('description');
      description.innerText = response.flavor_text_entries.find(flavor_text => {
        return flavor_text.language.name === 'en';
      }).flavor_text;

      // get evolution chain:
      const evolvesFromLink = document.getElementById('evolves-from');
      if (response.evolves_from_species)
      {
        // REPLACE with fetchRequest
        sendRequest(response.evolves_from_species.url, 'GET', 'json', response => {
          // get name of pokemon
          evolvesFromLink.innerText = response.names.find(name => {
            return name.language.name === 'en';
          }).name;
        }, response => {
          console.log('failed to get evolution chain');   
         });
      } else {
        // reset field
        evolvesFromLink.innerText = '';
      }
    }, response => {
      console.log('failed to get pokedex');
    });

    // get stats information 
    const statsListElement = document.getElementById('stats-list');
    const stats = response.stats; 
    stats.forEach(stat => {
      // REPLACE with fetchRequest
      sendRequest(stat.stat.url, 'GET', 'json', response => {
        // get name of stat
        const statName = response.names.find(name => {
          return name.language.name === 'en';
        }).name;
        let el = document.createElement('li');
        el.innerText = `${statName}: ${stat.base_stat}`;
        statsListElement.appendChild(el);
      }, response => {
        alert('failed to get stats');
      });
    });

  }, response => {
    alert('Pokemon not found');
  });
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
