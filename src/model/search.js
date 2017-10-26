require("es6-promise").polyfill();
const fetch = require("isomorphic-fetch");

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
  return fetch(url, {
      method: "GET"
    })
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw res;
      }
    }).then(items => {
      if (items !== null) {
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
      },
      duration: null,
      views: null,
      likes: null,
      dislikes: null
    }
  });
  state.currentVideo.show = false;
}

export function fetchResultInfo(context, videoIds) {
  const url = `https://min-theatre-api.herokuapp.com/search/extra`;
  const data = "ids=".concat(videoIds);

  return fetch(url, {
      method: "POST",
      body: data,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then(items => {
      context.commit("addExtraInfo", items);
      return items;
    });
}

export function addExtraInfo(state, extraInfo) {
  state.searchResults = state.searchResults.map((result, index) => {
    let extra = extraInfo[index];

    return Object.assign({}, result, {
      duration: _convertDuration(extra.contentDetails.duration),
      views: extra.statistics.viewCount,
      likes: extra.statistics.likeCount,
      dislikes: extra.statistics.dislikeCount
    });
  });
}

/**
 * Helper function for converting timestamp to
 * readable time format DD:HH:MM:SS .
 * @private
 * @param {string} timestamp - Format ISO 8601. Largest units are days.
 * @returns {string} - Readable time format (e.g. 1d 22h 7m 43s)
 * PT#H#M#S
 * P#DT#H#M#S
 */
function _convertDuration(timestamp) {
  let days = /([0-9]+)DT/.exec(timestamp);
  days = days ? days[1]+"d " : "";

  let hours = /([0-9]+)H/.exec(timestamp);
  hours = hours ? hours[1]+"h " : "";

  let mins = /([0-9]+)M/.exec(timestamp);
  mins = mins ? mins[1]+"m " : "";
  let secs = /([0-9]+)S/.exec(timestamp);
  secs = secs ? secs[1]+"s" : "";

  return "".concat(
    days,
    hours,
    mins,
    secs
  );
}