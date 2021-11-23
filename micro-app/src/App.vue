<template>
  <Header></Header>
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul,
ol,
li {
  list-style: none;
}
a {
  font-size: 14px;
  color: #333;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
