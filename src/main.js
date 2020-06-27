import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import BootstrapVue from 'bootstrap-vue'
import 'element-ui/lib/theme-chalk/index.css';
import SvgIcon from './components/SvgIcon.vue';
import router from './router'
require('./mock');

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component('SvgIcon', SvgIcon);



new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')

