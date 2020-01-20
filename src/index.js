import './js/com'
import './css/main.css'
import './scss/main.scss'

window.Vue = require('vue');
var VueRouter = require('vue-router');

//Links
Vue.use(VueRouter);
var router = new VueRouter({
   router: [

   ]
});
//Components
Vue.component('example-component',require('./components/Example.vue').default);

const app = new Vue({
   el: '#app',
});