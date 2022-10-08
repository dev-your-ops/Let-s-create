import Vue from 'vue';
import App from './App.vue';

import 'prismjs';
import 'prismjs/themes/prism.css';

import './assets/styles/index.css';

import '@/ui/';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
