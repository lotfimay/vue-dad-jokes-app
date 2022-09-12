<template>
  <form @submit.prevent="search">
    <input type="search" v-model="enteredText" />
    <base-button color="#12FE88">{{ text }}</base-button>
  </form>
</template>
<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
  components: { BaseButton },
  data() {
    return {
      enteredText: '',
    };
  },
  props: ['text'],
  methods: {
    async search() {
      if (this.enteredText !== '') {
        this.$emit('search-jokes', this.enteredText);
      }
    },
  },
};
</script>
<style scoped>
form {
  padding: 1rem;
}
input {
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 5px;
  font: inherit;
}

input:focus {
  outline: none;
  border: 1px solid #12fefe;
  box-shadow: 1px 1px 1px 2px #12fefe55;
}
</style>
