<template>
  <li>
    <router-link :to="`/jokes/${id}`">
      <p>{{ joke }}</p>
    </router-link>
  </li>
</template>
<script>
export default {
  props: ['id', 'joke'],
};
</script>
<style scoped>
li {
  padding: 0.5rem;
  margin: 0.5rem 0;

  border: 1px solid #cdcdcd;
}
a {
  text-decoration: none;
  color: black;
}
</style>
