# MinTheatre

>Webapp for viewing Youtube videos in a clutterless environment.

## Overview

MinTheatre is a Vue-Vuex SPA that utilizes the Youtube Data API via a Node.js backend. It features video searching, a results section detailing critical information, and a video player using the Youtube Iframe API. All of this wrapped within a minimalistic design theme to offer the user a viewing experience free of clutter and needless clickbait.

## Technology Stack

### Vue-Vuex

Vue was used because it offers a fantastically succint and simple framework for developing SPA applications in a short amount of time. Additionally, Vue offers single component templates to greater modularity and scope. Vuex was used to create a simple and scalable store pattern, similiar to Redux.

### SCSS

To encourage consistent patterns of readability and scalability SCSS was used as it offers both modules clean nesting syntax.

### Fetch API

Fetch was used as an alternative to AJAX for performing simple and modern HTTP requests.

>See [min-theatre-api](https://github.com/cnsheafe/min-theatre-api) for information on the backend proxy being used for the API calls.

## Development Tools

- Webpack

- Vue Devtools

- Postman

- TravisCI

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
