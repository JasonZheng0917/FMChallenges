<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/" class="home-btn">Back to Home</RouterLink>
    <h3>
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      with
      <a href="https://vuejs.org/" target="_blank">Vue 3</a>
      by
      <a href="https://github.com/JasonZheng0917" target="_blank">
        Jason Zheng
      </a>
      <font-awesome-icon :icon="['fab', 'github']" />
    </h3>
  </nav>
</template>

<style scoped>
nav {
  font-size: 16px;
  font-weight: 300;
  padding: 1rem;
  color: #5c3a0b;
  background: #181818;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.home-btn {
  padding: 0.4rem 1.5rem;
  border: 1px solid #5c3a0b;
}
.home-btn:hover {
  background: #5c3a0b;
}
nav a {
  color: #c78222;
  text-decoration: none;
  font-weight: bold;
}
@media screen and (max-width: 780px) {
  nav {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
