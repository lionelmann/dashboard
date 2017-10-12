<template>
	<div>
		<hype-header></hype-header>
		<div class="columns" style="margin: 0;">
			<hype-sidenav></hype-sidenav>
			<div class="column">
				<hype-breeze></hype-breeze>
				<hype-github></hype-github>
			</div>
		</div>
		<hype-footer></hype-footer>
	</div>
</template>

<script>
	import Breeze from '../Dashboards/Breeze.vue';
	import Github from '../Dashboards/Github.vue';
	import AdminSideNav from './SideNav.vue';
	import Header from './Header.vue';
	export default {
		components: {
			'hype-sidenav': AdminSideNav,
			'hype-header': Header,
			'hype-breeze': Breeze,
			'hype-github': Github,
		}
	};
</script>

<style lang="sass" scoped>
</style>