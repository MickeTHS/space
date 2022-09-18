<template>
  <div id="app">
    <GameMainLayout />
  </div>
</template>

<script>
import GameMainLayout from '@/layouts/GameMainLayout.vue';

export default {
  name: 'App',
  components: {
    GameMainLayout
}
}
</script>

<style>
@font-face {
  font-family: "Jura";
  src: local("Jura"),
   url(./assets/fonts/Jura-Light.ttf) format("truetype");
}

#app {
  font-family: Jura, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #000000;
}
</style>
