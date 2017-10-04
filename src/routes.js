import Home from './components/Login.vue';
import ClientDashboard from './components/Client/Client.vue';
import AdminDashboard from './components/Admin/Admin.vue';
import Config from './components/Admin/ClientConfig.vue';

export const routes = [
	{ path: '', component: Home }, //Load the "Home" component at the root path
	{ path: '/client/:clientname', component: ClientDashboard },
	{ path: '/admin/:clientname', component: AdminDashboard },
	{ path: '/config', component: Config },
];