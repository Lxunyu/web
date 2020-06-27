// const HelloWorld = { template: '<div>world</div>' }
import VueRouter from 'vue-router';
import Vue from 'vue';
import Login from '../src/components/Login';
import all from '../src/components/all';
import App from '../src/App';

Vue.use(VueRouter);


const routes = [
  {
    path:'/',
    component:App,
    redirect:'/all'
  },
  {
    path:'/all',
    component:all,
  },
  { 
      name:Login,
      path: '/Login/:UserId', 
      component: Login 
  },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router

