import './js/com'
import './css/main.css'
import './scss/main.scss'

window.Vue = require('vue');
var VueRouter = require('vue-router');

//Components
Vue.component('example-component',require('./components/Example.vue').default);

const app = new Vue({
   el: '#app',
});