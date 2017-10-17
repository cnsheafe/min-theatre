import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        searchResults: [],
        currentVideo: {}
    },
    mutations: {
        fetchSearchResults(state, results) {
            state.searchResults = results.map(result => {
                return result.id.videoId;
            });
        }
    },
    actions: {
        fetchSearchResults(context, query) {
            const searchRequest = new Request(
                `https://min-theatre-api.herokuapp.com/search?q=hello`, {
                    method: "GET"
                }
            );
            fetch(searchRequest)
                .then(res => {
                    return res.json();
                }).then(json => {
                    context.commit("fetchSearchResults", json.items);
                });
        }
    }
});

export default store;