import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp({});
app.use(router);



app.mount("#app");



