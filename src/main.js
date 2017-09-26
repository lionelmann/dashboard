import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { routes } from './routes';

Vue.use(VueRouter, VueAxios, axios);

// Vue.axios.defaults.headers.common['X-WP-Nonce'] = wp_api_vuejs_poc.nonce;

const router = new VueRouter({
	routes,
	mode: 'history'
});

import App from './App.vue';
Vue.component( 'App', App );

new Vue({
	el: '#app',
  	router,
  	render: h => h(App)
})
