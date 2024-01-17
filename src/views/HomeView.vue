<script setup>
import { ref, computed } from "vue";
import { useChallengeStore } from "../stores/challenge";
import ChallengeCard from "../components/ChallengeCard.vue";

const challengeStore = useChallengeStore();

const searchByName = ref("");
const filterByLevel = ref("");

const filteredChallenges = computed(() => {
  let filteredArr = challengeStore.challenges;
  if (filterByLevel.value !== "") {
    switch (filterByLevel.value) {
      case "初級":
        filteredArr = filteredArr.filter((e) => e.level.includes("初級"));
        break;
      case "中級":
        filteredArr = filteredArr.filter((e) => e.level.includes("中級"));
        break;
      default:
        filteredArr = filteredArr.filter((e) =>
          e.level.includes(filterByLevel.value)
        );
        break;
    }
  }
  if (searchByName.value !== "") {
    filteredArr = filteredArr.filter((e) =>
      e.title.toLowerCase().includes(searchByName.value.toLowerCase())
    );
  }
  return filteredArr;
});
</script>

<template>
  <nav id="home-navbar">
    <a href="#!">
      <img src="../assets/bughello.gif" alt="Logo" />
    </a>
  </nav>
  <main>
    <section id="hero-section">
      <section id="hero-welcome">
        <h2>哈囉 ～</h2>
        <h2>歡迎蒞臨我的練習網站 !</h2>
      </section>
      <section id="hero-img">
        <img src="../assets/undraw_online_stats_0g94.svg" alt="undraw" />
      </section>
    </section>
    <nav id="filter-navbar">
      <span>
        <input
          type="text"
          v-model="filterByLevel"
          list="filter-by-level"
          placeholder="Level選擇"
        />
        <datalist id="filter-by-level">
          <option>初級</option>
          <option>中級</option>
        </datalist>
      </span>
      <span>
        <input type="text" v-model="searchByName" placeholder="快速搜尋" />
      </span>
    </nav>
    <section id="cards-section">
      <template v-for="(challenge, index) in filteredChallenges" :key="index">
        <ChallengeCard v-bind:challenge="challenge" />
      </template>
      <div id="empty-msg" v-if="filteredChallenges.length === 0">
        查無結果呦～請重新查詢
      </div>
    </section>
  </main>
  <footer>
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
  </footer>
</template>

<style scoped>
#home-navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181818;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  border-bottom: 1px solid #5c3a0b;
  z-index: 99;
}
#home-navbar > a {
  margin: 0.5rem 0;
  padding: 0.25rem 3rem;
  border-left: 1px solid #5c3a0b;
  border-right: 1px solid #5c3a0b;
}
#home-navbar > a > img {
  height: 3rem;
  vertical-align: middle;
}
main {
  padding: 5rem 0 2rem;
}
main section {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}
#hero-section {
  align-items: center;
  padding: 3rem 5rem;
}
#hero-welcome {
  width: 50%;
  flex-direction: column;
}
#hero-welcome > h2 {
  font-size: 2.6rem;
}
#hero-welcome > q {
  background-color: #5c3a0b;
  border-left: 5px solid #c78222;
  border-right: 5px solid #c78222;
  padding: 0.8rem;
  font-weight: bold;
}
#hero-welcome > div > a {
  text-decoration: none;
  color: #c78222;
  text-align: center;
  padding: 0.5rem;
  border: #c78222 1px solid;
}
#hero-welcome > div > a:hover {
  background-color: #5c3a0b;
}
#hero-img {
  width: 50%;
}
#hero-img > img {
  width: 70vh;
}
#filter-navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 7rem;
  margin: 1.5rem 0;
  position: sticky;
  top: 73px;
  z-index: 88;
  background-color: #5c3a0b;
}
#filter-navbar > span {
  padding: 0.5rem 1.2rem;
  border-right: 1px solid #181818;
  font-weight: bold;
}
#filter-navbar > span:first-child {
  border-left: 1px solid #181818;
}
#filter-navbar input {
  background-color: #181818;
  border: none;
  padding: 0.2rem 0.8rem;
  border-radius: 50px;
  outline: 1px dashed #fff;
  color: #fff;
  font-size: 16px;
  text-align: center;
}
#filter-navbar input:focus {
  outline: 2px solid #c78222;
}
#cards-section {
  text-align: center;
  flex-wrap: wrap;
}
#cards-section #empty-msg {
  min-height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
footer {
  font-weight: 300;
  padding: 1rem;
  color: #5c3a0b;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
footer a {
  color: #c78222;
  text-decoration: none;
  font-weight: bold;
}
::placeholder {
  color: #fff;
  opacity: 0.8;
}
@media screen and (max-width: 1200px) {
  #hero-section {
    flex-direction: column-reverse;
    padding: 2rem;
  }
  #hero-welcome {
    width: 100%;
    text-align: center;
  }
  #hero-welcome > h2 {
    font-size: 1.6rem;
  }
  #hero-welcome > a {
    width: 100%;
  }
  #hero-img {
    width: 100%;
  }
  #hero-img > img {
    width: 40vh;
  }
}
@media screen and (max-width: 800px) {
  #filter-navbar {
    flex-direction: column;
    padding: 0;
  }
  #filter-navbar > span:first-child {
    border: none;
  }
  #filter-navbar > span:not(:first-child) {
    display: none;
  }
  footer {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
