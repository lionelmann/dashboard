import Home from './components/Login.vue';
import ClientDashboard from './components/Dashboards/Client.vue';
import AdminDashboard from './components/Dashboards/Admin.vue';

export const routes = [
	{ path: '', component: Home }, //Load the "Home" component at the root path
	{ path: '/client', component: ClientDashboard },
	{ path: '/admin', component: AdminDashboard },
];