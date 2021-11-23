import { createRouter, createWebHistory } from "vue-router";

const Hr = () => import("../view/Hr.vue");
const Train = () => import("../view/Train.vue");

const routes = [
    {
        // path: "/hr",
        path: "/vueapp/:page*",
        component: Hr,
        meta: {
            title: "人力系统"
        }
    },
    {
        path: "/train",
        component: Train,
        meta: {
            title: "培训系统"
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