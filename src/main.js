import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Estilos globales
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/css/main.css' // Tu CSS extraído

const app = createApp(App)
app.use(router)
app.mount('#app')