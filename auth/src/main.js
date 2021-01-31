import Vue from 'vue';
import App from './App.vue';
import store from '../store/index';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueRouter from 'vue-router';
import router from '../router/index'

Vue.use(VueRouter);
Vue.use(Buefy);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
