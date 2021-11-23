import { createApp } from 'vue'
import App from './App.vue'
import microApp from "@micro-zoe/micro-app";
import router from "./router/index.js";

// 微前端
microApp.start();

createApp(App).use(router).mount('#app')
