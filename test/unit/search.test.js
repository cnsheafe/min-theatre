const fs = require("fs");
const path = require("path");
jest.mock("node-fetch");
const fetch = require("node-fetch");
import {
  fetchSearchResults,
  updateSearchResults
} from "../../src/model/search";


describe("Search", function () {
  describe("fetchSearchResults", function () {
    beforeAll(function () {
      fetch.mockImplementation((url, options) => {
        return new Promise((resolve) => {
          resolve(new MockResponse(200));
        });
      });
    });

    test("should return true for a valid query", function () {
      expect.assertions(1);
      return fetchSearchResults(new MockContext, "hello")
        .then(success => {
          expect(success).toBeTruthy();
        });

    });
  });

  describe("updateSearchResults", function () {
    let results;
    beforeAll(function () {
      results = JSON.parse(fs.readFileSync(path.normalize(`${__dirname}/../search-sample.json`), "utf8"));
    })
    let state;
    beforeEach(function () {
      state = {};
    });

    test("should update the state when given a valid array of results", function () {
      updateSearchResults(state, results);
      expect(state.searchResults).toHaveLength(5);
    });
  });

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
