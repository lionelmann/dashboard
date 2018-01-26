import Login from './components/Login.vue';
import AdminDashboard from './components/Admin/Admin.vue';
import Config from './components/Admin/ClientSetup.vue';

export const routes = [
	{ path: '', component: Login }, //Load the "Login" component at the root path
	{ path: '/admin', component: AdminDashboard },
	{ path: '/config', component: Config },
];