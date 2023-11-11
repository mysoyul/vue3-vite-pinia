<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/posts">Posts</RouterLink>
        <RouterLink to="/posts/new">New Post</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
  margin-top: 2rem;
}

nav a {
  font-weight: bold;
  padding: 0 .5rem;
  border-left: 1px solid var(--color-border);
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
