import Home 		from './components/Home.vue';
import Summary 		from './components/Summary.vue';
import Github		from './components/Github.vue';
import Tasks 		from './components/Tasks.vue';
import Social 		from './components/Social.vue';
import Resources 	from './components/Resources.vue';

export const routes = [
	// ==== DEV ====
	{ path: '/', component: Home, props: true },
	{ path: '/summary', component: Summary, props: true },
	{ path: '/github', component: Github, props: true },
	{ path: '/tasks', component: Tasks, props: true },
	{ path: '/social', component: Social, props: true },
	{ path: '/resources', component: Resources, props: true }
	// ==== HYPE ====
	// { path: '/', component: Home, props: true },
	// { path: '/summary', component: Summary, props: true },
	// { path: '/github', component: Github, props: true },
	// { path: '/tasks', component: Tasks, props: true },
	// { path: '/social', component: Social, props: true },
	// { path: '/resources', component: Resources, props: true }
];