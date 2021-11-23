<template>
  <div class="micro-app">
    <h2 class="title">{{ msg }}</h2>
    <!--
      micro-app组件中
      name：子应用名称，必传，且要唯一，需要以字母开头，名称中不能带有"."、"#"等特殊符号
      url：必传，子应用的url地址
      baseroute：可选，基座应用分配给子应用的路由前缀，就是route中配置的path字段，本案例中是/vueapp
    -->
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
