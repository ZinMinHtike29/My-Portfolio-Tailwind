
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/app.css"
import Vue3Lottie from 'vue3-lottie'
import VWave from 'v-wave'
import 'vue3-lottie/dist/style.css'
import { MotionPlugin } from "@vueuse/motion"


createApp(App).use(store).use(router).use(Vue3Lottie).use(VWave).use(MotionPlugin).mount('#app')
