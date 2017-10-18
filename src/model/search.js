const fetch = require("node-fetch");
/**
 * Vuex function that uses the Fetch API for requesting
 * Youtube seach results. Uses Vuex context to make changes
 * to app state via 'commit'.
 * @param {*} context - Store context automatically injected by Vuex.
 * @param {string} query - Query for relevant Youtube videos.
 * @returns {Promise<Boolean>} - True if successful, false otherwise.
 */
export function fetchSearchResults(context, query) {
  const url = `https://min-theatre-api.herokuapp.com/search?q=${query}`;
  return fetch(url, {method: "GET"})
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw res;
      }
    }).then(items => {
      if(items !== null) {
        context.commit("updateSearchResults", items);
        return true;
      }
      return false;
    })
    .catch(err => {
      console.log(err);
      return false;
    });
}

/**
 * Vuex function that replaces the state's search results with a
 * new set of data.
 * @param {*} state - App state automatically injected by Vuex.
 * @param {*} results - Search results fetched from search action.
 */
export function updateSearchResults(state, results) {
  state.searchResults = results.map(result => {
    return {
      etag: result.etag,
      id: result.id.videoId,
      title: result.snippet.title,
      description: result.snippet.description,
      channelName: result.snippet.channelTitle,
      thumbnails: {
        small: {
          url: result.snippet.thumbnails.default.url
        },
        medium: {
          url: result.snippet.thumbnails.medium.url
        },
        large: {
          url: result.snippet.thumbnails.high.url
        }
      }
    }
  });
}
