import { createApp } from 'vue'
import App from './App.vue'

import './assets/style.css';

import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(fas)

document.querySelector('body').classList.add('dark-mode');

createApp(App)
.component('fa', FontAwesomeIcon)
.use(bootstrap)
.mount('#app');
