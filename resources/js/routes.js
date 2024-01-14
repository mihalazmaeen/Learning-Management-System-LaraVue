import HomeComponent from "./components/frontend/home.vue";
// Auth
import LoginComponent from "./components/frontend/auth/Login.vue";


export const routes = [
    { path: "/", component: HomeComponent, name: "home" },
    { path: "/login", component: LoginComponent, name: "login" },
];
