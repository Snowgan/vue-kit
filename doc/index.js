import Vue from 'vue';
import App from './App';
import router from './routes'
import UIKit from '../lib';

Vue.config.productionTip = false;
Vue.use(UIKit);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});