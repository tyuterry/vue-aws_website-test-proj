import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Previewer from 'virtual:vue-component-preview';


import './assets/main.css'
const app = createApp(App)

app.use(router)
app.use(Previewer);

app.mount('#app')
