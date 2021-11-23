<template>
  <div class="train">
    <h2 class="title">{{ msg }}</h2>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let msg = ref("培训系统");
    return {
      msg,
    };
  },
};
</script>

<style scoped>
.train {
  padding: 20px;
  background-color: yellowgreen;
}
.title {
  font-size: 16px;
}
</style>
