import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import SvgIcon from './components/SvgIcon.vue';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component('SvgIcon', SvgIcon);



new Vue({
  render: h => h(App),
}).$mount('#app')
