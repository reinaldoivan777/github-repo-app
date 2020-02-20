import Vue from 'vue';
import App from './App.vue';
import dotenv from 'dotenv';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Readme from './components/Readme';
import Search from './components/Search';

dotenv.config();
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
library.add(faArrowLeft);

Vue.component('font-awesome-icon', FontAwesomeIcon);

const router = new VueRouter({
  routes: [
    { path: '/', component: Search },
    { path: '/detail/:username/:repoName', name: 'detail', component: Readme }
  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
