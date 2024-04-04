<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <br v-if="true">
    <router-link to="/practice01">practice01</router-link> |
    <router-link to="/practice02">practice02</router-link> |
    <router-link to="/practice03">practice03</router-link> |
    <router-link to="/practice04">practice04</router-link> |
    <router-link to="/practice05">practice05</router-link>
    <br v-if="true">
    <router-link to="/practice06">practice06</router-link> |
    <router-link to="/practice07">practice07</router-link> |
    <router-link to="/practice08">practice08</router-link> |
    <router-link to="/practice09">practice09</router-link> |
    <router-link to="/practice10">practice10</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
</script>