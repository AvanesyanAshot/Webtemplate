import './js/com'
import './css/main.css'
import './scss/main.scss'

window.Vue = require('vue');
import store from "./store"

//Components
Vue.component('example-component',require('./components/Example.vue').default);

const app = new Vue({
   data() {
      return {
         component : false
      }
   },
   store: store,
   el: '#app',
});