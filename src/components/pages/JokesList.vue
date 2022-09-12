<template>
  <search-form text="Search for a joke" @search-jokes="searchJokes" />
  <ul>
    <joke-item
      v-for="joke in jokes"
      :key="joke.id"
      :id="joke.id"
      :joke="joke.joke"
    >
    </joke-item>
  </ul>
</template>
<script>
import JokeItem from '../jokes/JokeItem.vue';
import SearchForm from '../forms/searchForm.vue';
import axios from 'axios';
export default {
  components: {
    JokeItem,
    SearchForm,
  },
  data() {
    return {
      jokes: [],
    };
  },
  methods: {
    async loadJokes() {
      const config = {
        headers: {
          Accept: 'application/json',
        },
      };
      try {
        const res = await axios.get(
          'https://icanhazdadjoke.com/search',
          config
        );
        this.jokes = res.data.results;
      } catch (err) {
        console.log(err);
      }
    },
    async searchJokes(term) {
      const config = {
        headers: {
          Accept: 'application/json',
        },
      };
      const result = await axios.get(
        `https://icanhazdadjoke.com/search?term=${term}`,
        config
      );
      this.jokes = result.data.results;
    },
  },
  created() {
    this.loadJokes();
  },
};
</script>
<style scoped>
ul {
  padding: 0;
  list-style: none;
}
</style>
