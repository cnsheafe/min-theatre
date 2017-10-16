<template>
  <form action="" v-on="fetchSearchResults">
    <label for="search-input">Search Youtube Videos</label>
    <input type="text" id="search-input" formaction="submit">
    <button type="submit">Search</button>
  </form>
</template>

<script>
export default {
  name: "SearchBar"
}
</script>
