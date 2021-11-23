import { createRouter, createWebHistory } from "vue-router";

const VueApp = () => import("../view/VueApp.vue");

const routes = [
    {
        // path: "/hr",
        path: "/vueapp/:page*",
        component: VueApp,
        meta: {
            title: "人力系统"
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta) {
        document.title = to.meta.title;
    }
    next();
});

export default router;