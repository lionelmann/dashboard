import Login from './components/Login.vue';
import ClientDashboard from './components/Client/Client.vue';
import AdminDashboard from './components/Admin/Admin.vue';
import Config from './components/Admin/ClientSetup.vue';

export const routes = [
	{ path: '', component: Login }, //Load the "Login" component at the root path
	{ path: '/client', component: ClientDashboard },
	{ path: '/client/:clientname', component: ClientDashboard },
	{ path: '/admin', component: AdminDashboard },
	{ path: '/admin/:clientname', component: AdminDashboard },
	{ path: '/config', component: Config },
];