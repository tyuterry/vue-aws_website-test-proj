import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

//preview plugin
import Previewer from 'virtual:vue-component-preview';

//icon package
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


import './assets/main.scss'

library.add(faCaretDown)

const app = createApp(App)

app.use(router)
app.use(Previewer);
app.component('FAicon', FontAwesomeIcon);

app.mount('#app')
