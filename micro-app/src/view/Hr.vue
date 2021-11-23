<template>
  <div class="micro-app">
    <h2 class="title">{{ msg }}</h2>
    <micro-app
      name="vueapp"
      url="http://localhost:8080/"
      baseroute="/vueapp"
    ></micro-app>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let msg = ref("人力系统");
    return {
      msg,
    };
  },
};
</script>

<style scoped>
.micro-app {
  padding: 20px;
  background-color: turquoise;
}
.title {
  font-size: 16px;
}
</style>
