<template>
  <the-navigation-bar></the-navigation-bar>
  <base-card>
    <router-view></router-view>
  </base-card>
</template>

<script>
import TheNavigationBar from './components/nav/TheNavigationBar.vue';
export default {
  name: 'App',
  components: {
    TheNavigationBar,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

html {
  font-family: 'Roboto', sans-serif;
}
</style>
