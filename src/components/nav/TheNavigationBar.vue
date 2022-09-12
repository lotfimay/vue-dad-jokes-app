<template>
  <base-card class="container">
    <header>
      <div>
        <h1>Dad Jokes</h1>
      </div>
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'home' }"> Home </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'jokes' }"> Jokes </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'about' }"> About </router-link>
          </li>
        </ul>
      </nav>
    </header>
  </base-card>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  margin-bottom: 1rem;
}
h1 {
  color: #97d2ec;
  margin: 0;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul {
  list-style: none;
  display: flex;
  padding: 0;
}
li {
  padding: 0;
  margin: 0 0.75rem;
}
a {
  padding: 0;
  text-decoration: none;
  background-color: #272525;
  padding: 0.5rem;
  color: white;
}
a:not(.active) {
  border: 1px #272525 solid;
}
a.active {
  border: 1px #97d2ec solid;
}
a:hover:not(.active),
a:active:not(.active) {
  background-color: #131212;
  border: 1px #131212 solid;
}
.active {
  background-color: #97d2ec;
}
</style>
