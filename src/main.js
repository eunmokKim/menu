import { createApp } from 'vue'
import store from "@/scripts/store";
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Admin from "@/pages/Admin";
import KakaoLogin from "@/pages/KakaoLogin";

const routes = [
    {path:'/', component : Home},
    {path:'/login', component : Login},
    {path:'/admin', component: Admin},
    {path:'/redirectLogin', component: KakaoLogin}
];

const router = createRouter({
    history : createWebHistory(),
    routes
})

createApp(App).use(store).use(router).mount('#app')
