const fs = require("fs");
const path = require("path");
jest.mock("node-fetch");
const fetch = require("node-fetch");
import {
  fetchSearchResults,
  fetchResultInfo,
  addExtraInfo,
  updateSearchResults
} from "../../src/model/search";


describe("Search Actions", function () {
  beforeAll(function () {
    fetch.mockImplementation((url, options) => {
      return new Promise((resolve) => {
        resolve(new MockResponse(200));
      });
    });
  });

  describe("fetchSearchResults", function () {

    test("should return true for a valid query", function () {
      expect.assertions(1);
      return fetchSearchResults(new MockContext, "hello")
        .then(success => {
          expect(success).toBeTruthy();
        });

    });
  });

  describe("fetchResultInfo", function () {
    test("should return a list of new items", function () {
      expect.assertions(1);
      return fetchResultInfo(new MockContext, "id1,id2")
        .then(data => {
          expect(data.items).toHaveLength(5);
        });
    });
  });
});

describe("Search Mutations", function () {
  let results;
  let state;
  beforeEach(function () {
    results = JSON.parse(fs.readFileSync(path.normalize(`${__dirname}/../search-sample.json`), "utf8"));
    state = {};
    state.currentVideo = {};
  });

  describe("updateSearchResults", function () {
    test("should update the state when given a valid array of results", function () {
      updateSearchResults(state, results);
      expect(state.searchResults).toHaveLength(5);
    });
  });

  describe("addExtraInfo", function () {
    let data;
    beforeEach(function () {
      data = JSON.parse(fs.readFileSync(path.normalize(`${__dirname}/../extra-info-sample.json`), "utf8"));
    })
    test("should add extra info to existing data", function () {
      updateSearchResults(state, results);
      addExtraInfo(state, data);
      expect(state.searchResults).toHaveLength(5);
      expect(state.searchResults[0]).toHaveProperty("duration");
      expect(state.searchResults[0]).toHaveProperty("likes");
      expect(state.searchResults[0]).toHaveProperty("dislikes");
      expect(state.searchResults[0]).toHaveProperty("views");
    });
  })

});

class MockResponse {
  constructor(status) {
    this.status = status;
  }

  json() {
    return new Promise(resolve => resolve({
      items: [1, 2, 3, 4, 5]
    }));
  }
}

class MockContext {
  commit(actionString, input) {

  }
}
