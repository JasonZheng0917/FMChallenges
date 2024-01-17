<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  color: #c78222;
  background: #181818;
  line-height: 1.6;
  font-size: 16px;
  font-family: "Gill Sans", sans-serif;
}
body::-webkit-scrollbar {
  width: 10px;
}
body::-webkit-scrollbar-track {
  background-color: #c78222;
}
body::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background-color: #5c3a0b;
}
</style>
