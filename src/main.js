//Import
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import Footer from './components/Shared/Footer.vue'
import { store } from './store/store.js'

// Register global components 
Vue.component('hype-footer', Footer) // Register globally

// Use
Vue.use(Buefy);
Vue.use(VueRouter);

const router = new VueRouter({
	routes, // Have to pass an object where we setup the router. ES6 syntax (routes:routes)
  mode: 'history', // Remove the hash
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})