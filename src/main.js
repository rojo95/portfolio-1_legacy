import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue';
import router from './router';

import './assets/main.css';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import 'material-design-icons/iconfont/material-icons.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');