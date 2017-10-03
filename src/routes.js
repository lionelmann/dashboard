import Home from './components/Login.vue';
import ClientDashboard from './components/Dashboards/Client.vue';
import AdminDashboard from './components/Dashboards/Admin.vue';
import Config from './components/ClientConfig.vue';

export const routes = [
	{ path: '', component: Home }, //Load the "Home" component at the root path
	{ path: '/client', component: ClientDashboard },
	{ path: '/admin', component: AdminDashboard },
	{ path: '/config', component: Config },
];