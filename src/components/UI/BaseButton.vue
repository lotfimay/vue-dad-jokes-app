<template>
  <button :style="{ backgroundColor: color, borderColor: color }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['color'],
};
</script>
<style scoped>
button {
  padding: 0.5rem;
  color: white;
  background-color: #201d1d;
  border: 1px solid #201d1d;
  cursor: pointer;
  font: inherit;
  border-radius: 5px;
}
button:hover,
button:active {
  background-color: #111010;
  border: 1px solid #111010;
}
</style>
