import { createApp } from 'vue'
import '@fontsource-variable/dm-sans'
import '@fontsource-variable/space-grotesk'
import App from './App.vue'
import router from './router'
import './styles/main.css'

createApp(App).use(router).mount('#app')
