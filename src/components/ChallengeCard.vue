<script setup>
import { RouterLink } from "vue-router";

const props = defineProps(["challenge"]);
</script>

<template>
  <div class="card">
    <div class="card-img">
      <img :src="props.challenge.screenshot" :alt="props.challenge.title" />
      <div class="tag">{{ props.challenge.level }}</div>
    </div>
    <div class="card-info">
      <h4>{{ props.challenge.title }}</h4>
      <p>
        {{ props.challenge.desc }}
      </p>
    </div>
    <div class="card-action">
      <div class="card-action-challenge">
        <a
          :href="props.challenge.source"
          target="_blank"
          rel="noopener noreferrer"
        >
          查看
        </a>
        <font-awesome-icon class="icon" :icon="['fas', 'square-up-right']" />
      </div>
      <RouterLink class="btn" :to="props.challenge.route">DEMO</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #5c3a0b;
  max-width: calc(100vw / 5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-img {
  position: relative;
  padding: 1rem;
  border-bottom: 1px solid #5c3a0b;
}
.card-img .tag {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: #5c3a0b;
  padding: 0.15rem 1rem;
  font-size: 10px;
  font-weight: bold;
  border-radius: 30px;
}
.card-img img {
  width: 90%;
  vertical-align: middle;
  cursor: nesw-resize;
}
.card-img img:hover {
  transform: scale(1.2);
  transition: all 0.8s;
}
.card-info {
  padding: 1rem;
  margin-bottom: auto;
  text-align: left;
}
.card-info > p {
  margin-top: 1rem;
  font-size: 14px;
  color: #9f9f9f;
}
.card-action {
  border-top: 1px solid #5c3a0b;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}
.card-action > .btn {
  padding: 0 10px;
  border: 1px solid #5c3a0b;
  text-decoration: none;
  color: #c78222;
  font-size: 14px;
}
.card-action-challenge {
  text-decoration: none;
  color: #c78222;
  padding: 0 10px;
  border: 1px solid #5c3a0b;
}
.card-action-challenge > .icon {
  margin-left: 5px;
}
.card-action-challenge > a {
  text-decoration: none;
  color: #c78222;
  font-size: 14px;
}
.card-action-challenge:hover,
.card-action > .btn:hover {
  color: #c78222;
  background-color: #5c3a0b;
}
@media screen and (max-width: 1440px) {
  .card {
    max-width: calc(100vw / 4);
  }
}
@media screen and (max-width: 1024px) {
  .card {
    max-width: calc(100vw / 3);
  }
}
@media screen and (max-width: 880px) {
  .card {
    max-width: calc(100vw / 2.4);
  }
}
@media screen and (max-width: 560px) {
  .card {
    max-width: 90vw;
  }
}
</style>
