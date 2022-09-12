<template>
  <div>
    <router-link :to="{ name: 'jokes' }">Go back to jokes</router-link>
    <p>{{ joke }}</p>
    <span>jokeId : {{ id }}</span>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      joke: '',
    };
  },
  props: ['id'],
  async created() {
    console.log(this.id);
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    try {
      const res = await axios.get(
        `https://icanhazdadjoke.com/j/${this.id}`,
        config
      );
      this.joke = res.data.joke;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
<style scoped>
div {
  margin-top: 1rem;
  padding: 1rem 0;
}
p {
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #ccc;
  width: fit-content;
}
a {
  text-decoration: none;
  color: #5abae3;
}
a:hover {
  text-decoration: underline;
}
</style>
